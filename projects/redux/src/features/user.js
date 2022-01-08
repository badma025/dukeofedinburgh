// allows to create reducers easily
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      name: "Alim",
      age: 0,
      email: "",
    },
  },
  reducers: {
    // the state holds the current state of initialState
    // the action is what you want to do to the state
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default userSlice.reducer;
