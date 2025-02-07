import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import NavigationMenuDemo from "./NavigationMenu";
import Image from "next/image";
import shirt from "../images/item-shirt.png";
import { Button } from "../ui/button";

const Store: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen max-h-screen items-center">
      <div className="flex flex-col p-4 container relative">
        <div className="top-4 right-7 grid place-items-end">
          <NavigationMenuDemo />
        </div>
        <div className="flex flex-wrap justify-around mt-4 overflow-auto max-h-[90vh] shadow">
          {/* <div className="w-[300px] h-[500px] bg-blue-700 m-3"></div> */}
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="w-[300px] m-3 flex flex-col p-5 shadow shadow-lg hover:cursor-pointer hover:bg-slate-50 gap-2"
            >
              <div className="bg-contain max-h-[250px]">
                <Image
                  src={shirt}
                  alt="item"
                  className="w-full h-full object-contain"
                ></Image>
              </div>
              <div className="flex flex-col gap-4">
                <div className="px-2">
                  <h2 className="text-sm">
                    Uniquo Basic T-Shirt Oversized Red
                  </h2>
                  <h2 className="text-xl font-semibold"> IDR 200.000</h2>
                  <h2>4.9 - 518 sold</h2>
                </div>
                <Button className="bg-orange-400 text-white hover:bg-orange-500 rounded-[5px] w-full">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-white absolute bottom-4">
        <Pagination className="flex justify-center py-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Store;
