import React, { Component } from 'react';

class HeaderBody extends Component {
    render() {
        return (
            <header id="header">
                <div className="container">
                    <div className="row height-90 align-items-center justify-content-center">
                        <div className="col">
                            <div className="banner text-center">
                                <h1 className="display-1 text-capitalize w-50 mx-auto">
                                    <small>ashik</small> <strong className="primary-color">ashrafe</strong>
                                </h1>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" className="btn header-link primary-color">
                    <i className="fas fa-arrow-down fa-2x"></i>
                </a>
            </header>
        );
    }
}

export default HeaderBody;