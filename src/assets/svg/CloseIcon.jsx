import * as React from "react"

const CloseIcon = (props) => (
    <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10ZM6.836 6.836a.934.934 0 0 1 1.324 0l1.836 1.836 1.836-1.836a.937.937 0 0 1 1.324 1.324L11.32 9.996l1.836 1.836a.937.937 0 0 1-1.324 1.324L9.996 11.32 8.16 13.156a.937.937 0 0 1-1.324-1.324l1.836-1.836L6.836 8.16a.934.934 0 0 1 0-1.324Z"
            fill={props?.fill || "#fff"}
        />
    </svg>
)

export default CloseIcon