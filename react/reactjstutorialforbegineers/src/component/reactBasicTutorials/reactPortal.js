import React from "react";
import ReactDOM from "react-dom";

function ReactPortal() {
  return ReactDOM.createPortal(
    <div>
      <h1>hello Ankitkumar</h1>
    </div>,
    document.getElementById("portalsAnkit")
  );
}

export default ReactPortal;
