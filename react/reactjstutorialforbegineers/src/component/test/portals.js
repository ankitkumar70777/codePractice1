import React from "react";
import ReactDom from "react-dom";

const PortalsTest = () => {
  return ReactDom.createPortal(
    <div>PortalsTest</div>,
    document.getElementById("portalsAnkit")
  );
};

export default PortalsTest;
