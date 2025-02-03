"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z
  .object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z
      .string()
      .min(2, { message: "Password must be at least 2 characters." }),
  })
  .superRefine((data, ctx) => {
    const validUsername = "tyro";
    const validPassword = "pass";

    if (data.username != validUsername && data.password != validPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Invalid username or password",
        path: ["username"],
      });
    }
  });

export function LoginForm() {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   toast({
  //     title: "You submitted the following values:",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   });
  // }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Login successful",
      description: "You're being redirected to the student records page",
    });
    router.push("/student-records");
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[600px] bg-white p-8 rounded-md shadow-md border py-3 h-[500px]">
        <h2 className="text-3xl font-bold text-center text-green-600 my-8">
          LOGIN PAGE
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Username"
                      {...field}
                      className="rounded-[7px] border-gray-200 min-h-[60px]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      {...field}
                      className="rounded-[7px] border-gray-200 min-h-[60px]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600"
            >
              Submit
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-red-500">
          {form.formState.errors.username && (
            <p>{form.formState.errors.username.message}</p>
          )}
          {form.formState.errors.password && (
            <p>{form.formState.errors.password.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
