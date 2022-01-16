import React from "react";
import "./stylesheetcss.css";
import styleComponentModule from "./stylesheet.module.css";

function Stylesheet(props) {
  const isPrimary = props.primary ? "classNameForH1" : "";
  const headeing2 = {
    color: "blue",
  };
  return (
    <div>
      <h1 className={`${isPrimary} makeItBoldAndItalic`}>stylesheet testing</h1>
      {/* inline style */}
      <h2 style={headeing2}>this is heading 2 for inline styling</h2>
      <h3
        className={`${styleComponentModule.makeItBoldAndItalicModule} ${styleComponentModule.colorGreen}`}
      >
        this is module styleing
      </h3>
    </div>
  );
}

export default Stylesheet;
