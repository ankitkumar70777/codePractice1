import React, { useContext } from "react";
import { glabalContext } from "../context/globalState";

export default function IncomeExpenses() {
  const { transctions } = useContext(glabalContext);

  const amounts = transctions.map((v) => v.amount);

  const income = amounts
    .filter((v) => v > 0)
    .reduce((p, c) => {
      return p + c;
    }, 0)
    .toFixed(2);

  console.log({ income });

  const expense = amounts
    .filter((v) => v < 0)
    .reduce((p, c) => {
      return p + c;
    }, 0)
    .toFixed(2);

  console.log({ expense });

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          {income}
        </p>
      </div>

      <div>
        <h4>Expenses</h4>
        <p id="money-minus" className="money minus">
          {expense}
        </p>
      </div>
    </div>
  );
}
