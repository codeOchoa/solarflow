// *********************
// Role of the component: Range input for price intented to be on the shop page
// Name of the component: Range.jsx
// Developer: Pablo Ochoa
// Version: 1.0
// Component call: <Range min={min} max={max} priceValue={priceValue} setInputCategory={setInputCategory} />
// Input parameters: RangeProps interface
// Output: range input with current range price
// *********************

"use client";

import React, { useState } from 'react';

const Range = ({ min, max, priceValue, setInputCategory }) => {
    const [currentRangeValue, setCurrentRangeValue] = useState(priceValue);

    const handleRange = (e) => {
        setCurrentRangeValue(parseInt(e.target.value));
    };

    return (
        <div>
            <input
                type="range"
                min={min}
                max={max}
                value={priceValue}
                onChange={handleRange}
                className="range range-warning"
            />
            <span>{`Max price: $${currentRangeValue}`}</span>
        </div>
    );
};

export default Range;