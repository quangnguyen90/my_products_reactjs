import React, { Component } from 'react';


class ProductActionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Product Price</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Product Status</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="" />
                            On Sell
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

ProductActionPage.propTypes = {

};

export default ProductActionPage;