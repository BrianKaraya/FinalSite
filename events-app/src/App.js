import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Home from './components/pages/Home';
// import Checkout from './components/pages/Checkout';
import Basket from './components/pages/Basket';
import Product1 from './components/pages/Product1';
import Product2 from './components/pages/Product2';
import Product3 from './components/pages/Product3';
import Product4 from './components/pages/Product4';
import Product5 from './components/pages/Product5';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/product1" exact component={Product1} />
          <Route path="/product2" exact component={Product2} />
          <Route path="/product3" exact component={Product3} />
          <Route path="/product4" exact component={Product4} />
          <Route path="/product5" exact component={Product5} />
          <Route path="/basket" exact component={Basket} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
