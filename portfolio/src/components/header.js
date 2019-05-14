import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (           
            <div className="container-fluid info p-3" id="top-icons">
            <div className="row">
              <div className="col d-flex justify-content-between align-items-baseline flex-wrap">
                <div className="info-icons p-2">
                  <a href="#" className="mr-2 primary-color">
                  <i className="fab fa-facebook-f fa-2x"></i>              
                  </a>
                  <a href="#" className="mr-2 primary-color">              
                  <i className="fab fa-github fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>    
    
          </div>      
          
        );
    }
}

export default Header;