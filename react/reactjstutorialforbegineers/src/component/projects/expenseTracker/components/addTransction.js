import React, { useState, useContext } from "react";
import { glabalContext } from "../context/globalState";

export default function AddTransction() {
  const [text, addText] = useState("");
  const [amount, addAmount] = useState(0);

  const { addTransction } = useContext(glabalContext);
  console.log(text, "---", amount);

  const submitForm = (e) => {
    e.preventDefault();
    const newTransction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };

    addTransction(newTransction);
  };

  return (
    <>
      <h3>Add new transction</h3>
      <form id="form" onSubmit={submitForm}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Exter text..."
            value={text}
            onChange={(e) => {
              addText(e.target.value);
            }}
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative-expense, positive-income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Exter amount..."
            value={amount}
            onChange={(e) => {
              addAmount(parseInt(e.target.value));
            }}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
