import * as React from "react";
const LinkdinIcon = (props) => {
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
                fill={isHovered ? "#fff" : "#B5B5B5"}
                opacity={0.15}
                rx={3.5}
            />
            <path
                fill={isHovered ? "#fff" : "#424242"}
                fillRule="evenodd"
                d="M10.265 7.61A2.062 2.062 0 0 0 8.78 8.89c-.099.272-.133.82-.068 1.112.145.659.708 1.266 1.365 1.473.324.102.861.109 1.147.015.366-.12.639-.28.87-.51.284-.284.441-.558.54-.944.277-1.087-.428-2.195-1.547-2.43a1.744 1.744 0 0 0-.823.003Zm8.625 4.682c-.533.088-.912.226-1.31.477-.177.111-.603.517-.733.697l-.079.11v-.414c-.002-.467-.042-.588-.235-.704-.11-.068-.193-.072-1.333-.072-1.153 0-1.22.004-1.335.074-.255.156-.239-.167-.239 4.838 0 4.443.002 4.519.074 4.636.04.066.128.152.194.192.113.069.188.073 1.297.073 1.284 0 1.35-.01 1.49-.213.062-.092.068-.27.086-2.716.02-2.56.022-2.625.101-2.907.193-.679.5-1.101.96-1.315.235-.11.274-.116.674-.115.357 0 .457.014.625.084.56.231.864.734.96 1.59.025.217.04 1.3.04 2.811 0 2.392.002 2.462.074 2.56.152.213.21.221 1.52.221 1.315 0 1.359-.006 1.525-.231.076-.103.077-.128.073-2.82-.003-2.83-.023-3.326-.166-4.034-.178-.882-.465-1.47-.957-1.962-.44-.441-.891-.685-1.515-.82-.377-.082-1.4-.105-1.791-.04Zm-9.51.16a.555.555 0 0 0-.193.192c-.064.12-.067.338-.067 4.652v4.526l.084.125c.165.245.208.252 1.48.252 1.26 0 1.313-.008 1.475-.233l.082-.115v-4.56c0-4.334-.003-4.566-.067-4.661a.687.687 0 0 0-.184-.173c-.11-.066-.194-.07-1.3-.071-1.076 0-1.195.006-1.31.067Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
export default LinkdinIcon;
