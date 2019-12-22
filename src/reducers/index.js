import {combineReducers} from "redux";
import {productReducer} from "./productReducer";
import {loginReducer} from "./loginReducer";


const appState = combineReducers({
    productReducer,
    loginReducer
});

export default appState;