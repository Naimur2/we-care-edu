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
                <Stack
                    //justifyContent={'center'}
                    px={{
                        md: 13.5,
                        xs: 2,
                    }}
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            lg: " repeat(2, 1fr) ",
                            md: " repeat(1, 1fr) ",
                            xs: "1fr",
                        },
                        gap: "2rem",
                    }}
                    py={4}
                    pb={8}
                >
                    <Stack
                        width={"100%"}
                        height={"100%"}
                        alignItems={{
                            xs: "center",
                            lg: "flex-start",
                        }}
                    >
                        <Stack
                            justifyContent={"center"}
                            //    alignItems={'center'}
                        >
                            <Stack position={"relative"} zIndex={1}>
                                <Box
                                    sx={{
                                        ":after": {
                                            content: '""',
                                            backgroundImage: `url(${squreShape})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            position: "absolute",
                                            top: {
                                                md: -41,
                                                xs: -20,
                                            },
                                            left: {
                                                md: -40,
                                                xs: -10,
                                            },
                                            width: {
                                                md: 100,
                                                xs: 50,
                                            },
                                            height: {
                                                md: 100,
                                                xs: 50,
                                            },
                                            overflow: "hidden",
                                            zIndex: -1,
                                        },
                                    }}
                                />
                                <Box
                                    //  component={'img'}
                                    // src={contactUsImg}
                                    sx={{
                                        width: {
                                            md: 466,
                                            xs: 359,
                                        },
                                        height: {
                                            md: 424,
                                            xs: 327,
                                        },
                                        borderRadius: "24px",
                                        overflow: "hidden",
                                    }}
                                    //  alt='contactUsImg'
                                >
                                    <LazyLoadImage
                                        alt={"contactUsImg"}
                                        effect="blur"
                                        src={contactUsImg}
                                        width={"100%"}
                                        height={"100%"}
                                    />
                                </Box>
                                {/* right  */}
                                <Box
                                    sx={{
                                        ":after": {
                                            content: '""',
                                            backgroundImage: `url(${squreShape})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            position: "absolute",
                                            bottom: {
                                                md: -41,
                                                xs: -20,
                                            },
                                            left: {
                                                md: -40,
                                                xs: 320,
                                            },
                                            width: {
                                                md: 100,
                                                xs: 50,
                                            },
                                            height: {
                                                md: 100,
                                                xs: 50,
                                            },
                                            overflow: "hidden",
                                            zIndex: -1,
                                            display: {
                                                xs: "block",
                                                sm: "none",
                                            },
                                        },
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                    >
                        <ContactUsForm />
                    </Grid>
                </Stack>

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
                <Box
                    sx={{
                        ":after": {
                            content: '""',
                            position: "absolute",
                            bottom: {
                                md: -150,
                                xs: -80,
                            },
                            left: {
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
                            // background: 'rgba(251, 193, 49, 0.5)',
                            background: isDarkMode ? "#1BE1FF" : "#01DDFF",
                            // backgroundColor: '#FABB1880',
                            zIndex: -1,
                            opacity: 0.4,
                            filter: "blur(150px)",
                        },
                    }}
                />
            </Stack>
        </Stack>
    );
}
