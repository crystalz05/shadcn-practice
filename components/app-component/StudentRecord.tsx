"use client";

import React from "react";
import { useState } from "react";

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
import AddStudent from "./AddStudent";

interface Student {
  serial: number;
  name: string;
  sex: string;
  dob: string;
}

const StudentRecord: React.FC = () => {
  const [records, setRecords] = useState<Student[]>([
    {
      serial: 1,
      name: "Christopher Robins",
      sex: "Male",
      dob: "2000-01-30",
    },
  ]);

  const handleAddStudent = (student: {
    name: string;
    sex: string;
    dob: string;
  }) => {
    console.log(student.name, student.sex, student.dob);
    const newStudent = {
      serial: records.length + 1,
      name: student.name,
      sex: student.sex,
      dob: student.dob,
    };

    setRecords((prevRecords) => {
      return [...prevRecords, newStudent];
    });
  };

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
                <TableCell>{record.dob}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} className="text-right">
                <Button className="bg-green-600 rounded-[5px] text-white hover:bg-green-400 active:text-green-700 active:bg-white">
                  {/* <AddStudent /> */}
                  <AddStudent onAddStudent={handleAddStudent} />
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
