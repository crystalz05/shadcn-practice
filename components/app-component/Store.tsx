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

const Store: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="flex flex-grow p-4 container relative">
        <div className="absolute top-4 right-4">
          <NavigationMenuDemo />
        </div>
        <div className="grid  mt-4">
          {/* <div className="w-[300px] h-[500px] bg-blue-700 m-3"></div> */}
        </div>
      </div>
      <div className="w-full bg-white">
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
