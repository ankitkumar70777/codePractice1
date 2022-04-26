import { ADD_TO_DO, UPDATE_TO_DO, DELETE_TO_DO } from "./constant";

export const addToDo = (taskDetails) => {
  console.log("in action addtodo", { taskDetails });
  return {
    type: ADD_TO_DO,
    payload: {
      id: new Date().getTime().toString(),
      data: taskDetails,
    },
  };
};

export const updateToDo = (taskDetailsWithId) => {
  console.log("in action addtodo", { taskDetailsWithId });
  return {
    type: UPDATE_TO_DO,
    payload: {
      id: taskDetailsWithId.id,
      data: taskDetailsWithId.taskDetails,
    },
  };
};

export const deleteToDo = (id) => {
  console.log({ id });
  return {
    type: DELETE_TO_DO,
    id: id,
  };
};
