import reduxToolkit from "@reduxjs/toolkit";
const { createSlice, createAsyncThunk } = reduxToolkit;
import fetch from "node-fetch";

const initialState = {
  loader: false,
  users: [],
  error: "",
};

// rtk provide a method createAsyncThunk function for creation and dispatching async action
// this createAsyncThunk accept two parameters
/*
    1) action name
    2) call function thet create payload

createAsyncThunk autoatically dispatch lifecycle actions based on retunrned promise
promise state : fulfilled, pending,rejected

createAsyncThunk internally make use of redux thunk library
*/
const fetchUsers = createAsyncThunk("user/fetchUser", () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("error fetching data");
      }
      return response.json();
    })
    .then((responseJson) => {
      return responseJson.map((user) => user.name);
    });
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.loader = false), (state.users = action.payload), (state.error = "");
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      (state.loader = false), (state.users = []), (state.error = action.error.message);
    });
  },
});

// export fetch users
export { fetchUsers };
export default userSlice.reducer;
