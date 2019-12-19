import React from 'react';
import { Table, Divider, Tag } from 'antd';



const ProductsTable = () => {
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
        }
    ];

    const data = [
        {
            name: 'John Brown',
            price: 32,
            description: 'New York No. 1 Lake Park',
        },
        {
            name: 'Jim Green',
            price: 42,
            description: 'London No. 1 Lake Park',
        },
        {
            name: 'Joe Black',
            price: 32,
            description: 'Sidney No. 1 Lake Park',
        },
    ];
    return (
        <Table columns={columns} dataSource={data}/>
    );
};

export default ProductsTable;