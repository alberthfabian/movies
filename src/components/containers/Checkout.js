import React from 'react';
import '../styles/Checkout.scss';
import theWilloughbys from '../../images/the-willoughbys.png';

class Checkout extends React.Component {
  render() {
    return (
      <section className="container checkout">
        <h4 className="checkout__h4">Checkout</h4>
        <div className="row checkout__row">
          <div className="col s12 m6 l6 xl4">
            <img className="materialboxed" src={theWilloughbys} alt="Movie" />
    
          </div>
          <div className="col s12 m6 l6 xl8 card-panel hoverable">
            <div className="row">
              <div className="col m6">
                <h5 className="detail__title">Details</h5>
                <div>
                  <ul className="detail__group">
                    <li>Title</li>
                    <li>Director</li>
                    <li>Duration</li>
                    <li>Age</li>
                  </ul>
                </div>
              </div>
              <div className="col m6">
                <h5 className="total">Total</h5>
                <div className="price">
                  $ 000.00
                </div>
              </div>
            </div>
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

export default Checkout;