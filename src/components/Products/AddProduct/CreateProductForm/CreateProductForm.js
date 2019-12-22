import React, {Component} from 'react';
import {Form, Input, Modal} from "antd";

class CreateProductForm extends Component {
    render() {
        const { visible, onCancel, onCreate, form } = this.props;
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
                            rules: [{ required: true, message: 'Будь ласка, заповніть це поле!' }],
                        })(<Input />)}
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(CreateProductForm);

export default CollectionCreateForm;
