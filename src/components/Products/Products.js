import React, {Component} from 'react';
import ProductsTable from "./ProductsTable/ProductsTable";
import {connect} from "react-redux";
import {deleteProduct, getProducts} from "../../actions/productAction";

import './style.scss';

class Products extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isDelete) {
            this.getProducts();
        }
    }

    getProducts = (page) => {
        this.props.dispatch(getProducts(page))
    };

    deleteItem = (product) => {
        this.props.dispatch(deleteProduct(product))
    };

    componentDidMount() {
        this.getProducts ()
    }

    render() {
        return (
            <section className="products">
                <ProductsTable getProducts={this.getProducts}
                               products={this.props.products}
                               isLoading={this.props.loading}
                               deleteItem={this.deleteItem}
                />
            </section>
        );
    }
}

const mapStateToProps = ({productReducer}) => {
    return {
        products: productReducer.products,
        loading: productReducer.loading,
        createdProduct: productReducer.createdProduct,
        remoteProduct: productReducer.remoteProduct,
        isDelete: productReducer.isDelete
    }
};


export default connect(mapStateToProps)(Products);