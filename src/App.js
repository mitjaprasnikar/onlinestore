import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import Shop from "../src/pages/shop/shop"
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
