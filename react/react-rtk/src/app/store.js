import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice.js";
import icecreamSliceReducer from "../features/icecream/iceCreamSlice.js";
import userReducer from "../features/user/userSlice.js";


const store = configureStore({
  reducer: {
    cakeReducer,
    icecreamSliceReducer,
    userReducer
  },
  // rtk by default add some middleware inside middleware so we have just added ours inside that array
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;