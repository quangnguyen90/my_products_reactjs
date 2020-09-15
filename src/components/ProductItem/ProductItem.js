import React, { Component } from 'react';

class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <tr>
                <td>1</td>
                <td>1</td>
                <td>Iphone</td>
                <td>500</td>
                <td>
                    <span className="label label-warning">On Sell</span>
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