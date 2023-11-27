import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart);
    // const cart=props.cart; //option 1
    // const{cart}=props; //option 2


    let totalShipping=0;

    let totalPrice=0;
    for(const product of cart)
    {
       totalPrice=totalPrice+product.price;
       totalShipping=totalShipping+product.shipping;
    }


    let tax=totalPrice*5/100;

    let grandTotal=totalPrice+totalShipping+tax;
    return (
        <div className='cart'>
            <h4>Products summary</h4>
            <p>Selected items:{cart.length}</p>
            <p>Total Price:$ {totalPrice}</p>
            <p>Total Shipping Charge:$ {totalShipping}</p>
            <p>Tax:$ {tax.toFixed(2)}</p>
            <h6>Grand Total:$ {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;