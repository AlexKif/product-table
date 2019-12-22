import {productsConstants} from "../constans/productsConstans";
import {productServices} from "../services/productServices";

export const getProducts = (token, page) => (dispatch) => {
    dispatch(request());
    productServices.getProducts(token, page).then(res => {
        return dispatch(success(res))
    });

    function request() {
        return {
            type: productsConstants.CREATE_REQUEST
        }
    }
    function success(products) {
        return {
            type: productsConstants.SUCCESS_REQUEST, products
        }
    }
};

export const addProduct = (token, value) => dispatch => {
    dispatch(request);
    productServices.createProduct(token, value).then(res => {
        console.log(res);
        dispatch(success(res))
    });
    function request() {
        return {
            type: productsConstants.CREATE_REQUEST_PRODUCT
        }
    }
    function success(product) {
        return {
            type: productsConstants.SUCCESS_REQUEST_PRODUCT, product
        }
    }
};