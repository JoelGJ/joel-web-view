import axios from "axios";
import React from "react";

export default class WebServer {
    async getProducts() {
        const baseUrl = 'https://dummyjson.com/products';
        const endPoint = '';
        const url = `${baseUrl}${endPoint}`;
        const response = await axios.get(url);
        return response.data;
    }
}