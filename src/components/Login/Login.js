import React, {Component} from 'react';
import WrappedLoginForm from "./LoginForm/loginForm";
import {notification, Spin} from 'antd';
import {connect} from "react-redux";
import {login} from "../../actions/loginAction";

import './style.scss'

class Login extends Component {

    goLogin = (value) => {
        this.props.dispatch(login(value));
    };

    render() {
        if (this.props.value.fail) {
            notification.open({
                message: 'Логін або пароль невірний'
            });
        }
        return (
            <div className="login">
                <Spin spinning={this.props.value.loading}>
                    <h3>Авторизація</h3>
                    <WrappedLoginForm validateFields={this.validateFields} goLogin={this.goLogin}/>
                </Spin>
            </div>
        );
    }
}

const mapStateToProps = ({loginReducer}) => {
  return {
      value: loginReducer
  }
};

export default connect(mapStateToProps)(Login);