import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand" href="/#">Call API</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="/#">Home</a>
                    </li>
                    <li>
                        <a href="/#">Products</a>
                    </li>
                </ul>
            </div>
        );
    }
}

Menu.propTypes = {

};

export default Menu;