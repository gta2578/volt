import { combineReducers } from "redux";
import todoFilter from "./todoFilter";
import todos from "./todos";

export default combineReducers({ todos, todoFilter });