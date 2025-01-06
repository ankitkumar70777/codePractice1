export const initialState = [
//   {
//     id: 0,
//     title: "Hello World",
//     description: "Greetings Martians",
//   },
//   {
//     title: "New Movie",
//     description: "Some Set in Mumbai",
//     id: 1,
//   },
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_INITIAL_STATE_FROM_API":
        return [...state, ...action.payload];
      case "ADD":
        return [
          ...state,
          { id: Date.now(), title: action.payload.title, description: action.payload.description },
        ];
      case "EDIT":
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.title, description: action.payload.description }
            : item
        );
      case "DELETE":
        return state.filter((item) => item.id !== action.payload.id);

      default:
        return state;
    }
};

export default reducer;
