import { createStore, combineReducers } from "redux";

// cake
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const orderCake = () => {
  return { type: CAKE_ORDERED, payload: 1 };
};
const cakeRestocked = (qty = 1, totalCash = 100) => {
  return { type: CAKE_RESTOCKED, payload: qty };
};

const initialStateCake = {
  numberOfCakes: 10,
};

const reducerCake = (state = initialStateCake, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };

    default:
      return state;
  }
};

// icream
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

const iceCreamOrderedAction = (qty = 1) => {
  return { type: ICECREAM_ORDERED, payload: qty };
};
const iceCreamRestockedAction = (qty = 1) => {
  return { type: ICECREAM_RESTOCKED, payload: qty };
};

const initialStateIcream = {
  numberOfIceCreams: 20,
};

const icecreamReducer = (state = initialStateIcream, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - action.payload,
      };

    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

// combine multiple reducer
// by this way we can sepreat store code into multiple files and finally combine them into singele store later
const rootReducers = combineReducers({ reducerCake, icecreamReducer });
const store = createStore(rootReducers);

// now our state is an object with multiple keys and values of reducers
const state = store.getState();
console.log("current state -------------", state);

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(cakeRestocked(2));
store.dispatch(iceCreamOrderedAction());
store.dispatch(iceCreamOrderedAction(5));
store.dispatch(iceCreamRestockedAction());
store.dispatch(iceCreamRestockedAction(10));

unsubscribe();
