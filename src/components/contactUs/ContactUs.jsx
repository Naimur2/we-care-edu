import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import contactUsImg from "../../assets/images/contactUsImg.png";
import squreShape from "../../assets/images/squreShape.svg";
import line from "../../assets/images/line.svg";
import { CTypography } from "../../utility";
import ContactUsForm from "../inputForm/ContactUsForm";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ContactUs() {
  const { isDarkMode } = useSelector((state) => state.darkMode);

  return (
    <Stack
      bgcolor={isDarkMode ? "#141414" : "#F3FCFD"}
      id={"contact"}
      pt={8}
      position={"relative"}
      zIndex={1}
      overflow={"hidden"}
      component={"section"}
    >
      <Stack component={"div"} className="container">
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          pb={4}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <Box>
            <CTypography
              color={isDarkMode ? "#fff" : "#181818"}
              fontSize={{
                xs: 24,
                md: 48,
              }}
              fontWeight={700}
              text="Contact Us"
              align={"center"}
            />
            <Box
              component={"img"}
              src={line}
              sx={{
                width: {
                  md: 199,
                  xs: 79,
                },
                ml: 2,
                height: {
                  md: 15,
                  xs: 6,
                },
              }}
            />
          </Box>
        </Stack>

        <ContactUsForm />

        {/* right color */}
        <Box
          sx={{
            ":after": {
              content: '""',
              position: "absolute",
              top: {
                md: -150,
                xs: -80,
              },
              right: {
                md: -150,
                xs: -80,
              },
              height: {
                md: 298,
                xs: 161,
              },
              width: {
                md: 298,
                xs: 161,
              },
              background: isDarkMode
                ? "rgba(251, 193, 49, 0.5)"
                : " rgba(250, 187, 24, 0.5)",
              // backgroundColor: '#FABB1880',
              opacity: 0.4,
              filter: "blur(150px)",
            },
          }}
        />
        {/* left color */}
      </Stack>
    </Stack>
  );
}
