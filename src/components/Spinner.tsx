import React from "react";

const Spinner = ({ size = "8", color = "border-gray-500" }) => {
    return (
        <div className={`flex items-center justify-center`}>
            <div
                className={`w-${size} h-${size} border-4 border-t-transparent ${color} rounded-full animate-spin`}
            ></div>
        </div>
    );
};

export default Spinner;
