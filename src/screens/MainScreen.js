import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import WebServer from "../APIs/WebServer";

export default function MainScreen() {

    const [products, setProduct] = useState([]);
    const webServer = new WebServer();

    useEffect(() => {
        const productList = webServer.getProducts()
        .then((response) => {
            setProduct(response)
        });
    }, []) 
    return (
        <div className="container">
        <ProductList data={products}/>
        </div>
    );
}