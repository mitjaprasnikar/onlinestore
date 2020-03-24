import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import Shop from "../src/pages/shop/shop"
import { Switch, Route , Redirect} from 'react-router-dom';
import Header from './components/header/header';
import SignIn from './pages/signin/signin';
import {auth, createUserProfileDocument} from "./firebase/firebase"
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selector';
import { createStructuredSelector} from "reselect";
import CheckoutPage from './pages/checkout/checkout';

class App extends React.Component {
    

    unscubscribeFromAuth = null;
    componentDidMount() {

      const {setCurrentUser} = this.props;

      this.unscubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            this.props.setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
           
          });

        }
        setCurrentUser(userAuth)
      })
    }

    componentWillUnmount () {

      this.unscubscribeFromAuth();
    }

  render() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={Shop}/>
        <Route exact path="/checkout" component={CheckoutPage}/>
        <Route exact path="/signin" render={ () => this.props.currentUser ? (<Redirect to="/" />) : <SignIn/> }/>
      </Switch>
      
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps) (App);
