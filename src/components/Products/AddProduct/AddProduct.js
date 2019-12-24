import React, {Component} from 'react';
import {Button} from "antd";
import CreateProductForm from "./CreateProductForm/CreateProductForm";
import {connect} from "react-redux";
import {addProduct} from "../../../actions/productAction";

import './style.scss'

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
            this.props.dispatch(addProduct(values))
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
                <Button type="primary" onClick={this.showModal} loading={this.props.isActive} className="add-product">
                    Додати продукт
                </Button>
                <CreateProductForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}/>
            </React.Fragment>
        );
    }
}

export default connect()(AddProduct);