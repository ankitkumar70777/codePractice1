import React, { useContext } from "react";
import { glabalContext } from "../context/globalState";

export default function Balance() {
  const { transctions } = useContext(glabalContext);

  const amounts = transctions.map((v) => v.amount);

  console.log({ amounts });
  const total = amounts.reduce((p, c) => {
    return p + c;
  }, 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">{total} Rs</h1>
    </>
  );
}
