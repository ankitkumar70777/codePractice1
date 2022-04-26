import { combineReducers } from "redux";
import toDoReducer from "./taskReducer";

const store = combineReducers({
  toDoReducer,
});

export default store;
