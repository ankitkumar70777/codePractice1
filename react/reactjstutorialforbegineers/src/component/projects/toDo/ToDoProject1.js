import React, { useState } from "react";

export default function ToDoProject1() {
  const [task, addTask] = useState("");
  const [taskList, addTaskInTasksArray] = useState([]);

  const addTaskInTasksArrayFun = (task) => {
    addTaskInTasksArray([...taskList, task]);
    addTask("");
  };

  console.log(task, "---");

  console.log("taskList", taskList);

  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        <input
          type="text"
          name="fname"
          onChange={(e) => {
            addTask(e.target.value);
          }}
          value={task}
        />
        <button
          type="button"
          onClick={() => {
            addTaskInTasksArrayFun(task);
          }}
        >
          +
        </button>
        {taskList.map((v) => {
          return <li>{v}</li>;
        })}
      </ul>
    </div>
  );
}
