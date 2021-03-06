import React, { Component } from 'react';
import $ from 'jquery';

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url} target="blank"><i className={network.className}></i></a></li>
      })
    }

    return (
      <React.Fragment>
        <header id="home">

          <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>              
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>

          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm {name}</h1>
              <h2 style={{color:'darkorange'}}>{occupation}</h2>
              <hr />
              <ul className="social">
                {networks}
              </ul>
              <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
              </p>
            </div>


          </div>

          {/* <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p> */}

        </header>
      </React.Fragment>
    );
  }
}

export default Header;