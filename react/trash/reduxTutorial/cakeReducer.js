const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "first action",
  };
};

const initialStateCake = {
  numberOfCake: 10,
};

const reducerFunctionCake = (state = initialStateCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1,
      };

    default:
      return state;
  }
};

module.exports = {
  reducerFunctionCake,
  buyCake,
};
