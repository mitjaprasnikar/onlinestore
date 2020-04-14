import React from 'react'


import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { createStructuredSelector} from "reselect";
import { withRouter} from "react-router-dom"
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { CartDropdown, CartItems, DropdownButton, EmptyCart } from './cart-drop-styles';




const Cart = ({cartItems, history, dispatch}) => (
   <CartDropdown>
        <CartItems>
           {
           cartItems.length ? (
           cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))
           ) : (
               <EmptyCart>Your cart is empty</EmptyCart>
           )
            }
        </CartItems>

        <DropdownButton onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden())
    }}>GO TO CHECKOUT</DropdownButton>

</CartDropdown>
);


const mapStateToProps =createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps) (Cart));