import React from 'react';
import '../styles/Categories.scss';
import { Link } from 'react-router-dom';

class Categories extends React.Component {
  render() {
    return (
      <section className="container categories">
      <h4 className="center-align">Categories</h4>
  
      <div className="center-align">
        <Link className="waves-effect waves-light btn" to="/home/child">Child</Link>
        <Link className="waves-effect waves-light btn" to="/home/child">Action</Link>
        <Link className="waves-effect waves-light btn" to="/home/child">Comedy</Link>
        <Link className="waves-effect waves-light btn" to="/home/child">Terror</Link>
      </div>
    </section>
    )
  }
}

export default Categories;