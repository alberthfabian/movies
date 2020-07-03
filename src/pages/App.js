import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Child from './Child';
import CheckoutPage from './CheckoutPage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/child" component={Child} />
        <Route exact path="/home/checkout" component={CheckoutPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;



