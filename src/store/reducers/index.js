import { combineReducers } from "redux";
import contactReducer from "./contacts/index"


export default combineReducers({
    contacts: contactReducer
})