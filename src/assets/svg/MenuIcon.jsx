import * as React from "react"
const MenuIcon = ({ iconColor, ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <path
                stroke={iconColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 7H11M21 12H7M21 17H3"
            />
        </svg>
    )
}
export default MenuIcon
