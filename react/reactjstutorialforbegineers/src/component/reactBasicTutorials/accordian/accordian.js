import React, { useState } from "react";
import { questions } from "./api";
import "./accordian.css";
import AccordianList from "./accordianList";

export default function Accordian() {
  const [state, setstate] = useState(questions);

  return (
    <div>
      <section className="main-div">
        <h3>React Interview Questin</h3>
        <br />
        {state.map((state) => {
          return <AccordianList key={state.id} {...state}></AccordianList>;
        })}
      </section>
    </div>
  );
}
