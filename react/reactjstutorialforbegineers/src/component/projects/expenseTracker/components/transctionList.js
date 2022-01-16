import React, { useContext } from "react";
import { glabalContext } from "../context/globalState";
import Transction from "./transction";

export default function TransctionList() {
  const { transctions } = useContext(glabalContext);

  console.log("-------------", transctions);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transctions.map((v) => (
          <Transction key={v.id} transction={v} />
        ))}
      </ul>
    </div>
  );
}
