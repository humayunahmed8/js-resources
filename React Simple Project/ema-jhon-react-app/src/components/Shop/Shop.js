import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart'


const Shop = () => {
    //console.log(fakeData);

    const firstTenProduct = fakeData.slice(0, 10);
    //console.log(firstTenProduct);

    const [products, setProduct] = useState(firstTenProduct);

    //const result = useState(0);
    // console.log(result);
    // console.log(products);
    //console.log(products, setProduct);


    // Cart State 
    const [cart, setCart] = useState([]);
    // Cart Handler 
    const handleProductCart = (product) => {
        // console.log('Product Added', product)
        const newCart = [...cart, product];
        setCart(newCart);
    }

    

    return (
        <div className="shop-wrapper">
            <div className="shop-product-container">
                {
                    products.map(item => <Product handleProductCart={handleProductCart} product={item}></Product>)
                }
            </div>
            <div className="shop-cart-container">
                <Cart cart={cart}></Cart>
                <div className="place-order-button">
                    <button>Place order Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;