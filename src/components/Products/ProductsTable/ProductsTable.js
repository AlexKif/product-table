import React, {Fragment} from 'react';
import {Button, Divider, Table} from 'antd';

import './style.scss'
import AddProduct from "../AddProduct/AddProduct";

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
            render: (text, record) => {
                return (
                <span>
                    <Button type="primary" ghost>Редагувати</Button>
                    <Divider type="vertical" />
                    <Button type="danger" ghost>Видалити</Button>
                </span>
            )},
        },
    ];

    const renderProducts = () => {
       return props.products.map((product, index) => {
            return {
                key: index,
                name: product.name,
                price: product.price,
                description: product.description,

            }
        })
    };

    return (
        <Fragment>
            <AddProduct isActive={props.isLoading}/>
            <Table columns={columns}
                   // pagination={false}
                   loading={props.isLoading}
                   dataSource={renderProducts()}/>
        </Fragment>
    );
};

export default ProductsTable;