import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../Utilities/fakedb';



const Shop = () => {
    const[products,SetProducts]=useState([]);
    useEffect(()=>
    {
        fetch("products.json").then((res)=>res.json()).then((res)=>
        SetProducts(res));
    },[]);
    
    useEffect(()=>
    {
        const savedCart=[];
        // console.log('Products',products)
        const storedCart=getShoppingCart();

        //step 1:get id
        for(const id in storedCart)
        {
            //step 2:get the product by using id

            const addedProduct=products.find(product=>product.id === id);
           

            //step 3:get quantity of the product

           if(addedProduct)
           {
            const quantity=storedCart[id];
            addedProduct.quantity=quantity;

            //step 4:add the added product to saved cart
            savedCart.push(addedProduct);
           }
            // console.log(addedProduct);

        }
        //step 5: set cart
        setCart(savedCart);
        
    },[products])

    const[cart,setCart]=useState([]);
    const handelAddToCart=(product)=>
    {
        let newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.id);
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