import React from 'react';
import '../styles/Promotion.scss';

import theWilloughbys from '../../images/the-willoughbys.png';

class Children extends React.Component {
  render() {
    return (
      <section className="container promotion">
      <h4 className="children">Children</h4>
      <div className="row">
        <div className="col s12 m6 l6 xl4">
          <img className="materialboxed" src={theWilloughbys} alt="Movie" />
  
        </div>
        <div className="col s12 m6 l6 xl8 card-panel hoverable">
          <h5>Synopsis</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum doloremque eos sapiente voluptatum sequi minus. Error, nihil corrupti iusto laudantium veniam quaerat quos quod labore blanditiis natus ab deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi odio nam veritatis, aspernatur laborum quasi alias laudantium, rerum nemo similique natus laboriosam vero enim sint accusamus eligendi! Unde, laudantium!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, voluptatum rerum doloribus culpa incidunt quo consequuntur nulla magnam unde quas adipisci. Voluptas dolor cum, veritatis cupiditate praesentium quidem debitis cumque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores debitis repellendus, nemo corporis architecto voluptatibus quo facilis consectetur, laudantium ipsam facere officia tempore! Itaque voluptatibus provident vero nulla tempora obcaecati.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, voluptatum rerum doloribus culpa incidunt quo consequuntur nulla magnam unde quas adipisci. Voluptas dolor cum, veritatis cupiditate praesentium quidem debitis cumque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores debitis repellendus, nemo corporis architecto voluptatibus quo facilis consectetur, laudantium ipsam facere officia tempore! Itaque voluptatibus provident vero nulla tempora obcaecati.</p>
        </div>
      </div>
      <section className="card-panel hoverable">
        <h5>Criticism</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, voluptatum rerum doloribus culpa incidunt quo consequuntur nulla magnam unde quas adipisci. Voluptas dolor cum, veritatis cupiditate praesentium quidem debitis cumque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores debitis repellendus, nemo corporis architecto voluptatibus quo facilis consectetur, laudantium ipsam facere officia tempore! Itaque voluptatibus provident vero nulla tempora obcaecati.</p>
      </section>
    </section>
    )
  }
}

export default Children;