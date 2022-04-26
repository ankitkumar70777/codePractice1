import { CREATE_TASK, UPDATE_TASK, DELETE_TASK } from "./constants";

export const createTask = (task) => {
  console.log({ task });
  return {
    type: CREATE_TASK,
    payload: {
      id: new Date().getTime().toString(),
      //task is object
      data: task,
    },
  };
};

export const updateTask = (task) => {
  return {
    type: UPDATE_TASK,
  };
};

export const deleteTask = (task) => {
  return {
    type: DELETE_TASK,
  };
};
