import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import Shop from "../src/pages/shop/shop"
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
