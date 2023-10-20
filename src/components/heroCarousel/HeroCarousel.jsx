import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Link } from "@mui/material";
import ContainedButtons from "../../utility/CButton";
import "./herocarousel.css";

const carousalItems = [
    {
        url: "/images/heroCarousal/Picture1.jpg",
    },
    {
        url: "/images/heroCarousal/Picture2.jpg",
    },
    {
        url: "/images/heroCarousal/Picture3.jpg",
    },
    {
        url: "/images/heroCarousal/Picture4.jpg",
    },
    {
        url: "/images/heroCarousal/Picture5.jpg",
    },
    {
        url: "/images/heroCarousal/Picture6.jpg",
    },
    {
        url: "/images/heroCarousal/Picture7.jpg",
    },
    {
        url: "/images/heroCarousal/Picture8.jpg",
    },
    {
        url: "/images/heroCarousal/Picture9.jpg",
    },
    {
        url: "/images/heroCarousal/Picture10.jpg",
    },
    {
        url: "/images/heroCarousal/Picture11.jpg",
    },
    {
        url: "/images/heroCarousal/Picture12.jpg",
    },
];

const HeroCarousel = () => {
    return (
        <div style={{ position: "relative" }}>
            <Carousel
                showArrows={false}
                // stopOnHover
                infiniteLoop
                autoPlay
                showThumbs={false}
            >
                {carousalItems?.map(({ url }, idx) => (
                    <div
                        key={idx.toString() + url}
                        className="carousalItemDivView"
                        style={{
                            backgroundImage: `url(${url})`,
                        }}
                    >
                        {" "}
                        <div className="blur-view"></div>
                        <img
                            className="carousalItemImgView"
                            src={url}
                            alt={`heroCarousel-${idx}`}
                        />
                    </div>
                ))}
            </Carousel>

            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBlock: "3rem",
                }}
            >
                {/* <button type="button">Button</button> */}
                <ContainedButtons href="http://54.164.51.55/" target="_blank">
                    Book an Appointment
                </ContainedButtons>
            </Box>
        </div>
    );
};

export default HeroCarousel;
