// *********************
// Role of the component: products section intended to be on the home page
// Name of the component: ProductsSection.jsx
// Developer: Pablo Ochoa
// Version: 1.0
// Component call: <ProductsSection slug={slug} />
// Input parameters: no input parameters
// Output: products grid
// *********************

"use client";

import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Heading from "./ui/Heading";
import { getAllProducts } from "@/utils/firebaseService";

const ProductsSection = () => {
    // Sending API request for getting all products
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getAllProducts();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div className="bg-blue-500 border-t-4 border-white">
            <div className="max-w-screen-2xl mx-auto pt-20">
                <Heading title="FEATURED PRODUCTS" />
                <div className="grid grid-cols-4 justify-items-center max-w-screen-2xl mx-auto py-10 gap-x-2 px-10 gap-y-8 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} color="white" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsSection;