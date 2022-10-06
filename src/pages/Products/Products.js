import Header from "../../components/Header";
import ProductsHeader from "./components/ProductsHeader";
import React, { useEffect, useState } from "react";
import { getProducts } from "./services/products";
import ProductsList from "./components/ProductsList";

const Products = () => {
    const [products,  setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(response => setProducts(response.data))
    }, []);

    return (
        <div className="page">
            <Header />
            
            <div className="products-wrap">
                <ProductsHeader />
                <div className="products-list">
                    <ProductsList products={products} />
                </div>
            </div>

        </div>
    );
}

export default Products;