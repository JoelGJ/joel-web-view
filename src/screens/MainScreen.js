import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import WebServer from "../APIs/WebServer";
import Pagination from "../components/Pagination";
import './MainScreen.css'
import NavBar from "../components/NavBar";
import CategorySelect from "../components/CategorySelect";
import Notification from "../components/Notification";
import Footer from "../components/Footer";

export default function MainScreen() {

    const [products, setProduct] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limitOfFirstPage, setLimitOfFirstPage] = useState(0);

    const webServer = new WebServer();

    const setUpPagination = (total, limit) => {
        setTotalPages(Math.ceil(total / limit));
        setLimitOfFirstPage(limit);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const productList = await webServer.getProducts(0);
            setProduct(productList);

            setUpPagination(productList.total, productList.limit);
        }
        fetchProducts();

        const fetchCategoryList = async () => {
            const categories = await webServer.getCategoryList();
            setCategoryList(categories)
        }
        fetchCategoryList();
    }, []);

    const handlePaginationClick = (skip) => {
        console.log(skip);
        webServer.getProducts(skip)
            .then((res) => setProduct(res));

    }

    const handleSearchRequest = (value) => {
        webServer.searchProduct(value)
            .then((response) => {
                setProduct(response);
                setUpPagination(response.total, response.limit)
            });
    }

    const handleCategorySelectOnChange = (category) => {
        webServer.getProductsOfCategory(category)
            .then((response) => {
                setProduct(response);
                setUpPagination(response.total, response.limit)
            });
    }

    return (
        <div>
        <div className="container">
            <NavBar handleSearchRequest={handleSearchRequest} />
            <Notification/>
            <CategorySelect categoryList={categoryList} handleCategorySelectOnChange={handleCategorySelectOnChange} />
            <ProductList data={products} />
            {totalPages > 0 && <Pagination pages={totalPages} totalRecords={products.total} limit={limitOfFirstPage} skip={products.skip} handlePaginationClick={handlePaginationClick} />}
        </div>
            <Footer />
        </div>
    );
}