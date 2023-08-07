import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import fetch from "node-fetch";

const initialState = {
  loader: false,
  users: [],
  error: "",
};

const FETCH_USER_REQ = "FETCH_USER_REQ";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

const fetchUserReqAction = () => {
  return { type: FETCH_USER_REQ };
};
const fetchUserSuccessAction = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
const fetchUserErrorAction = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error,
  };
};

// fetchUsers is a action creater that we will dispatch
//  what is use of redux-think is it allow us to return function isted of object
// and function result can be delayd
const fetchUsers = () => {
    // return function dosent need to be pure , it can have side effects
  const fetchDataFn = async (dispatch) => {
    dispatch(fetchUserReqAction());
    try {
      const fetchUser = await fetch("https://jsonplaceholder.typicode.com/users");
      const userData = await fetchUser.json();
      dispatch(fetchUserSuccessAction(userData));
    } catch (error) {
      console.log("error", error);
      dispatch(fetchUserErrorAction(error.message));
    }
  };
  return fetchDataFn;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_REQ":
      return {
        loader: true,
        users: [],
        error: action.payload,
      };
    case "FETCH_USER_SUCCESS":
      return {
        loader: false,
        users: action.payload,
        error: "",
      };
    case "FETCH_USER_ERROR":
      return {
        loader: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk.default));

store.subscribe(() => {
  console.log("current state -- ", store.getState());
});

store.dispatch(fetchUsers());

// unsubscribe();
