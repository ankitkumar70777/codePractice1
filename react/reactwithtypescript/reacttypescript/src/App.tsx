import React from 'react';
import './App.css';
import Status from "./modules/reactTS/status";
import Heading from "./modules/reactTS/heading";

function App() {

  return (
    <div className="App">
      <Status status="success" />
      <Heading>Heading 1</Heading>
    </div>
  );
}

export default App;
