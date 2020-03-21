import React from 'react'
import "./cart-drop.scss"
import CustomButton from "../custom-button/custom-button"


const Cart = () => (
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);


export default Cart;