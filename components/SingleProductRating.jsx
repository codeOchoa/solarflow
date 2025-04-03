// *********************
// Role of the component: Rating stars component that will display stars on the single product page 
// Name of the component: SingleProductRating.jsx
// Developer: Pablo Ochoa
// Version: 1.0
// Component call: <SingleProductRating rating={rating} />
// Input parameters: { rating: number }
// Output: full colored star icons and outlined star icons depending on the ratingArray element("empty star" or "full star")
// *********************

import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const SingleProductRating = ({ rating }) => {
    const ratingArray = Array(5).fill("empty star");

    for (let i = 0; i < rating; i++) {
        ratingArray[i] = "full star";
    }

    return (
        <div className="flex text-2xl items-center max-[500px]:justify-center">
            {ratingArray.map((singleRating, index) => (
                <React.Fragment key={index}>
                    {singleRating === "full star" ? (
                        <AiFillStar className="text-custom-yellow" />
                    ) : (
                        <AiOutlineStar className="text-custom-yellow" />
                    )}
                </React.Fragment>
            ))}
            <span className="text-xl ml-1">(3 reviews)</span>
        </div>
    );
};

export default SingleProductRating;