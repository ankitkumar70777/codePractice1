import "./App.css";
import React from "react";
import TodoContainer from "./component/reduxTutorial/project/todo/components/todoContainer";

function App() {
  return (
    <>
      <React.StrictMode>
        <h1>Hello Team</h1>
        <TodoContainer />
      </React.StrictMode>
    </>
  );
}

export default App;
