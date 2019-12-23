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
    dispatch(request());
    productServices.createProduct(token, value).then(res => {
        return dispatch(success(res))
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

export const deleteProduct = (token, product) => dispatch => {
    dispatch(request());
    productServices.deleteProduct(token, product).then(res => {
        return dispatch(success(res));
    }).catch(err => {
        return dispatch(failure(err));
    });

    function request() {
        return {
            type: productsConstants.REQUEST_DELETE_PRODUCT
        }
    }

    function success(deletedProduct) {
        return {
            type: productsConstants.SUCCESS_DELETE_PRODUCT, deletedProduct
        }
    }

    function failure(error) {
        return {
            type: productsConstants.FAILURE_DELETE_PRODUCT, error
        }
    }
};