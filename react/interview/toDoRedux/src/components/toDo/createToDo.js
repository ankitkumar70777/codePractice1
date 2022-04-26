import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createTask, updateTask, deleteTask } from "../action/actions";

const CreateToDo = () => {
  const [inputData, setInputData] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [taskStatus, setTaskStatus] = useState("");
  const dispatch = useDispatch();
  const inputObj = {
    inputData,
    startDate,
    taskStatus,
  };

  console.log({ inputObj });
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />

      <label htmlFor='addTask'></label>
      <input
        id='addTask'
        type='text'
        value={inputData}
        placeholder='add task'
        name='addTask'
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      <label htmlFor='taskStatus'></label>
      <select
        id='taskStatus'
        name='taskStatus'
        onChange={(e) => {
          setTaskStatus(e.target.value);
        }}
      >
        <option>active</option>
        <option>not active</option>
      </select>

      <button
        onClick={() => {
          dispatch(createTask(inputObj));
        }}
      >
        add task
      </button>
    </>
  );
};

export default CreateToDo;
