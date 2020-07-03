import React from 'react';
import '../styles/Footer.scss';

class Footer extends React.Component {
  render(){
    return (
      <footer className="page-footer footer">
      <div className="container">
        <div className="row">
          <div className="col l8 m6 s12 ">
            <h5 className="white-text">Platzi Movie</h5>
            <p className="grey-text text-lighten-4">Calle 45 # 18 - 15</p>
            <p className="grey-text text-lighten-4">Tel: 5555-555</p>
            <p className="grey-text text-lighten-4">info@platzimovie.com</p>
          </div>
          <div className="col l4 m6 s12">
            <h5 className="white-text">Categories</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Child</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Action</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Comedy</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Terror</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2020 All rights reserved
        <a className="grey-text text-lighten-4 right" href="/">Home</a>
        </div>
      </div>
    </footer>
    )
  }
}

export default Footer;