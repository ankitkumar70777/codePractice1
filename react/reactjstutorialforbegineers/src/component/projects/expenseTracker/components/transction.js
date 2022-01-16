import React, { useContext } from "react";
import { glabalContext } from "../context/globalState";

export default function Transction({ transction }) {
  const { deleteTransction } = useContext(glabalContext);

  const sign = transction.amount < 0 ? "-" : "+";

  return (
    <>
      <li className={transction.amount < 0 ? "plus" : "minus"}>
        {transction.text}{" "}
        <span>
          {sign} {Math.abs(transction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => {
            deleteTransction(transction.id);
          }}
        >
          X
        </button>
      </li>
    </>
  );
}
