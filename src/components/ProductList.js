import React, { useEffect, useState } from "react";
import WebServer from "../APIs/WebServer";
import './ProductList.css'

export default function ProductList({ data }) {
    const productsDetails = data;
    
    function truncateDescription(description) {
        const maxChars = 75;
        if (description.length <= maxChars) {
            return description;
        }
        return description.substring(0, maxChars) + '...';
    }

    function calculateColorWithRating (rating) {
        if (rating < 2.5) {
            return {backgroundColor : '#ff6767'}
        } else if (rating > 2.5 && rating < 3.5) {
            return {backgroundColor : '#ffd07b'}
        } else if (rating > 3.5) {
            return {backgroundColor : '##6aff6a'}
        }
    }
    return (
        <>
            <div className="product-list-container">
                {productsDetails.products && productsDetails.products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.thumbnail} className="product-image"></img>
                        <div className="product-details">
                            <div className="product-title">{product.title}</div>
                            <div className="product-description">{truncateDescription(product.description)}</div>
                            <div className="rating-icon" style={calculateColorWithRating(product.rating.toFixed(1))}><span className="rating">{product.rating.toFixed(1)}</span>★</div>
                            <div className="product-price">${product.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}