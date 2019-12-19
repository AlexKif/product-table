import React, {Component} from 'react';
import ProductsTable from "./ProductsTable/ProductsTable";

import './style.scss'

class Products extends Component {
    render() {
        return (
            <section className="products">
                <ProductsTable/>
            </section>
        );
    }
}

export default Products;