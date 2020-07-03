import React from 'react';
import './Carousel';

import M from 'materialize-css';

import wonderWoman from '../../images/wonder-woman.png';
import m365 from '../../images/365.png';
import annabelle from '../../images/Annabelle.png';
import meBeforeYou from '../../images/me-before-you.png';
import ninjaTurtle from '../../images/ninja-turtles.png';
import terminator from '../../images/Terminator.png';
import theDarkTower from '../../images/the-dark-tower.png';
import theWilloughbys from '../../images/the-willoughbys.png';
import founder from '../../images/founder.png';

class Carousel extends React.Component {

  componentDidMount() {
    const carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel, {
      duration: 200,
      dist: -80,
      shift: 5,
      padding: 5,
      numVisible: 8,
      indicators: true
    });
  }

  render (){
    return (
      <section className="container carousel-home">
        <div className="carousel carousel-first">
          <a className="carousel-item" href="/"><img src={wonderWoman} alt="movie wonder woman" /></a>
          <a className="carousel-item" href="/"><img src={m365} alt="movie 365" /></a>
          <a className="carousel-item" href="/"><img src={annabelle} alt="movie 365" /></a>
          <a className="carousel-item" href="/"><img src={meBeforeYou} alt="movie me before you" /></a>
          <a className="carousel-item" href="/"><img src={ninjaTurtle} alt="movie ninja turtle" /></a>
          <a className="carousel-item" href="/"><img src={terminator} alt="movie terminator" /></a>
          <a className="carousel-item" href="/"><img src={theDarkTower} alt="movie the dark tower" /></a>
          <a className="carousel-item" href="/"><img src={theWilloughbys} alt="movie the willoughbys" /></a>
          <a className="carousel-item" href="/"><img src={founder} alt="movie founder" /></a>
        </div>
      </section>
    )
  }
}

export default Carousel;