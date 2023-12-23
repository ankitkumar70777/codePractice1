'use client'


import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Details = () => {
  const path = usePathname();
  console.log('path------------', path, path === "/details");
  
  return (
    <div>
      <p>Details page</p>
      <p><Link href="/dashboard">go to dashbaord</Link></p>
    </div>
  );
};

export default Details;
