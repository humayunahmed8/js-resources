import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    // const total = cart.reduce((total,prdct) => total + prdct.price , 0);

    // Alternative of Reducer 
    
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    // Shipping Charge 

    let shipping = 0;

    if(total > 35){
        shipping = 0;
    }
    else if(total > 15) {
        shipping = 4.99;
    }
    else if (total > 0){
        shipping = 12.99;
    }

    const tax = total / 10;

    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision); 
    }

    return (
        <div className="cart-content">
            <h3>Order Summary</h3>
            <p className="item-ordered">Item Ordered : {cart.length}</p>
            <p>Total Price : {formatNumber(total)}</p>
            <p>Shipping Cost : {shipping}</p>
            <p>Tax :  {formatNumber(tax)}</p>
            <p>Grand Total : {grandTotal}</p>
        </div>
    );
};

export default Cart;