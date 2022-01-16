import React, { createContext, useReducer } from "react";
import appReducer from "./appReducer";

//initial state
const initialState = {
  transctions: [
    // { id: 1, text: "Flower", amount: -20 },
    // { id: 2, text: "Salary", amount: 300 },
    // { id: 3, text: "Book", amount: -10 },
    // { id: 4, text: "Camera", amount: 150 },
  ],
};

export function globalState() {
  return <div></div>;
}

//create context

export const glabalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  //action
  function deleteTransction(id) {
    console.log("id -------", id);
    dispatch({
      type: "DELETE_TRANSCTION",
      payload: id,
    });
  }

  function addTransction(transction) {
    console.log("transction -------", transction);
    dispatch({
      type: "ADD_TRANSCTION",
      payload: transction,
    });
  }

  return (
    <glabalContext.Provider
      value={{
        transctions: state.transctions,
        deleteTransction,
        addTransction,
      }}
    >
      {children}
    </glabalContext.Provider>
  );
};
