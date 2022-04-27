import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useDispatch } from "react-redux";
import { addToDo } from "../action/actions";

const ToDoInput = () => {
  const [taskName, setTaskName] = useState("");
  const [value, onChange] = useState(new Date());
  const [taskStatus, setTaskStatus] = useState(false);

  let taskDetails = {
    taskName,
    taskDate: value,
    taskStatus,
  };
  const dispatch = useDispatch();
  console.log(
    "in to do input",
    { taskName },
    { taskStatus },
    { value },
    { dispatch },
    { taskDetails }
  );

  return (
    <>
      <div>
        <DatePicker onChange={onChange} value={value} />
        <label htmlFor='inputTask'></label>
        <input
          id='inputTask'
          type='text'
          name='inputTask'
          value={taskName}
          placeholder='task name'
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />

        <label htmlFor='taskStatus'></label>
        <select
          name='taskStatus'
          id='taskStatus'
          onChange={() => {
            setTaskStatus(!taskStatus);
          }}
          value={taskStatus ? "active" : "inactive"}
        >
          <option value='active'>active</option>
          <option value='inactive'>inactive</option>
        </select>

        <button
          onClick={() => {
            dispatch(addToDo(taskDetails));
            setTaskName("");
          }}
        >
          add
        </button>
      </div>
    </>
  );
};

export default ToDoInput;
