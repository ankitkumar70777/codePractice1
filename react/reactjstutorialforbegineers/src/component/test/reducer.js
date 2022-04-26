import React, { useReducer } from 'react';
const initialState = {
  initialCount: 0,
};

const reducer = (state, action) => {
  console.log({ state }, { action });
  switch (action.type) {
    case 'increment':
      return { ...state, initialCount: state.initialCount + action.value };
    case 'decrement':
      return { ...state, initialCount: state.initialCount - action.value };

    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const ReducerHookLearn = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  console.log({ count }, { dispatch });
  return (
    <>
      <div>
        <p>{count.initialCount}</p>
        <button
          onClick={() => {
            dispatch({ type: 'increment', value: 1 });
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'decrement', value: 1 });
          }}
        >
          decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'reset' });
          }}
        >
          reset
        </button>
      </div>

      <div>
        <p>{count2.initialCount}</p>
        <button
          onClick={() => {
            dispatch2({ type: 'increment', value: 1 });
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            dispatch2({ type: 'decrement', value: 1 });
          }}
        >
          decrement
        </button>
        <button
          onClick={() => {
            dispatch2({ type: 'reset' });
          }}
        >
          reset
        </button>
      </div>
    </>
  );
};

export default ReducerHookLearn;
