import React from "react";
import { Metadata } from "next";
import Link from "next/link";

// landing page metadata
export const metadata: Metadata = {
  title: "Student page",
  description: "All student available here",
};

const Student = () => {
  return <div>
    <p>Student this is landing page</p>
    <p><Link href="/student/1" prefetch={false}>Student 1</Link></p>
    <p><Link href="/student/2" prefetch={false}>Student 2</Link></p>
    <p><Link href="/student/3" prefetch={false}>Student 3</Link></p>
    <p><Link href="/student/4" prefetch={false}>Student 4</Link></p>
    <p><Link href="/student/5" prefetch={false}>Student 5</Link></p>
  </div>;
};

export default Student;
