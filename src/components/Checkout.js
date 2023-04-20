import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

function Checkout({ amount }) {

    function tokenHandle(token) {
        {
            console.log(token)
        }
    }
    return (
        <div>
            <StripeCheckout
                token={tokenHandle}
                amount={amount}
                currency='INR'
                shippingAddress
                stripeKey='pk_test_51MyXLGSHRphQLY722oucV31BSQYv0K0PDYjT80fecZcYIX5itAuQQDbKBHhgICMndmhlo5lHes9TWqPq8abvVrLw00RfKqWmTT'
            >
                <button className='btn btn-dark'>Pay Now</button>
            </StripeCheckout>
        </div>
    )
}

export default Checkout
