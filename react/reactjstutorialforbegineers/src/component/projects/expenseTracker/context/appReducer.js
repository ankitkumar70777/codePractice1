export default (state, action) => {
  console.log("state:::::------", state);
  switch (action.type) {
    case "DELETE_TRANSCTION":
      return {
        ...state,
        transctions: state.transctions.filter(
          (transction) => transction.id !== action.payload
        ),
      };

    case "ADD_TRANSCTION":
      return {
        ...state,
        transctions: [action.payload, ...state.transctions],
      };

    default:
      return state;
  }
};
