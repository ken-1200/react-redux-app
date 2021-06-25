import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import task from "./tasklist";
import createTask from "./taskcreate";

// ステートの中身を渡す
export default combineReducers({ task, createTask, form });
