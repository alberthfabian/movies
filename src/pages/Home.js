import React from 'react';
import Header from '../components/containers/Header';
import Carousel from '../components/containers/Carousel';
import Categories from '../components/containers/Categories';
import Promotion from '../components/containers/Promotion';
import Movies from '../components/containers/Movies';
import Footer from '../components/containers/Footer';

class Home extends React.Component {
  render() {
    return (
      // <div className="App">
      <div>
        <Header />
        <Carousel />
        <Categories/>
        <Promotion />
        <Movies />
        <Footer />
      </div>
    )
  }
}

export default Home;