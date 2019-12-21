import {combineReducers} from "redux";
import {usersReducer} from "./productReducer";
import {loginReducer} from "./loginReducer";


const appState = combineReducers({
    usersReducer,
    loginReducer
});

export default appState;