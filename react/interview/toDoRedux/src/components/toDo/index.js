import React from "react";
import ToDoHeading from "./toDoHeading";
import CreateToDo from "./createToDo";
import ToDoList from "./toDoList";

const ToDo = () => {
  return (
    <div>
      <div>
        <ToDoHeading />
        <CreateToDo />
        <ToDoList />
      </div>
    </div>
  );
};

export default ToDo;
