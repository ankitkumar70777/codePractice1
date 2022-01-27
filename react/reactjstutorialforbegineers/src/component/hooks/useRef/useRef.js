import React, { useRef, useEffect } from "react";

function UseRefHook() {
  //1) create ref
  const inputFnameRef = useRef();

  useEffect(() => {
    //   3) set focus
    //we use useEffect to set focus after document load
    inputFnameRef.current.focus();
  }, []);

  return (
    <div>
      {/* 2) map ref  */}
      <input ref={inputFnameRef} type="text" />
    </div>
  );
}

export default UseRefHook;
