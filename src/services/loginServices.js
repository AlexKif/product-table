import axios from 'axios';

export const loginServices = {
    login
};

function login(email, password) {
    return axios.post(`${process.env.REACT_APP_BASE_URL}users/auth`, {email: email, password: password}).then(res => {
        return res.data
    })
}