import React from 'react'


import {ReactComponent as Logo} from "../../assets/logo.svg"
import {auth} from "../../firebase/firebase"
import {connect} from "react-redux";
import CartIcon from '../cart-icon/cart-icon';
import Cart from '../cart-drop/cart-drop';
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { OptionsContainer, OptionLink, OptionDiv, HeaderContainer, LogoContainer} from './header-styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/shop'>
          CONTACT
          </OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionDiv>
        ) : (
          <OptionLink to='/signin'>
            SIGN IN
            </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <Cart />}
    </HeaderContainer>
  );
  
  const mapStateToProps =createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
  
  export default connect(mapStateToProps)(Header);