import {productsConstants} from "../constans/productsConstans";

export const initialState = {
    loading: false,
    products: [],
    createdProduct: {}
};

export const productReducer = (state = initialState, action) => {
    switch (action.type){
        case productsConstants.CREATE_REQUEST:
            return {
                ...state, loading: true
            };
        case productsConstants.SUCCESS_REQUEST:
            return {
                ...state, loading: false, products: action.products
            };
        case productsConstants.CREATE_REQUEST_PRODUCT:
            return {
                ...state
            };
        case productsConstants.SUCCESS_REQUEST_PRODUCT:
            return {
                ...state, createdProduct: action.product
            };
        default:
            return state;
    }
};