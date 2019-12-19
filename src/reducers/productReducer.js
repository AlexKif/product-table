import {productsConstants} from "../constans/productsConstans";

export const initialState = {
    products: undefined
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case productsConstants.GET_PRODUCTS:
            return {
                ...state, products: action.products
            };
        default:
            return state;
    }
};