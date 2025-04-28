// *********************
// Role of the component: Custom button component
// Name of the component: CustomButton.jsx
// Developer: Pablo Ochoa
// Version: 1.0
// Component call: <CustomButton paddingX={paddingX} paddingY={paddingY} text={text} buttonType={buttonType} customWidth={customWidth} textSize={textSize} />
// Input parameters: CustomButtonProps interface
// Output: custom button component
// *********************

import React from "react";

const CustomButton = ({ paddingX, paddingY, text, buttonType, customWidth, textSize }) => {
    return (
        <button
            type={buttonType}
            className={`${customWidth !== "no" ? `w-${customWidth}` : ""} uppercase bg-white px-${paddingX} py-${paddingY} text-${textSize} border border-black border-gray-300 font-bold text-blue-600 shadow-sm hover:bg-black hover:bg-gray-100 focus:outline-none focus:ring-2`}
        >
            {text}
        </button>
    );
};

export default CustomButton;