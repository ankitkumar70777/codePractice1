import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
  users: [],
  error: "",
};

const fetchUsers = createAsyncThunk("user/fetchUser", () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("error fetching data");
      }
      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
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
