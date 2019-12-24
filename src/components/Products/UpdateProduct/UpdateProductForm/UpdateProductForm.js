import React, {Component} from 'react';
import {Form, Input, InputNumber, Modal, Spin} from "antd";
import {getProducts} from "../../../../actions/productAction";
import {connect} from "react-redux";

class UpdateProductForm extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {dispatch, isUpdate} = this.props;
        if(isUpdate) {
            dispatch(getProducts())
        }
    }

    render() {
        const { visible, onCancel, onCreate, form, currentProduct} = this.props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="Редагувати продукт"
                okText="Редагувати"
                onCancel={onCancel}
                onOk={onCreate}
                cancelText="Відміна"
            >
                <Spin spinning={false}>
                    <Form layout="vertical" className="modal-form">
                        <Form.Item label="name">
                            <p className="property-name">Ім'я</p>
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Будь ласка, заповніть це поле!' }],
                            initialValue: currentProduct.name
                            })(<Input/>)}
                        </Form.Item>
                        <Form.Item label="description">
                            <p className="property-name">Опис</p>
                            {getFieldDecorator('description', {
                                rules: [{ required: true, message: 'Будь ласка, заповніть це поле!' }],
                                initialValue: currentProduct.description
                            })(<Input/>)}
                        </Form.Item>
                        <Form.Item label="price">
                            <p className="property-name">Ціна</p>
                            {getFieldDecorator('price', {
                                rules: [{ required: true, message: 'Будь ласка, заповніть це поле!' }],
                                initialValue: currentProduct.price
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
        isUpdate: productReducer.isUpdate
    }
};

const UpdateProductModal = Form.create({ name: 'form_in_modal' })(UpdateProductForm);

export default connect(mapStateToProps)(UpdateProductModal);