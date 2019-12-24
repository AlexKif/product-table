import React, {Component} from 'react';
import {Button} from "antd";
import {updateProduct} from "../../../actions/productAction";
import UpdateProductModal from "./UpdateProductForm/UpdateProductForm";
import {connect} from "react-redux";

class UpdateProduct extends Component {

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
            const newProduct = values;
            newProduct.key = this.props.currentProduct.key;
            const token = JSON.parse(localStorage.getItem('token'));
            this.props.dispatch(updateProduct(token, newProduct))
        });
        form.resetFields();
        this.setState({ visible: false });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };


    render() {
        return (
            <React.Fragment>
                <Button type="primary" ghost onClick={this.showModal} className="add-product">
                    Редагувати
                </Button>
                <UpdateProductModal
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    currentProduct={this.props.currentProduct}
                />
            </React.Fragment>
        );
    }
}

export default connect()(UpdateProduct);