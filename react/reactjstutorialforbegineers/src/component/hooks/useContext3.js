import React, { useContext } from "react";
import { reactContext1, reactContext2 } from "../../App";

export default function UseContext3() {
  const reactContext1Var = useContext(reactContext1);
  const reactContext2Var = useContext(reactContext2);
  return (
    <>
      <p>
        {reactContext1Var}, {reactContext2Var}
      </p>
    </>
  );
}
