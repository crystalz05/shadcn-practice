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
    <div className="flex flex-col min-h-screen max-h-screen items-center">
      <div className="flex flex-col p-4 container relative">
        <div className="top-4 right-7 grid place-items-end">
          <NavigationMenuDemo />
        </div>
        <div className="flex flex-wrap justify-around mt-4 overflow-auto max-h-[90vh] shadow">
          {/* <div className="w-[300px] h-[500px] bg-blue-700 m-3"></div> */}
          {[...Array(100)].map((_, i) => (
            <div key={i} className="w-[300px] h-[400px] bg-blue-700 m-3"></div>
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
