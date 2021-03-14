import { combineReducers } from "@reduxjs/toolkit";

import ThemeReducer from "./ThemeReducer";

const rootReducer = combineReducers({
  ThemeReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
