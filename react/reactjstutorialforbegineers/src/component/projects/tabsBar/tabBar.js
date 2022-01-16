import React, { useState } from "react";
import "../App.css";

function TabBar() {
  const [currentClassName, setCurrentClassName] = useState("tabsBody");

  const setCurrentClassNameFn = (data) => {
    console.log("trying to change classname");
    setCurrentClassName(data);
  };

  return (
    <div className="wholeTabComponent">
      <div className="tabBar">
        <div className="tabs" onClick={() => setCurrentClassNameFn("london")}>
          London
        </div>
        <div className="tabs" onClick={() => setCurrentClassNameFn("paris")}>
          Paris
        </div>
        <div className="tabs" onClick={() => setCurrentClassNameFn("tokio")}>
          Tokio
        </div>
      </div>
      <div>
        {currentClassName === "london" && (
          <div id="london" className={currentClassName}>
            london div london div london div london div london div london div
            london div london div london div london div london div london div
          </div>
        )}
        {currentClassName === "paris" && (
          <div id="paris" className={currentClassName}>
            paris div paris div paris div paris div paris div paris div paris
            div paris div paris div{" "}
          </div>
        )}
        {currentClassName === "tokio" && (
          <div id="tokio" className={currentClassName}>
            tokio div tokio div tokio div tokio div tokio div tokio div tokio
            div tokio div{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default TabBar;
