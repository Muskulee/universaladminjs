// This combines all root reducers

import { combineReducers } from "redux";

import { reducer as userReducer } from "./user/reducers";
import { reducer as onStartReducer } from "./start/reducers";
import { reducer as jejeReducer } from "./jeje/reducers";

const reducer = combineReducers({
  user: userReducer,
  start: onStartReducer,
  jeje: jejeReducer,
});

export { reducer };
