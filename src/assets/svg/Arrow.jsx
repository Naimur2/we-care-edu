import React from "react";

export default function Arrow({ color = "#00A6C0" }) {
    return (
        <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.1875 7H15.8125"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M11.875 3.0625L15.8125 7L11.875 10.9375"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}
