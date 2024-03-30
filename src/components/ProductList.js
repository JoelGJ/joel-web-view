import React from "react";
import noResultsImage from '../images/error-no-search-results.png';
import './ProductList.css'

export default function ProductList({ data }) {
    const productDetails = data;

    if (productDetails.products && productDetails.products.length === 0) {
        return (
            <div className="no-results-image-container">
                <img src={noResultsImage} alt="No results found" />
                <div className="heading">Sorry, no results found!</div>
                <div className="message">Please check the spelling or try searching for something else</div>
            </div>
        );
    }

    function truncateTitle(title) {
        const maxChars = 22;
        if (title.length <= maxChars) {
            return title;
        }
        return title.substring(0, maxChars) + '...';
    }

    function truncateDescription(description) {
        const maxChars = 75;
        if (description.length <= maxChars) {
            return description;
        }
        return description.substring(0, maxChars) + '...';
    }

    function calculateColorWithRating (rating) {
        if (rating < 2.5) {
            return {backgroundColor : '#ff5d5d'}
        } else if (rating > 2.5 && rating < 3.5) {
            return {backgroundColor : '#f4b619'}
        } else {
            return {backgroundColor : '#23bb75', color : 'white'}
        }
    }

    function calculateActualPrice (discountedPrice, discountPercentage) {
        let actualPrice = discountedPrice + (discountedPrice * (discountPercentage / 100));
        return actualPrice.toFixed(0);
    }

    return (
        <>
            <div className="product-list-container">
                {productDetails.products && productDetails.products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.thumbnail} alt={product.title} className="product-image"></img>
                        <div className="product-details">
                            <div className="product-title">{truncateTitle(product.title)}</div>
                            <div className="product-description">{truncateDescription(product.description)}</div>
                            <div className="rating-icon" style={calculateColorWithRating(product.rating.toFixed(1))}><span className="rating">{product.rating.toFixed(1)}</span> ★</div>
                            <div className="product-price">
                                <span className="discount-price">${product.price}</span> {product.discountPercentage > 0 ? <span className="actual-price">${calculateActualPrice(product.price, product.discountPercentage)}</span> : ''} <span className="product-stock">{product.stock <= 20 ? 'Only ' + product.stock + ' left in stock' : ''}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}