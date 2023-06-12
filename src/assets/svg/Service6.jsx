import * as React from "react";
import { useSelector } from "react-redux";
const Service6 = (props) => {
    const { isDarkMode } = useSelector(state => state.darkMode);
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={90}
            height={90}
            fill="none"
            {...props}
        >
            <circle cx={45} cy={45} r={45}
                fill={isDarkMode ? "#171717" : "#FFEAF4"}
            />
            <path
                fill={isDarkMode ? "#FB3EA3" : "#FA2596"}

                d="m58.048 39.5-7.55-7.55a7.917 7.917 0 0 0-6-2.317l-8.332.4a6.44 6.44 0 0 0-6.15 6.117l-.4 8.332a7.98 7.98 0 0 0 2.317 6l7.55 7.55c3.1 3.1 8.133 3.1 11.249 0l7.316-7.316c3.117-3.084 3.117-8.117 0-11.217Zm-17.215 6.132a4.801 4.801 0 0 1 0-9.6 4.801 4.801 0 0 1 0 9.6Z"
            />
        </svg>
    )
}
export default Service6
