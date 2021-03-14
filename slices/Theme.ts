import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import ThemeInterface from "@interfaces/redux/Theme.js";

const initialState: ThemeInterface = {
  mode: "dark",
};

export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<"dark" | "light">) => {
      state.mode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = theme.actions;

export default theme.reducer;
