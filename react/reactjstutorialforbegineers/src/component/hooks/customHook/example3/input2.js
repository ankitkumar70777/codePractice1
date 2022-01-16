import { useState } from "react";

function useInputHook(initialValue) {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue("");
  };
  const bind = {
    value: value,
    onChange: (e) => setValue(e.target.value),
  };
  console.log("in gook", [value, bind, reset]);
  return [value, bind, reset];
}

export default useInputHook;
