import * as React from "react"
const QuoteIcon = ({ qouteColor, ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={59}
            height={55}
            fill="none"
            {...props}
        >
            <path
                fill={qouteColor}
                d="M23.646 28.302h-10.88c0-8.19 2.473-14.041 10.88-16.883V.387C9.964 2.225-.257 13.76.238 28.47v25.575h23.408V28.302Zm35.111 0h-10.88c0-8.19 2.473-14.041 10.88-16.883V.387C45.075 2.225 34.855 13.76 35.35 28.47v25.575h23.407V28.302Z"
            />
        </svg>
    )
}
export default QuoteIcon
