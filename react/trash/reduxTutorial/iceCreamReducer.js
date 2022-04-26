const redux = require("redux");
const createStore = redux.createStore;

const BUY_ICECREEM = "BUY_ICECREEM";

const buyIceCream = () => {
  return {
    type: BUY_ICECREEM,
    info: "first action iceCream",
  };
};

const initialStateIceCream = {
  numberOfIceCream: 20,
};

const reducerFunctionIceCream = (state = initialStateIceCream, action) => {
  switch (action.type) {
    case BUY_ICECREEM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };

    default:
      return state;
  }
};

module.exports = {
  reducerFunctionIceCream,
  buyIceCream,
};
