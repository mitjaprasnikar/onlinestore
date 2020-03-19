import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import Shop from "../src/pages/shop/shop"
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import SignIn from './pages/signin/signin';
import {auth, createUserProfileDocument} from "./firebase/firebase"

class App extends React.Component {
    constructor(){
      super();

      this.state = {
        currentUser: null,
      }
    }

    unscubscribeFromAuth = null;
    componentDidMount() {
      this.unscubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser:{
                id: snapShot.id,
                ...snapShot.data()
              }
            });
           
          });

        }
        this.setState({currentUser:userAuth});
      })
    }

    componentWillUnmount () {

      this.unscubscribeFromAuth();
    }

  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/signin" component={SignIn}/>
      </Switch>
    </div>
  );
}
}

export default App;
