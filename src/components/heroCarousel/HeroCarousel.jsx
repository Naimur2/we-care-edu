import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ContainedButtons from "../../utility/CButton";
import "./herocarousel.css";
import images from "./images.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroCarousel = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel
        showArrows={false}
        // stopOnHover
        infiniteLoop
        autoPlay
        showThumbs={false}
        swipeable={false}
      >
        {images?.map(({ url, size, srcset, si }, idx) => {
          const imageBaseUrl = "/images/carousel/" + si + "/";
          const backgroundUrl = imageBaseUrl + url;

          const srcsetUrls = srcset.map((src) => {
            const width = src.split("w_")[1].split(".")[0];
            return imageBaseUrl + src + " " + width + "w";
          });
          return (
            <div
              key={idx.toString() + url}
              className="carousalItemDivView"
              style={{
                backgroundImage: `url(${backgroundUrl})`,
              }}
            >
              {" "}
              <div className="blur-view"></div>
              <img
                className="carousalItemImgView"
                src={backgroundUrl}
                alt={`heroCarousel-${idx}`}
                srcSet={srcsetUrls.join(", ")}
                sizes={size}
              />
            </div>
          );
        })}
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
