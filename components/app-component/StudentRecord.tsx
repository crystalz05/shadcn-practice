import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

const records = [
  {
    serial: 1,
    name: "Christopher Robins",
    sex: "Male",
    age: "23",
  },
];

const StudentRecord: React.FC = () => {
  return (
    <div className="grid justify-center">
      <div>
        <h2 className="text-center my-9">LIST OF STUDENT NAMES</h2>
      </div>
      <div className="w-[700px]">
        <Table>
          <TableCaption>A list of students.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>S/N</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Sex</TableHead>
              <TableHead>Date of Birth</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.serial}>
                <TableCell>{record.serial}</TableCell>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.sex}</TableCell>
                <TableCell>{record.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} className="text-right">
                <Button className="bg-green-600 rounded-[5px] text-white hover:bg-green-400 active:text-green-700 active:bg-white">
                  Add
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default StudentRecord;
