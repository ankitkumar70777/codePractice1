const redux = require("redux");
const createStore = redux.createStore;
const applyReduxMiddleware = redux.applyMiddleware;
//for async op inside redux, its a middleware
const thunkMiddleware = require("redux-thunk").default;
//for api calls
const axios = require("axios");

//initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

//actions name
const FETCH_USER = "FETCH_USER";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAIL = "FETCH_USER_FAIL";

//action create function
const fetchUserData = () => {
  return {
    type: FETCH_USER,
  };
};
const fetchUserDataSuccess = (users) => {
  console.log("users", users);
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
const fetchUserDataFail = (error) => {
  return {
    type: FETCH_USER_FAIL,
    payload: error,
  };
};

//async action creater
//redux-think brings ability to return function insted of action object
//this function doesnt have to pure
const fetchUsers = () => {
  return function fetchUser(dispatch) {
    dispatch(fetchUserData());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log('------in axios', { response });
        //response data is array of users
        const users = response.data.map((v, i) => {
          return v.id;
        });
        dispatch(fetchUserDataSuccess(users));
      })
      .catch((error) => {
        //error.message
        dispatch(fetchUserDataFail(error.message));
      });
  };
};

//reducer
const reducer = (state = initialState, action) => {
  console.log({ action });
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const store = createStore(reducer, applyReduxMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
