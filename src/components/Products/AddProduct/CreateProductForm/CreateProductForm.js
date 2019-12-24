import React, {Component} from 'react';
import {Form, Input, InputNumber, Modal, Spin} from "antd";
import {connect} from "react-redux";
import {notification} from "antd";
import {getProducts} from "../../../../actions/productAction";

class CreateProductForm extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const token = JSON.parse(localStorage.getItem('token'));
        if (this.props.isCreated) {
            this.props.dispatch(getProducts(token));
            notification.open({
                message: 'Продукт добавлено'
            });
        }
    }

    render() {
        const { visible, onCancel, onCreate, form, isCreated } = this.props;
        const { getFieldDecorator } = form;

        return (
            <Modal
                visible={visible}
                title="Додати продукт"
                okText="Додати"
                onCancel={onCancel}
                onOk={onCreate}
                cancelText="Відміна"
            >
                <Spin spinning={isCreated}>
                    <Form layout="vertical" className="modal-form">
                        <Form.Item label="name">
                            <p className="property-name">Ім'я</p>
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Будь ласка, заповніть це поле!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="description">
                            <p className="property-name">Опис</p>
                            {getFieldDecorator('description', {
                                rules: [{ required: true, message: 'Будь ласка, заповніть це поле!' }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="price">
                            <p className="property-name">Ціна</p>
                            {getFieldDecorator('price', {
                                rules: [{ required: true, message: 'Будь ласка, заповніть це поле!' }]
                            })(<InputNumber />)}
                        </Form.Item>
                    </Form>
                </Spin>
            </Modal>
        );
    }
}

const mapStateToProps = ({productReducer}) => {
    return {
        isCreated: productReducer.isCreated
    }
};

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(CreateProductForm);

export default connect(mapStateToProps)(CollectionCreateForm);
