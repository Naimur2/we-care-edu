import * as React from "react";
const FacebookIcon = (props) => {
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
                width={31}
                height={31}
                x={0.5}
                y={0.5}
                stroke={isHovered ? "#fff" : "#B5B5B5"}
                opacity={0.15}
                rx={3.5}
            />
            <path
                fill={isHovered ? "#fff" : "#424242"}
                fillRule="evenodd"
                d="M17.45 6.43c-.994.158-1.693.5-2.266 1.108-.482.513-.784 1.114-.954 1.906-.064.299-.072.48-.086 1.888l-.014 1.557h-2.724v3.166l1.356.009 1.355.009.009 4.063.009 4.062h3.246v-8.143h1.347c.74 0 1.347-.003 1.348-.008.09-.634.398-3.114.388-3.132-.007-.014-.705-.026-1.55-.026h-1.538l.012-1.296c.011-1.268.013-1.301.093-1.503.162-.408.502-.649 1.01-.715.14-.019.67-.034 1.178-.035h.924l-.009-1.419-.009-1.418-.449-.04c-.736-.068-2.332-.087-2.676-.033Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default FacebookIcon;
