import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToDo, updateToDo } from "../action/actions";
import DatePicker from "react-date-picker";
import "./css/toDoList.css";

const ToDoList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => {
    console.table("----------------------", { state });
    return state.toDoReducer.list;
  });
  console.log("in to do list", { list });

  const [editMode, setEditMode] = useState(false);
  const [taskIndex, setTaskIndex] = useState(null);
  const [value, onChange] = useState(new Date());
  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState(false);
  const [taskId, setTaskId] = useState(null);
  let taskDetailsWithId = {
    id: taskId,
    taskDetails: {
      taskName,
      taskDate: value,
      taskStatus,
    },
  };
  console.log({ taskDetailsWithId });

  console.log(
    "states---",
    { editMode },
    { taskIndex },
    { value },
    { taskName },
    { taskStatus }
  );

  const editHandler = (v, i) => {
    if (taskIndex === i) {
      setEditMode(false);
      setTaskIndex(null);
      // onChange(v.data.taskDate);
    } else {
      setEditMode(true);
      setTaskIndex(i);
      onChange(v.data.taskDate);
      setTaskName(v.data.taskName);
      setTaskStatus(v.data.taskStatus);
      setTaskId(v.id);
    }
  };
  return (
    <div>
      <hr></hr>
      <table className='toDoList'>
        <tr>
          <th>date</th>
          <th>taskname</th>
          <th>status</th>
          <th>actions</th>
        </tr>

        {list.map((v, i) => {
          console.log("v-------", "v.data.counter", v, { i }, { taskIndex });
          return (
            <tr key={i}>
              <td>
                {editMode && taskIndex === i ? (
                  <DatePicker onChange={onChange} value={value} />
                ) : (
                  <span>{v.data.taskDate.toDateString()}</span>
                )}
              </td>

              <td>
                {editMode && taskIndex === i ? (
                  <>
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
                  </>
                ) : (
                  <span>{v.data.taskName}</span>
                )}
              </td>

              <td>
                {editMode && taskIndex === i ? (
                  <>
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
                  </>
                ) : (
                  <span>{v.data.taskStatus ? "active" : "inactive"}</span>
                )}
              </td>

              <td>
                <button
                  onClick={() => {
                    if (editMode && taskIndex === i) {
                      dispatch(updateToDo(taskDetailsWithId));
                      setEditMode(false);
                    } else {
                      editHandler(v, i);
                    }
                  }}
                >
                  {editMode && taskIndex === i ? "update" : "edit"}
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteToDo(v.id));
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ToDoList;
