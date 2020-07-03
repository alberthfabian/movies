import React from 'react';
import Header from '../components/containers/Header';
import Checkout from '../components/containers/Checkout';
import Movies from '../components/containers/Movies';
import Footer from '../components/containers/Footer';

class CheckoutPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Checkout />
        <Movies />
        <Footer />
      </div>
    )
  }
}

export default CheckoutPage;