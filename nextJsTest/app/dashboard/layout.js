import React from "react";
import Sidebar from "./sidebar";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div className={styles.main}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
