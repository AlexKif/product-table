import axios from 'axios';

export const productServices = {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
};

function getProducts(token, page = 1, perPage=500) {
    return axios.get(`${process.env.REACT_APP_BASE_URL}articles?page=${page}&per-page=${perPage}`,
        {headers: {'Authorization': `Bearer ${token}`}}).then(res => {
        return res.data
    })
}

function createProduct(token, {name, description, price, status = 10}) {
    return axios.post(`${process.env.REACT_APP_BASE_URL}articles`,
        {name: name,
            description: description,
            price: price,
            status: status},
        {headers: {'Authorization': `Bearer ${token}`}}).then(res => {
            return res.data
        })
}

function deleteProduct(token, {key}) {
    return axios.put(`${process.env.REACT_APP_BASE_URL}articles/${key+1}`,
        {status: 0}, {headers: {'Authorization': `Bearer ${token}`}}).then(res => {
            return res.data
    })
}

function updateProduct(token, {name, key, description, price}) {
    return axios.put(`${process.env.REACT_APP_BASE_URL}articles/${key+1}`,
        {name: name, description: description, price: price}, {headers: {'Authorization': `Bearer ${token}`}}).then(res => {
        return res.data
    })
}