import * as React from "react";
const SvgComponent = (props) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseOver = (e) => {
        setIsHovered(true);
    };

    const handleMouseOut = (e) => {
        setIsHovered(false);
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            fill="none"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            {...props}
        >
            <rect
                width={32}
                height={32}
                fill={isHovered ? "#fff" : "#B5B5B5"}
                opacity={0.15}
                rx={4}
            />
            <path
                fill={isHovered ? "#fff" : "#424242"}
                d="M24.28 10.862a6.797 6.797 0 0 1-1.953.536 3.406 3.406 0 0 0 1.495-1.88 6.822 6.822 0 0 1-2.158.824 3.397 3.397 0 0 0-5.788 3.099 9.647 9.647 0 0 1-7.003-3.55 3.384 3.384 0 0 0-.459 1.708c0 1.178.599 2.218 1.511 2.829a3.395 3.395 0 0 1-1.54-.426v.043a3.402 3.402 0 0 0 2.725 3.332 3.4 3.4 0 0 1-1.535.056 3.405 3.405 0 0 0 3.174 2.361 6.81 6.81 0 0 1-5.028 1.405 9.599 9.599 0 0 0 5.207 1.527c6.25 0 9.666-5.176 9.666-9.665 0-.147-.003-.295-.009-.44a6.908 6.908 0 0 0 1.695-1.759Z"
            />
        </svg>
    );
};
export default SvgComponent;
