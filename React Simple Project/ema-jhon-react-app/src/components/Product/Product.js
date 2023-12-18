import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product)
    // console.log(props.handleProductCart)

    const {img, name, seller, stock, price} = props.product;
    return (
        <div className="single-product">
            <div className="product-thumbnail">
                <img src={img} alt=""/>
            </div>
            <div className="product-content">
                <h4>{name}</h4>
                <p className="product-author"><span>by</span> {seller}</p>
                <p className="current-stock">
                    only {stock} left in stock - order soon
                </p>
                <p className="product-price">
                    {price}
                </p>
                <div className="add-to-cart-button">
                    <button onClick={() => props.handleProductCart(props.product)}><FontAwesomeIcon icon={faCartArrowDown} /> Add to cart</button>
                </div>
            </div>
            
        </div>
    );
};

export default Product;