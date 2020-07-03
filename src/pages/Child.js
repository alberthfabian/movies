import React from 'react';
import Header from '../components/containers/Header';
import Children from '../components/containers/Children';
import Movies from '../components/containers/Movies';
import Footer from '../components/containers/Footer';

class Child extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Children />
        <Movies />
        <Footer />
      </div>
    )
  }
}

export default Child;