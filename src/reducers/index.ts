import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import task from "./task";

// ステートの中身を渡す
export default combineReducers({ task, form });
