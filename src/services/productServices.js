import axios from 'axios';

export const productServices = {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
};

function getProducts(page = 1, perPage) {
    const token = JSON.parse(localStorage.getItem('token'));
    return axios.get(`${process.env.REACT_APP_BASE_URL}articles?page=${page}${perPage ? `&per-page=${perPage}`: undefined}`,
        {headers: {'Authorization': `Bearer ${token}`}}).then(res => {
        return res.data
    })
}

function createProduct({name, description, price, status = 10}) {
    const token = JSON.parse(localStorage.getItem('token'));
    return axios.post(`${process.env.REACT_APP_BASE_URL}articles`,
        {name: name,
            description: description,
            price: price,
            status: status},
        {headers: {'Authorization': `Bearer ${token}`}}).then(res => {
            return res.data
        })
}

function deleteProduct({key}) {
    const token = JSON.parse(localStorage.getItem('token'));
    return axios.put(`${process.env.REACT_APP_BASE_URL}articles/${key+1}`,
        {status: 0}, {headers: {'Authorization': `Bearer ${token}`}}).then(res => {
            return res.data
    })
}

function updateProduct({name, key, description, price}) {
    const token = JSON.parse(localStorage.getItem('token'));
    return axios.put(`${process.env.REACT_APP_BASE_URL}articles/${key+1}`,
        {name: name, description: description, price: price}, {headers: {'Authorization': `Bearer ${token}`}}).then(res => {
        return res.data
    })
}