import React from 'react';
import DashboardContainer from '../../modules/dashboard/container';

const getData = async () => {
  const todos = [];
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    todos.push(...data.filter((todos,i) => i <= 5));
    return todos;
  } catch (error) {
    console.log('error', error);
    return todos;
  }
};

const Dashboard = async () => {
  const toDoList = await getData();
  console.log('toDoList', toDoList);

  return (
    <div>
      <p>dashboard page</p>
      <DashboardContainer toDoList={ toDoList} />
    </div>
  )
}

export default Dashboard