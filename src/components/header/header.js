import React from 'react'
import "./header.scss";
import { Link  } from 'react-router-dom';
import {ReactComponent as Logo} from "../../assets/logo.svg"
import {auth} from "../../firebase/firebase"
import {connect} from "react-redux";
import CartIcon from '../cart-icon/cart-icon';
import Cart from '../cart-drop/cart-drop';

const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/" className="logo-container"> <Logo className="logo"/></Link>
        <div className="options">
            <Link className="option" to="/shop"> SHOP </Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        <Cart/>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser

})
export default connect(mapStateToProps)(Header);