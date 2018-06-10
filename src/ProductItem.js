import React, { Component } from 'react';


class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    onDelete() {
        const { onDelete, id } = this.props;
        onDelete(id);
    }

    onEdit() {
        const { onEdit, id } = this.props;
        onEdit(id);
    }

    render() {
        const { index, name, price, color } = this.props;
        return (
            <tr>
                <th scope="row">{index}</th>
                <td>{name}</td>
                <td>{price}</td>
                <td>{color}</td>
                <td>
                    <button type="button" className="btn btn-default" onClick={this.onEdit}>Edit</button>
                    <span>&nbsp;</span>
                    <button type="button" className="btn btn-default" onClick={this.onDelete}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
