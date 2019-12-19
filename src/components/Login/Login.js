import React, {Component, Fragment} from 'react';
import WrappedLoginForm from "./LoginForm/loginForm";
import {loginServices} from "../../services/loginServices";
import {notification } from 'antd';

import './style.scss'

class Login extends Component {

    goLogin = ({email, password, remember}) => {
        loginServices.login(email, password)
            .then(res => {
                return remember ? localStorage.setItem('token', JSON.stringify(res.access_token)): undefined
            })
            .catch(_ => {
                console.log(_);
                return notification.open({
                    message: 'Incorrect username or password.',
                });
            })
    };

    render() {
        return (
            <div className="login">
                <div className="test-data">
                    <h3>Для перевірки:</h3>
                    <p>user1@email.com</p>
                    <p>!password!</p>
                </div>
                <WrappedLoginForm validateFields={this.validateFields} goLogin={this.goLogin}/>
            </div>
        );
    }
}

export default Login;