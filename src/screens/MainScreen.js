import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import WebServer from "../APIs/WebServer";
import Pagination from "../components/Pagination";
import './MainScreen.css'

export default function MainScreen() {

    const [products, setProduct] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limitOfFirstPage, setLimitOfFirstPage] = useState(0);

    const webServer = new WebServer();

    useEffect(() => {
        const fetchProducts = async () => {
            const productList = await webServer.getProducts(0);
            setProduct(productList);

            setTotalPages(Math.ceil(productList.total / productList.limit));
            setLimitOfFirstPage(productList.limit);
        }

        fetchProducts();
    }, []);

    const handlePaginationClick = (skip) => {
        console.log(skip);
        webServer.getProducts(skip)
            .then((res) => setProduct(res));

    }

    return (
        <div className="container">
            <ProductList data={products} />
            {totalPages > 0 && <Pagination pages={totalPages} totalRecords={products.total} limit={limitOfFirstPage} skip={products.skip} handlePaginationClick={handlePaginationClick} />}
        </div>
    );
}