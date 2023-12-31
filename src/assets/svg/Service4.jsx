import * as React from "react";
import { useSelector } from "react-redux";
const Service4 = (props) => {
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
                fill={isDarkMode ? "#171717" : "#FDEDEF"}
            />
            <path
                fill={isDarkMode ? "#F38594" : "#F16E80"}
                d="M51.667 32.083a3.756 3.756 0 0 1-3.75 3.75h-5.834a3.729 3.729 0 0 1-2.65-1.1 3.729 3.729 0 0 1-1.1-2.65 3.756 3.756 0 0 1 3.75-3.75h5.834c1.033 0 1.966.417 2.65 1.1a3.728 3.728 0 0 1 1.1 2.65Z"
            />
            <path
                fill={isDarkMode ? "#F38594" : "#F16E80"}
                d="M56.383 33.383a4.713 4.713 0 0 0-1.283-.75c-.483-.183-.967.2-1.067.7a6.228 6.228 0 0 1-6.116 5h-5.834a6.203 6.203 0 0 1-4.416-1.833 6.166 6.166 0 0 1-1.7-3.15c-.1-.5-.6-.9-1.084-.7-1.933.783-3.216 2.55-3.216 6.1V55c0 5 2.983 6.667 6.666 6.667h13.334c3.683 0 6.666-1.667 6.666-6.667V38.75c0-2.717-.75-4.383-1.95-5.367Zm-18.05 12.034H45c.683 0 1.25.566 1.25 1.25a1.26 1.26 0 0 1-1.25 1.25h-6.667a1.26 1.26 0 0 1-1.25-1.25c0-.684.567-1.25 1.25-1.25Zm13.334 9.166H38.333a1.26 1.26 0 0 1-1.25-1.25c0-.683.567-1.25 1.25-1.25h13.334c.683 0 1.25.567 1.25 1.25a1.26 1.26 0 0 1-1.25 1.25Z"
            />
        </svg>
    )
}
export default Service4
