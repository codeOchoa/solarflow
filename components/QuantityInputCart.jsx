// *********************
// Role of the component: Quantity input for incrementing and decrementing product quantity on the cart page
// Name of the component: QuantityInputCart.jsx
// Developer: Pablo Ochoa
// Version: 1.0
// Component call: <QuantityInputCart product={product} />
// Input parameters: { product: ProductInCart }
// Output: one number input and two buttons
// *********************

"use client";

import { useProductStore } from "@/app/_zustand/store";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const QuantityInputCart = ({ product }) => {
    const [quantityCount, setQuantityCount] = useState(product.amount);
    const { updateCartAmount, calculateTotals } = useProductStore();

    const handleQuantityChange = (actionName) => {
        if (actionName === "plus") {
            const newQty = quantityCount + 1;
            setQuantityCount(newQty);
            updateCartAmount(product.id, newQty);
            calculateTotals();
        } else if (actionName === "minus" && quantityCount !== 1) {
            const newQty = quantityCount - 1;
            setQuantityCount(newQty);
            updateCartAmount(product.id, newQty);
            calculateTotals();
        }
    };

    return (
        <div>
            <label htmlFor="Quantity" className="sr-only">
                Quantity
            </label>

            <div className="flex items-center justify-center rounded border border-gray-200 w-32">
                <button
                    type="button"
                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75 flex items-center justify-center"
                    onClick={() => handleQuantityChange("minus")}
                >
                    <FaMinus />
                </button>

                <input
                    type="number"
                    id="Quantity"
                    disabled
                    value={quantityCount}
                    className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />

                <button
                    type="button"
                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75 flex items-center justify-center"
                    onClick={() => handleQuantityChange("plus")}
                >
                    <FaPlus />
                </button>
            </div>
        </div>
    );
};

export default QuantityInputCart;