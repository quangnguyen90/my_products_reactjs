import React, { Component } from 'react';

class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'On Sell' : 'Sold Out';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <button type="button" className="btn btn-success mr-10">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

ProductItem.propTypes = {

};

export default ProductItem;