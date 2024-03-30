import axios from "axios";
import React from "react";

export default class WebServer {
    async getProducts(skip) {
        const baseUrl = 'https://dummyjson.com/products';
        const endPoint = `?skip=${skip}`;
        const url = `${baseUrl}${endPoint}`;
        const response = await axios.get(url);
        return response.data;
    }

    async searchProduct(value) {
        const baseUrl = 'https://dummyjson.com/products/search';
        const endPoint = `?q=${value}`;
        const url = `${baseUrl}${endPoint}`;
        const response = await axios.get(url);
        return response.data;
    }

    async getCategoryList() {
        const baseUrl = 'https://dummyjson.com/products/categories';
        const endPoint = ``;
        const url = `${baseUrl}${endPoint}`;
        const response = await axios.get(url);
        return response.data;
    }
}