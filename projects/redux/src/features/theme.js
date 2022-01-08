// allows to create reducers easily
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

// userSlice is a reducer
export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    // the state holds the current state of initialState
    // the action is what you want to do to the state
    changeColour: (state, action) => {
      state.value = action.payload;
    },
  },
});

// we export the login and logout reducer
export const { changeColour } = themeSlice.actions;

export default themeSlice.reducer;
