import { createStore } from "redux";
import toDoReducer from "./reducer/taskReducer";

const store = createStore(
  toDoReducer,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
