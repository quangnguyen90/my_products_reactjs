import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
import { Link } from 'react-router-dom';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: '',
        };

    }
    componentDidMount() {
        var {match} = this.props;
        if (match) {
            var id = match.params.id;
            callApi(`products/${id}`, 'GET', null).then(res => {
                var data = res.data;
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price,
                    chkbStatus: data.status
                })
            });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { txtName, txtPrice, chkbStatus} = this.state;
        var { history } = this.props;
        callApi('products', 'POST', {
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }).then(res => {
            history.goBack();
        });
    }

    render() {
        var {txtName, txtPrice, chkbStatus} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Product Price</label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Product Status</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="chkbStatus"
                                value={chkbStatus}
                                checked={chkbStatus}
                                onChange={this.onChange}
                            />
                            On Sell
                        </label>
                    </div>
                    <Link to="/product-list" className="btn btn-danger mr-10">Back</Link>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

ProductActionPage.propTypes = {

};

export default ProductActionPage;