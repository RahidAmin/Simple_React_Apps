import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';



const Shop = () => {
    const[products,SetProducts]=useState([]);
    useEffect(()=>
    {
        fetch("products.json").then((res)=>res.json()).then((res)=>
        SetProducts(res));
    },[]);


    const[cart,setCart]=useState([]);
    const handelAddToCart=(product)=>
    {
        let newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    handelAddToCart={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                 <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;