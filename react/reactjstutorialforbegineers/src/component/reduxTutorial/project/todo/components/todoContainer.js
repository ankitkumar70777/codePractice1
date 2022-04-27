import React from "react";
import ToDoHeading from "./toDoHeading";
import ToDoInput from "./toDoInput";
import ToDoList from "./toDoList";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <ToDoHeading />
        <ToDoInput />
        <ToDoList />
      </div>
    </div>
  );
};

export default TodoContainer;
