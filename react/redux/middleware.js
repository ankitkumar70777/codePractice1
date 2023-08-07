import { createStore, applyMiddleware } from "redux";

// cake
const CAKE_ORDERED = "CAKE_ORDERED";

const orderCakeAction = () => {
  return { type: CAKE_ORDERED, payload: 1 };
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

    default:
      return state;
  }
};

// this is pattern to apply custom middleware in redux
const middleWare = (store) => (next) => (action) => { 
    const currenctState = store.getState();
    console.log({action, currenctState})
}

// apply middleware here
const store = createStore(reducerCake, applyMiddleware(middleWare));

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(orderCakeAction());
store.dispatch(orderCakeAction());


unsubscribe();