const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require("axios");
const thunkModdleWare = require("redux-thunk").default;

// actions
const FETCH_USER_DATA = "FETCH_USER_DATA";
const FETCH_USER_DATA_SUCCESS = "FETCH_USER_DATA_SUCCESS";
const FETCH_USER_DATA_FAIL = "FETCH_USER_DATA_FAIL";

//intial data
const initialData = {
  loading: true,
  users: [],
  error: "",
};

//action creater
const fetchUserData = () => {
  return {
    type: FETCH_USER_DATA,
  };
};
const fetchUserDataSuccess = (users) => {
  return {
    type: FETCH_USER_DATA_SUCCESS,
    payload: users,
  };
};
const fetchUserDataError = (error) => {
  return {
    type: FETCH_USER_DATA_FAIL,
    payload: error,
  };
};
const fetchUser = () => {
  return function fetchUserApi(dispatch) {
    dispatch(fetchUserData());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const user = response.data;
        dispatch(fetchUserDataSuccess(user));
      })
      .catch((error) => {
        dispatch(fetchUserDataError(error.message));
      });
  };
};

//reducer function
const reducer = (state = initialData, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_DATA_FAIL:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const store = createStore(reducer, applyMiddleware(thunkModdleWare));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUser());
