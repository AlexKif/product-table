import React, {Component} from 'react';
import WrappedLoginForm from "./LoginForm/loginForm";
import {notification, Spin} from 'antd';

import './style.scss'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../actions/loginAction";

class Login extends Component {

    goLogin = (value) => {
        console.log();
        this.props.dispatch(login(value));
    };

    render() {
        if (this.props.value.fail) {
            notification.open({
                message: 'Incorrect username or password.'
            });
        }
        return (
            <div className="login">
                <Spin spinning={this.props.value.loading}>
                    <div className="test-data">
                        <h3>Для перевірки:</h3>
                        <p>user1@email.com</p>
                        <p>!password!</p>
                    </div>
                    <h3>Sign in</h3>
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

export default connect(mapStateToProps)(withRouter(Login));