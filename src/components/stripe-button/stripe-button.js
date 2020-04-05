import React from 'react'
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_WADi7VjLtsY2xxiL6agfH54l008hkUq9Uc";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return ( 
        <StripeCheckout 
            label="Pay Now"
            currency="EUR"
            name="Clothing Store"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is ${price}€`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            
            />
    );

};

export default StripeCheckoutButton;
