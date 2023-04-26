import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import currentUserReducer from "./currentUser.js"
import questionsReducer from "./question.js";
import usersReducer from "./users";

export default combineReducers({
    authReducer,currentUserReducer , questionsReducer , usersReducer
})