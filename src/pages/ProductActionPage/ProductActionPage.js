import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: '',
            lastEditing: null
        };

    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps && nextProps.match && nextProps.itemEditing !== prevState.lastEditing) {
            var { itemEditing } = nextProps;
            return {
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status,
                lastEditing: itemEditing
            };
        }
        return null;
    }

    // For old version. Now replace by function getDerivedStateFromProps
    // Install: npx react-codemod rename-unsafe-lifecycles
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     if (nextProps && nextProps.itemEditing) {
    //         var { itemEditing } = nextProps;
    //         this.setState({
    //             id: itemEditing.id,
    //             txtName: itemEditing.name,
    //             txtPrice: itemEditing.price,
    //             chkbStatus: itemEditing.status
    //         });
    //     }
    // }

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
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        };
        if (id) {
            this.props.onUpdateProduct(product);
            history.goBack();
        } else {
            this.props.onAddProduct(product);
            history.goBack();
        }
    }

    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName || ""}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Product Price</label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice || ""}
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
                                checked={!!chkbStatus}
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

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
