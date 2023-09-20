import { combineReducers } from "redux";

import user from "./User";
import app from "./App";

const reducers = combineReducers({
  user,
  app,
});

export default reducers;
