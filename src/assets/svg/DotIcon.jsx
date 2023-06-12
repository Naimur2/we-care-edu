import * as React from "react"
const DotIcon = ({ dotColor, bgColor, ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={51}
            height={51}
            fill="none"
            {...props}
        >
            <circle cx={25.5} cy={25.5} r={25.5} fill={bgColor} />
            <circle cx={26} cy={25} r={8} fill={dotColor} />
        </svg>
    )
}
export default DotIcon
