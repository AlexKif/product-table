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
                    <Divider type="vertical" />
                    {text.status === 10 ? <Button type="danger" ghost onClick={props.deleteItem.bind(this, text)}>Видалити</Button>: undefined}
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



// class ProductsTable extends Component {
//
//     render() {
//         const columns = [
//             {
//                 title: 'Ім\'я',
//                 dataIndex: 'name',
//                 key: 'name',
//             },
//             {
//                 title: 'Опис',
//                 dataIndex: 'description',
//                 key: 'description',
//             },
//             {
//                 title: 'Ціна',
//                 dataIndex: 'price',
//                 key: 'price',
//             },
//             {
//                 title: 'Дії',
//                 key: 'action',
//                 render: (text) => {
//                     return (
//                         <span>
//                             {/*<Button type="primary" ghost onClick={() => this.child.showModal(text)} className="add-product">*/}
//                             {/*    Редагувати*/}
//                             {/*</Button>*/}
//                             {/*<UpdateProduct ref={instance => { this.child = instance; }} currentProduct={text}/>*/}
//                             <UpdateProduct text={text}/>
//                             <Divider type="vertical"/>
//                             <Button type="danger" ghost onClick={this.props.deleteItem.bind(this, text)}>Видалити</Button>
//                         </span>
//                     )},
//             },
//         ];
//
//         const renderProducts = () => {
//             return this.props.products.map((product, index) => {
//                 return {
//                     key: index,
//                     name: product.name,
//                     price: product.price,
//                     description: product.description,
//
//                 }
//             })
//         };
//
//         return (
//             <Fragment>
//                 <AddProduct isActive={this.props.isLoading}/>
//                 <Table columns={columns}
//                        loading={this.props.isLoading}
//                        dataSource={renderProducts()}
//                 />
//             </Fragment>
//         );
//     }
// }
//
// export default connect()(ProductsTable);