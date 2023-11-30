"use client";

import styles from "./sidebar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();

  return (
    <>
      <div className={styles.sidenav}>
        <Link
          href='http://localhost:3000/dashboard'
          className={path === "/dashboard" ? styles.active : ""}
        >
          Dashbaord
        </Link>
        <Link
          href='http://localhost:3000/dashboard/customers'
          className={path === "/dashboard/customers" ? styles.active : ""}
        >
          Customers
        </Link>
        <Link
          href='http://localhost:3000/dashboard/invoices'
          className={path === "/dashboard/invoices" ? styles.active : ""}
        >
          Invoices
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
