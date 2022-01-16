import React, { useState } from "react";
import "./accordian.css";

export default function AccordianList({ question, answer }) {
  const [state, setstate] = useState(false);

  const changeState = (state) => {
    setstate(state);
  };

  return (
    <>
      <div className="main-heading">
        <h3
          onClick={() => {
            changeState(!state);
          }}
        >
          <span>{state ? "-" : "+"}</span> {question}
        </h3>
      </div>

      {state && <p>{answer}</p>}
    </>
  );
}
