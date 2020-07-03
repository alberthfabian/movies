import React from 'react';

import '../styles/Header.scss';
import logo from '../../images/logo.png';

class Header extends React.Component {

  render() {
    return (
      <header className="container">
      
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo"><img src={logo} alt="Logo" /></a>
            <a href="/" data-target="menu-responsive" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            
            <ul className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Premieres</a></li>
            </ul>
          </div>
        </nav>
    
        <ul className="sidenav" id="menu-responsive">
          <li><a href="index.html">Home</a></li>
          <li><a href="badges.html">About Us</a></li>
          <li><a href="collapsible.html">Premieres</a></li>
        </ul>
      </header>
    )
  }
}

export default Header;