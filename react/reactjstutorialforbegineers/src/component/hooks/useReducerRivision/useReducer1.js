import React, { useReducer } from 'react';
const initialState = 0;
const reducer = (currState, action) => {
  switch (action) {
    case "increment": return currState + 1;
    case "decrement": return currState - 1;
    case "reset": return initialState;

    default: return currState;
  }
}

const UseReducer1 = () => {

  // const reducer = 
  const [newState, dispatch] = useReducer(reducer,initialState);


  return (
    <div>
      <p>newState - {newState}</p>
      <div>
        <button onClick={()=>{dispatch("increment")}}>increment</button>
        <button onClick={()=>{dispatch("decrement")}}>drement</button>
        <button onClick={()=>{dispatch("reset")}}>reset</button>
      </div>
    </div>
  )
}

export default UseReducer1