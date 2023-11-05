import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const[products,SetProducts]=useState([]);
    useEffect(()=>
    {
        fetch("products.json").then((res)=>res.json()).then((res)=>
        SetProducts(res));
    },[])
    return (
        
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                 <h4>Products summary</h4>
            </div>
        </div>
    );
};

export default Shop;