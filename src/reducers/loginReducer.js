import {loginConstants} from "../constans/loginConstants";

export const initialState = {
    token: null,
    loading: false,
    fail: false,
    login: false
};

export const loginReducer = (state = initialState, action) => {
    const {token, isRemember} = action;
    switch (action.type){
        case loginConstants.GET_TOKEN:
            localStorage.setItem('token', JSON.stringify(token));
            return {
                ...state, token: token, isRemember: isRemember, loading: false, login: true
            };
        case loginConstants.CREATE_REQUEST:
            return {
                ...state, loading: true, fail: false
            };
        case loginConstants.FAILURE_TOKEN:
            return {
                ...state, loading: false, fail: true
            };
        default:
            return state;
    }
};