import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import axios from 'axios';

class ProductListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        var products = [];
        axios({
            method: 'GET',
            url: 'https://5f6037bc90cf8d0016557673.mockapi.io/api/products',
            data: null
        }).then(res => {
            console.log(res);
            products = res.data;
        }).catch(err => {
            console.log(err);
        });

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-info mb-10">Add Product</button>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                    />
                )
            });
        }
        return result;
    }
}

ProductListPage.propTypes = {

};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, action) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);