import React, {Component} from 'react';
import ProductsTable from "./ProductsTable/ProductsTable";

import './style.scss';
import {connect} from "react-redux";
import {getProducts} from "../../actions/productAction";

class Products extends Component {

    getProducts = (page) => {
        const token = JSON.parse(localStorage.getItem('token'));
        this.props.dispatch(getProducts(token, page))
    };

    componentDidMount() {
        this.getProducts()
    }

    render() {
        return (
            <section className="products">
                <ProductsTable getProducts={this.getProducts} products={this.props.products} isLoading={this.props.loading}/>
            </section>
        );
    }
}

const mapStateToProps = ({productReducer}) => {
    return {
        products: productReducer.products,
        loading: productReducer.loading
    }
};


export default connect(mapStateToProps)(Products);