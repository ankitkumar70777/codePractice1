import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (currState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      console.log("action::success:::", action);
      return {
        loading: false,
        error: "",
        post: action.payload,
      };

    case "FETCH_ERROR":
      console.log("action::error:::", action);
      return {
        loading: false,
        error: "something went wrong",
        post: {},
      };

    default:
      return currState;
  }
};

export default function ReduceFetchData2() {
  const [currState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ERROR",
          payload: "somethinf went wronf error",
        });
      });
  }, []);

  return (
    <div>
      {currState.loading ? <h1>Loadingggggggg......</h1> : currState.post.title}
      {currState.error ? currState.error : null}
    </div>
  );
}
