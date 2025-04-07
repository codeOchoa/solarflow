// *********************
// Role of the component: Checkbox input component
// Name of the component: Checkbox.jsx
// Developer: Pablo Ochoa
// Version: 1.0
// Component call: <Checkbox text={text} stateValue={stateValue} setStateValue={setStateValue} />
// Input parameters: { text: string, stateValue: any, setStateValue: any }
// Output: checkbox input with label
// *********************

import React from "react";

const Checkbox = ({ text, stateValue, setStateValue }) => {
    return (
        <div className="form-control">
            <label className="cursor-pointer flex items-center">
                <input
                    type="checkbox"
                    checked={stateValue}
                    onChange={() => setStateValue(!stateValue)}
                    className="checkbox checkbox-warning"
                />
                <span className="label-text text-lg ml-2">{text}</span>
            </label>
        </div>
    );
};

export default Checkbox;