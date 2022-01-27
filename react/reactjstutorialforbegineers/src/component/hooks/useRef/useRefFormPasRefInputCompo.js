import React from "react";

// also use second prameter ref to receive ref
function UseRefFormPasRefInputCompo(
  { type, placeholder, name, onKeyDown },
  ref
) {
  console.log({
    type,
    placeholder,
    name,
    onKeyDown,
    ref,
  });

  return (
    <input
      type="text"
      placeholder="lname"
      name="lname"
      onKeyDown={onKeyDown}
      //link received ref to input
      ref={ref}
    />
  );
}

//to use ref from another component we need to use forwordRef wrapper function

export default React.forwardRef(UseRefFormPasRefInputCompo);
