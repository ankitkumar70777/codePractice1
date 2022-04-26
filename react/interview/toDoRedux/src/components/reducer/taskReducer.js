const intialData = {
  list: [],
};

const toDoReducer = (state = intialData, action) => {
  console.log("--", { state });
  switch (action.type) {
    case "CREATE_TASK":
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.payload.id,
            data: action.payload.data,
          },
        ],
      };

    default:
      return state;
  }
};

export default toDoReducer;
