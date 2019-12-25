import React, {Fragment} from 'react';
import {Button, Divider, Table} from 'antd';
import AddProduct from "../AddProduct/AddProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";

import './style.scss'

const ProductsTable = (props) => {

    const columns = [
        {
            title: 'Ім\'я',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Опис',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Ціна',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Дії',
            key: 'action',
            render: (text) => {
                return (
                <span>
                    <UpdateProduct currentProduct={text}/>
                    {text.status === 10 ?
                        <Fragment>
                            <Divider type="vertical" />
                            <Button type="danger" ghost onClick={props.deleteItem.bind(this, text)}>Видалити</Button>
                        </Fragment>
                        : undefined}
                </span>
            )},
        },
    ];

    const renderProducts = () => {
        const products = props.products;
        products.sort(function(a,b){
            return b.created_at - a.created_at;
        });
       return products.map((product) => {
            return {
                key: product.id,
                name: product.name,
                price: product.price,
                description: product.description,
                status: product.status
            }
        })
    };

    return (
        <Fragment>
            <AddProduct isActive={props.isLoading}/>
            <Table columns={columns}
                   loading={props.isLoading}
                   dataSource={renderProducts()}/>
        </Fragment>
    );
};

export default ProductsTable;
