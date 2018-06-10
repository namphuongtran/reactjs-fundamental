import React, { Component } from 'react';

class AddProductItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formProduct: null
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    componentWillMount(){
        // cai nay dc k e?
        console.log(this.props.formProduct);
        const name = this.props.formProduct != null ? this.props.formProduct.name : '';
        const price = this.props.formProduct != null ? this.props.formProduct.price : '';
        const color = this.props.formProduct != null ? this.props.formProduct.color : '';

        this.setState({
            formProduct
        });
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.onAdd(this.nameInput.value, this.priceInput.value, this.colorInput.value);
        this.onReset();
    }

    onReset() {
        this.nameInput.value = '';
        this.priceInput.value = '';
        this.colorInput.value = '';
    }

    render() {
        
        return (
            <form className="product-form" onSubmit={this.onSubmit}>
                <h1 className="app-title">Add Product</h1>
                <div className="input-group">
                    <input type="text" placeholder="Name" className="form-control" ref={
                        nameInput => this.nameInput = nameInput
                    } value={name} />
                </div>
                <div className="input-group">
                    <input type="text" placeholder="Price" className="form-control" ref={
                        priceInput => this.priceInput = priceInput
                    } value={price} />
                </div>
                <div className="input-group">
                    <input type="text" placeholder="Color" className="form-control" ref={
                        colorInput => this.colorInput = colorInput
                    } value={color} />
                </div>
                <button className="btn btn-default">Add</button>
                <span>&nbsp;</span>
                <button type="button" className="btn btn-default">Cancel</button>
            </form>
        );
    }
}

export default AddProductItem;
