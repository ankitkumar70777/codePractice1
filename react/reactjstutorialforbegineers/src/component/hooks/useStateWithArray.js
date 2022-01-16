import React, { useState } from "react";

export default function UseStateWithArray() {
  //input val

  const [input, setInput] = useState("");
  console.log(input);

  const [state, setstate] = useState([]);

  const addInArray = (val) => {
    console.log("val", val);
    setstate([...state, input]);
  };
  console.log({ state });

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        onClick={(e) => {
          setInput("");
        }}
      />
      <button
        onClick={(e) => {
          addInArray(e.target.value);
        }}
      >
        add in array
      </button>
      <ul>
        {state.map((v) => {
          return <li key={v.id}>{v}</li>;
        })}
      </ul>
    </div>
  );
}
