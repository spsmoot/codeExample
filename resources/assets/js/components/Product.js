import React, { Component } from 'react';

/* Stateless component or pure component
 * { product } syntax is the object destructing
 */
const Product = ({product}) => {
    //if the props product is null, return Product doesn't exist
    if(!product) {
        return(<div>No product select or it doesnt exit</div>);
    }

    //Else, display the product data
    return(
        <div>
            <h2> {product.title} </h2>
            <p> {product.description} </p>
            <h3> Status : {product.available ? 'Available' : 'Out of stock'} </h3>
            <h3> Price : {product.price} </h3>
        </div>
    )
};

export default Product ;
