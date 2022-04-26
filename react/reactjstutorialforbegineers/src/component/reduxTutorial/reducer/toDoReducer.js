const initialToDoData = {
  list: [],
};

const toDoReducer = (state = initialToDoData, action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      // console.log("reached here add", action.payload.data);
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

    case "UPDATE_TO_DO":
      // console.log(
      //   "reached here update ------",
      //   action.payload.id,
      //   action.payload.data
      // );
      // const item = {...};
      const checkIfIdExist = state.list.map((v, i) => {
        // console.log("in update--------", v);
        return v.id === action.payload.id
          ? {
              ...action.payload,
            }
          : v;
      });
      // console.log("111", { checkIfIdExist }, { state });
      return {
        ...state,
        list: [...checkIfIdExist],
      };

    case "DELETE_TO_DO":
      // console.log("reached here delete");
      const newToDoList = state.list.filter((v, i) => {
        // console.log({ v });
        return v.id !== action.id;
      });
      // console.log({ newToDoList });
      return {
        ...state,
        list: newToDoList,
      };

    default:
      return state;
  }
};

export default toDoReducer;
