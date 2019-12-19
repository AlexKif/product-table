import React, {Component, Fragment} from 'react';
import WrappedLoginForm from "./LoginForm/loginForm";
import {loginServices} from "../../services/loginServices";
import {notification, Spin} from 'antd';

import './style.scss'

class Login extends Component {
    state = {
        loading: false
    };

    goLogin = ({email, password, remember}) => {
        this.setState({loading: true});
        loginServices.login(email, password)
            .then(res => {
                return remember ?
                    (localStorage.setItem('token', JSON.stringify(res.access_token),
                    this.setState({loading: false}))):
                    undefined
            })
            .catch(_ => {
                this.setState({loading: false});
                return notification.open({
                    message: 'Incorrect username or password.',
                });
            })
    };

    render() {
        return (
            <div className="login">
                <Spin spinning={this.state.loading}>
                    {/*<div className="test-data">*/}
                    {/*    <h3>Для перевірки:</h3>*/}
                    {/*    <p>user1@email.com</p>*/}
                    {/*    <p>!password!</p>*/}
                    {/*</div>*/}
                    <h3>Sign in</h3>
                    <WrappedLoginForm validateFields={this.validateFields} goLogin={this.goLogin}/>
                </Spin>
            </div>
        );
    }
}

export default Login;