import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state = initialState, action) => {
      state.numberOfCake = state.numberOfCake - 1;
    },

    restocked: (state = initialState, action) => {
      state.numberOfCake = state.numberOfCake + action.payload;
    },
  },
});

const cakeActions = cakeSlice.actions;
export { cakeActions };
export default cakeSlice.reducer;