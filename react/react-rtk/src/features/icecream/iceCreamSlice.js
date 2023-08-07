import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice.js";

const initialState = {
  numberOfIcrems: 20,
};

const icecreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state = initialState, action) => {
      state.numberOfIcrems = state.numberOfIcrems - 1;
    },
    restocked: (state = initialState, action) => {
      state.numberOfIcrems = state.numberOfIcrems + action.payload;
    },
  },
  // to perform action on diff reducer, we need to add extra reducer
  // createSlice.extraReducers method currenctly are deprecated use builder fn
//   extraReducers: {["cake/ordered"]:(state = initialState, action) => {
//     state.numberOfIcrems = state.numberOfIcrems -1 ;
//   }
// }
  extraReducers: (builder) => { 
    builder.addCase(cakeActions.ordered, (state, action) => { 
      state.numberOfIcrems = state.numberOfIcrems - 1;
    })
  }
});


const iceCreamAction = icecreamSlice.actions;
export { iceCreamAction };
export default icecreamSlice.reducer;
