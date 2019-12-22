import React, {Component} from 'react';

import './style.scss'
import {Button} from "antd";
import CreateProductForm from "./CreateProductForm/CreateProductForm";
import {productServices} from "../../../services/productServices";

class AddProduct extends Component {

    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            const token = JSON.parse(localStorage.getItem('token'));
            productServices.createProduct(token, values).then(res => {
                console.log(res);
            });
            // console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal} className="add-product">
                    Додати продукт
                </Button>
                <CreateProductForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}

export default AddProduct;