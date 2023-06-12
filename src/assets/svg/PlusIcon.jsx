import * as React from "react"
import { useSelector } from "react-redux";

const PlusIcon = (props) => {
    const { isDarkMode } = useSelector(state => state.darkMode);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            fill="none"
            {...props}
        >
            <path
                stroke={isDarkMode ? '#FFFFFF' : "#181818"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4.375 14h19.25M14 4.375v19.25"
            />
        </svg>
    )
}
export default PlusIcon
