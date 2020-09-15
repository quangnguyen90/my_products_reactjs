import React, { Component } from 'react';

class NotFoundPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="container">
                <div className="alert alert-warning">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>404 Page Not Found</strong>
                </div>
            </div >
        );
    }
}

NotFoundPage.propTypes = {

};

export default NotFoundPage;