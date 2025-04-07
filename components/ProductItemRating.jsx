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

import { nanoid } from "nanoid";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductItemRating = ({ productRating }) => {
  // Setting rating with all empty stars by default
  const rating = ["empty star", "empty star", "empty star", "empty star", "empty star"];

  // Going through product rating and modifying rating state
  for (let i = 0; i < productRating; i++) {
    rating[i] = "full star";
  }

  return (
    <div className="flex">
      {rating.map((singleRating) => (
        <div key={nanoid()}>
          {singleRating === "full star" ? (
            <AiFillStar className="text-yellow-400 text-xl" />
          ) : (
            <AiOutlineStar className="text-yellow-400 text-xl" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductItemRating;