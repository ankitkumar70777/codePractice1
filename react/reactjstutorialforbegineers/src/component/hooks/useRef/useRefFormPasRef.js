import React, { useEffect, useRef } from "react";
import UseRefFormPasRefInputCompo from "./useRefFormPasRefInputCompo";
//ref can only be use in same component
function UseRefFormPasRef() {
  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    console.log("page loded");
    fNameRef.current.focus();
    fNameRef.current.style.color = "red";
    fNameRef.current.value = "red";
  }, []);

  const goToLname = (e) => {
    if (e.key == "Enter") lNameRef.current.focus();
  };

  const submit = (e) => {
    if (e.key == "Enter") submitRef.current.focus();
  };

  return (
    <div>
      <UseRefFormPasRefInputCompo
        type="text"
        placeholder="fname"
        name="fname"
        ref={fNameRef}
        onKeyDown={goToLname}
      />
      <br />
      <UseRefFormPasRefInputCompo
        type="text"
        placeholder="lname"
        name="lname"
        ref={lNameRef}
        onKeyDown={submit}
      />
      <br />
      <input type="submit" name="submit" ref={submitRef} />
    </div>
  );
}

export default UseRefFormPasRef;
