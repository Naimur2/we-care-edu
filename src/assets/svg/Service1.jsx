import * as React from "react";
import { useSelector } from "react-redux";
const Service1 = (props) => {
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
                fill={isDarkMode ? "#1A1A1A" : "#ECF7F5"}
            />
            <path
                fill={isDarkMode ? "#67BBA9" : "#55B39E"}

                d="M51.333 28.683c-.683-.683-1.866-.216-1.866.734v5.816c0 2.434 2.066 4.45 4.583 4.45 1.583.017 3.783.017 5.667.017.95 0 1.45-1.117.783-1.783-2.4-2.417-6.7-6.767-9.167-9.234Z"
            />
            <path
                fill={isDarkMode ? "#67BBA9" : "#55B39E"}
                d="M59.167 41.983H54.35c-3.95 0-7.167-3.216-7.167-7.166V30c0-.917-.75-1.667-1.666-1.667H38.45c-5.133 0-9.283 3.334-9.283 9.284v14.766c0 5.95 4.15 9.284 9.283 9.284h13.1c5.133 0 9.283-3.334 9.283-9.284V43.65c0-.917-.75-1.667-1.666-1.667Zm-15 12.6H37.5a1.26 1.26 0 0 1-1.25-1.25c0-.683.567-1.25 1.25-1.25h6.667c.683 0 1.25.567 1.25 1.25a1.26 1.26 0 0 1-1.25 1.25Zm3.333-6.666h-10a1.26 1.26 0 0 1-1.25-1.25c0-.684.567-1.25 1.25-1.25h10c.683 0 1.25.566 1.25 1.25a1.26 1.26 0 0 1-1.25 1.25Z"
            />
        </svg>
    )
}
export default Service1
