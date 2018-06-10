import React, { Component } from 'react';
import ProductItem from './ProductItem';
import AddProductItem from './AddProductItem';

const products = [
    {
        id: 1,
        name: 'iPad',
        price: 200,
        color: 'Titan'
    },
    {
        id: 2,
        name: 'iPhone',
        price: 650,
        color: 'Black'
    },
    {
        id: 3,
        name: 'iPod',
        price: 100,
        color: 'White'
    }
];


localStorage.setItem('products', JSON.stringify(products));

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: JSON.parse(localStorage.getItem('products')),
            formProduct: null
        };

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }
    componentWillMount() {
        const products = this.getProducts();
        this.setState({ products });
    }

    getProducts() {
        const products = this.state.products;
        return products;
    }

    onDelete(productId) {
        const products = this.getProducts();
        const productFiltered = products.filter((product) => product.id !== productId);

        this.setState({ products: productFiltered });
    }
    onEdit(productId) {
        const products = this.getProducts();
        const productFiltered = products.find((product) => product.id === productId);

        this.setState({ formProduct: productFiltered });
    }

    onAdd(name, price, color) {
        const products = this.getProducts();
        const lastId = products.slice(0).sort(function (a, b) { return b.id - a.id })[0].id;
        let id = lastId + 1;
        products.push({ id, name, price, color });
        this.setState({ products });
    }

    render() {

        return (
            <div>
                <AddProductItem
                    onAdd={this.onAdd}
                    formProduct={this.state.formProduct} />

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col-1">#</th>
                            <th scope="col-3">Name</th>
                            <th scope="col-3">Price</th>
                            <th scope="col-3">Color</th>
                            <th scope="col-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product, index) => {
                            return (<ProductItem
                                id={product.id}
                                index={++index}
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                color={product.color}
                                onDelete={this.onDelete}
                                onEdit={this.onEdit}
                            />);
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Product;
