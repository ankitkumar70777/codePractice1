import React, { useState } from "react";

function UseStateWithObject() {
  const [state, setstate] = useState({ fname: "none", lname: "none" });

  return (
    <div>
      <form>
        <input
          type="text"
          name="fname"
          onChange={(e) => {
            //this means we are first preserve state with currunt val and then update
            console.log("state ---", { ...state });
            setstate({ ...state, fname: e.target.value });
          }}
          value={state.fname}
        />
        <input
          type="text"
          name="fname"
          onChange={(e) => {
            setstate({ ...state, lname: e.target.value });
          }}
          value={state.lname}
        />
        <div>fname :::{state.fname}</div>
        <div>lname :::{state.lname}</div>
        <div></div>
      </form>
    </div>
  );
}

export default UseStateWithObject;
