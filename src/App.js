import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Review from './components/Review/Review';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
        <Header></Header>

        
        <Router>
          <Switch>
            <Route exact path="/">
                <Shop></Shop>
            </Route>
            <Route path="/shop">
                <Shop></Shop>
            </Route>
            <Route path="/review">
                <Review></Review>
            </Route>
            <Route path="/inventory">
                <Inventory></Inventory>
            </Route>
            <Route path="/product/:key">
              <ProductDetail></ProductDetail>
            </Route>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        
        {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
