import React from "react";

//whatever we pass btween <tag></tag> can be acces as children
function Button({ handleClick, children }) {
  console.log("rendering button", children);
  return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(Button);
