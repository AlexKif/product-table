import React, {Component} from 'react';
import {Form, Icon, Input, Button} from 'antd';

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => {
        return fieldsError[field]
    });
}

class LoginForm extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.goLogin(values);
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Form layout="vertical" onSubmit={this.handleSubmit}>
                <Form.Item >
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: 'Формат електронної пошти не є валідним',
                            },
                            {
                                required: true,
                                message: 'Будь ласка введіть E-mail!',
                            },
                        ],
                    })(<Input placeholder="E-mail"/>)}
                </Form.Item>
                <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Будь ласка введіть пароль!'}],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item className="form-actions">
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedLoginForm = Form.create({ name: 'horizontal_login' })(LoginForm);

export default WrappedLoginForm;

