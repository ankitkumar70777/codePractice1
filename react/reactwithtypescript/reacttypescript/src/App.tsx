import React from 'react';
import './App.css';
import SayHello from "./modules/reactTS/sayHello";

function App() {
  return (
    <div className="App">
      <SayHello name={"ankitkumar ravidas"} age={23}/>
    </div>
  );
}

export default App;
