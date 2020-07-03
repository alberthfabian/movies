import React from 'react';
import '../styles/Movies.scss';

import annabelle from '../../images/Annabelle.png';
import terminator from '../../images/Terminator.png';
import ninjaTurtles from '../../images/ninja-turtles.png';
import theDarkTower from '../../images/the-dark-tower.png';

class Movies extends React.Component {
  render(){
    return(
      <section className="container movies">
      <h4>Movies</h4>
  
      <div className="row">
  
        <div className="col s12 m6 l6 xl3 card">
          <figure className="card-image waves-effect waves-block waves-light">
            <img src={annabelle} alt="movie" />
          </figure>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Annabelle<i className="material-icons right">more_vert</i></span>
            <p><a className="waves-effect waves-light btn-small" href="/">See more</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Annabelle<i className="material-icons right">close</i></span>
            <p>A couple begins to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by satanic cultists.</p>
          </div>
        </div>
    
        <div className="col s12 m6 l6 xl3 card">
          <figure className="card-image waves-effect waves-block waves-light">
            <img src={terminator} alt="movie" />
          </figure>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Terminator<i className="material-icons right">more_vert</i></span>
            <p><a className="waves-effect waves-light btn-small" href="/">See more</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Terminator<i className="material-icons right">close</i></span>
            <p>In 1984, a human soldier is tasked to stop an indestructible cyborg killing machine, both sent from 2029, from executing a young woman, whose unborn son is the key to humanity's future salvation.</p>
          </div>
        </div>
    
        <div className="col s12 m6 l6 xl3 card">
          <figure className="card-image waves-effect waves-block waves-light">
            <img src={ninjaTurtles} alt="movie" />
          </figure>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Ninja Turtles<i className="material-icons right">more_vert</i></span>
            <p><a className="waves-effect waves-light btn-small" href="/">See more</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Ninja Turtles<i className="material-icons right">close</i></span>
            <p>When a kingpin threatens New York City, a group of mutated turtle warriors must emerge from the shadows to protect their home.</p>
          </div>
        </div>
    
        <div className="col s12 m6 l6 xl3 card">
          <figure className="card-image waves-effect waves-block waves-light">
            <img src={theDarkTower} alt="movie" />
          </figure>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">The dark tower<i className="material-icons right">more_vert</i></span>
            <p><a className="waves-effect waves-light btn-small" href="/">See more</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">The dark tower<i className="material-icons right">close</i></span>
            <p>A boy haunted by visions of a dark tower from a parallel reality teams up with the tower's disillusioned guardian to stop an evil warlock known as the Man in Black.</p>
          </div>
        </div>
  
      </div>
  
    </section>
    )
  }
}

export default Movies;