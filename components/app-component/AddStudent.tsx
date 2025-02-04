"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogClose } from "@radix-ui/react-dialog";

interface AddStudentProps {
  onAddStudent?: (student: { name: string; sex: string; dob: string }) => void;
}

const handleInputChange =
  (setter: React.Dispatch<React.SetStateAction<string>>) =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };

const AddStudent: React.FC<AddStudentProps> = ({ onAddStudent }) => {
  const [name, setName] = useState<string>("");
  const [sex, setSex] = useState<"Male" | "Female">("Male");
  const [dob, setDob] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (onAddStudent) {
      onAddStudent({ name, sex, dob });
      console.log(name, sex, dob);
      clearForm();
    }
  };

  const clearForm = () => {
    setName("");
    setDob("");
  };

  const nameOnChange = () => {};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Student</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ADD A NEW STUDENT</DialogTitle>
          <DialogDescription>
            Add new student details. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                required
                value={name}
                onChange={handleInputChange(setName)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Sex
              </Label>
              <Select
                value={sex}
                onValueChange={(value: "Male" | "Female") => setSex(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Age
              </Label>
              <Input
                id="username"
                required
                type="date"
                value={dob}
                onChange={handleInputChange(setDob)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button type="submit">Add</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddStudent;
