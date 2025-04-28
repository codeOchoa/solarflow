// *********************
// Role of the component: Showing stars for the given rating number
// Name of the component: ProductItemRating.jsx
// Developer: Pablo Ochoa
// Version: 1.0
// Component call: <ProductItemRating productRating={productRating} />
// Input parameters: { productRating: number }
// Output: full colored or outlined star icon depending on the element of the rating array("empty star" or "full star") 
// *********************

"use client";

import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductItemRating = ({ rating }) => {
    return (
        <div className="flex text-sm text-yellow-400">
            {[...Array(5)].map((_, i) =>
                i < rating ? (
                    <AiFillStar key={i} />  // className="text-yellow-400 text-xl"
                ) : (
                    <AiOutlineStar key={i} />   // className="text-yellow-400 text-xl"
                )
            )}
        </div>
    );
};


export default ProductItemRating;