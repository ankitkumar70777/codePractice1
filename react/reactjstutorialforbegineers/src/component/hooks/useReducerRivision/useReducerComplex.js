import React,{useReducer} from 'react';
const initialState = {value : 0};
const reducerFn = (state,action)=>{
    switch(action.type){
        case "increment" : return {value : state.value + 1 + action.value};
        case "decrement" : return {value : state.value - 1};
        case "reset" : return initialState;
        default : return {value : state.value};
    }
}

const UseReducerComplex = () => {
    const [newState,dispatch] = useReducer(reducerFn,initialState)
console.log('newState',newState);

  return (
    <div>
        <div>curr Val:  {newState.value}</div>
        <button onClick={()=>{dispatch({type:"increment",value:5})}}>increment</button>
        <button onClick={()=>{dispatch({type:"decrement"})}}>decrement</button>
        <button onClick={()=>{dispatch({type:"reset"})}}>reset</button>
    </div>
  )
}

export default UseReducerComplex