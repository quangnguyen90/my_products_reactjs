import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Products</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ProductItem />
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

ProductList.propTypes = {

};


export
    default ProductList;