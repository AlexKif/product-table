import {productsConstants} from "../constans/productsConstans";

export const initialState = {
    loading: false,
    products: [],
    createdProduct: {},
    isCreated: false,
    remoteProduct: {},
    errorDelete: null,
    isDelete: false,
    isUpdate: false
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
                ...state, isCreated: true
            };
        case productsConstants.SUCCESS_REQUEST_PRODUCT:
            return {
                ...state, createdProduct: action.product, isCreated: false
            };
        case productsConstants.REQUEST_DELETE_PRODUCT:
            return {
                ...state, isDelete: true
            };
        case productsConstants.SUCCESS_DELETE_PRODUCT:
            return {
                ...state, remoteProduct: action.deletedProduct, isDelete: false
            };
        case productsConstants.FAILURE_DELETE_PRODUCT:
            return {
                ...state, errorDelete: action.error
            };
        case productsConstants.REQUEST_UPDATE_PRODUCT:
            return {
                ...state, isUpdate: true
            };
        case productsConstants.SUCCESS_UPDATE_PRODUCT:
            return {
                ...state, isUpdate: false
            };
        default:
            return state;
    }
};




