import React from "react";
import Heading from "../components/Heading";

const DashboardContainer = ({ toDoList}) => {
  return (
    <div>
      <p>DashboardContainer</p>
      <Heading />

      <br></br>
      <h4>to do list</h4>
      {toDoList && Array.isArray(toDoList) && toDoList.length > 0 ? toDoList.map((todo, i) => {
        return <p key={ todo.id}><span>{todo.id }</span> <span>{todo.title }</span></p>
       }) : null}
    </div>
  );
};

export default DashboardContainer;
