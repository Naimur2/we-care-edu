import { Box, Stack } from "@mui/material";
import React from "react";
import subscribeArrow from "../../assets/images/subscribeArrow.svg";
import fingirPrint from "../../assets/images/fingirPrint2.svg";
import { CButton, CTypography } from "../../utility";

export default function Subscribe({ isDarkMode }) {
    return (
        <Stack
            justifyContent={"center"}
            alignItems={"center"}
            py={8}
            mt={"-17rem"}
            px={{
                xs: 2,
                sm: 0,
            }}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
        >
            <Stack
                sx={{
                    display: "inline-block",
                    width: {
                        md: "85%",
                        xs: "100%",
                    },
                    backgroundColor: isDarkMode ? "#222222" : "#FFFFFF",
                    borderRadius: "16px",
                    py: 8,
                    position: "relative",
                    zIndex: 1,
                }}
                justifyContent={"center"}
                alignItems={"center"}
                overflow={"hidden"}
            >
                <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    position={"relative"}
                >
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

                    <CTypography
                        color={isDarkMode ? "#fff" : "#181818"}
                        fontSize={{
                            md: 36,
                            xs: 18,
                        }}
                        fontWeight={700}
                        align={"center"}
                        pb={4}
                    >
                        Get Latest Information and Offers <br />
                        Alert on your Phone
                    </CTypography>
                    {/* subscribe arrow */}

                    <Box
                        component={"form"}
                        position={"relative"}
                        px={{
                            md: 0,
                            xs: 2,
                        }}
                        sx={{
                            ":after": {
                                content: '""',
                                // display: 'block',
                                backgroundImage: `url(${subscribeArrow})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "absolute",
                                left: -200,
                                top: -50,
                                width: 100,
                                height: 50,
                                display: {
                                    xs: "none",
                                    lg: "block",
                                },
                            },
                            display: "grid",
                            gridTemplateColumns: "2fr 1fr",
                        }}
                    >
                        <input
                            id="useremail"
                            type="email"
                            placeholder="abe@gmail.com"
                            required
                            style={{
                                borderRadius: "10px",
                                paddingLeft: "15px",
                                paddingRight: "25px",
                                //  width: '20rem',
                                backgroundColor: isDarkMode
                                    ? "#222222"
                                    : "#fff",
                                height: "60px",
                                border: "1px solid #717171",
                                fontFamily: "Plus Jakarta Sans",
                                fontSize: 16,
                                color: isDarkMode ? "#fff" : "#191919",
                                width: "100%",
                            }}
                            className="subscribe-input"
                        />
                        <CButton
                            sx={{
                                ml: "-1rem",
                            }}
                            btnTitle={"Send"}
                        />
                    </Box>
                </Stack>

                {/* dot img  */}
                <Box
                    sx={{
                        ":after": {
                            content: '""',
                            // display: 'block',
                            backgroundImage: `url(${fingirPrint})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            width: {
                                lg: 191,
                                xs: 74,
                            },
                            height: {
                                lg: 200,
                                xs: 77,
                            },
                            display: {
                                xs: "none",
                                sm: "block",
                            },
                            mixBlendMode: "multiply",
                        },
                    }}
                />
            </Stack>
        </Stack>
    );
}
