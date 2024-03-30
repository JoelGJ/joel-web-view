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
}