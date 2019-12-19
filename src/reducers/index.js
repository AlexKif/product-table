import {combineReducers} from "redux";
import {usersReducer} from "./productReducer";


const appState = combineReducers({
    usersReducer
});

export default appState;