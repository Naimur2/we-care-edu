import { Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/images/logo.png";
import { CTypography } from "../../utility";
import Subscribe from "../subscribe/Subscribe";
const link = [
    {
        id: 1,
        name: "Home",
        link: "#",
    },
    {
        id: 2,
        name: "About Us",
        link: "#aboutUs",
    },
    {
        id: 3,
        name: "FAQs",
        link: "#faqs",
    },
    {
        id: 4,
        name: "Testimonials",
        link: "#testimonial",
    },
];
export default function Footer() {
    const { isDarkMode } = useSelector((state) => state.darkMode);
    const [selected, setSelected] = React.useState(0);
    const currentYear = new Date().getFullYear();
    return (
        <Stack
            component={"footer"}
            sx={{
                backgroundColor: isDarkMode ? "0D0D0D" : "#181818",
                // minHeight: 528
                py: 6,
                position: "relative",
                zIndex: 1,
                mt: "17rem",
            }}
        // className="container"
        >
            <Stack component={"div"} className="container">
                <Subscribe isDarkMode={isDarkMode} />
                <Stack
                    px={{
                        md: 13.5,
                        xs: 2,
                    }}
                    spacing={4}
                >
                    <Stack
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        direction={{
                            xs: "column",
                            md: "row",
                        }}
                        pt={4}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                            component={"a"}
                            href={"/"}
                        >
                            <Box
                                component={"img"}
                                src={logo}
                                alt={"logo"}
                                sx={{
                                    width: 64,
                                    height: 64,
                                }}
                            />
                            <Box
                                sx={{
                                    width: "1.5px",
                                    height: "2.5rem",
                                    //   backgroundColor: isDarkMode ? "#ffffff70" : "#18181850",
                                    backgroundColor: "#ffffff70",
                                }}
                            />
                            <CTypography
                                // color={isDarkMode ? "#fff" : "#181818"}
                                color={"#fff"}
                                fontSize="0.85rem"
                                fontWeight={700}
                                text="WeCare Education"
                                align={"center"}
                                sx={{
                                    maxWidth: "10ch",
                                }}
                            />
                        </Box>
                        <Stack
                            direction={{
                                xs: "column",
                                md: "row",
                            }}
                            spacing={2}
                        >
                            {link.map((item, index) => (
                                <CTypography
                                    key={index}
                                    color={
                                        selected === index
                                            ? "#fff"
                                            : isDarkMode
                                                ? "#868686"
                                                : "#808080"
                                    }
                                    fontSize={16}
                                    fontWeight={600}
                                    text={item.name}
                                    align={"center"}
                                    component={"a"}
                                    href={item.link}
                                    onClick={() => setSelected(index)}
                                    sx={{
                                        cursor: "pointer",
                                        ":hover": {
                                            color: "#fff",
                                        },
                                    }}
                                />
                            ))}
                        </Stack>
                    </Stack>

                    <Box
                        sx={{
                            border: ".5px solid rgba(255, 255, 255, 0.16)",
                        }}
                    />
                    <Stack
                        direction={{
                            xs: "column",
                            md: "row",
                        }}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        gap={2}
                    >
                        <CTypography
                            color="#ffffff60"
                            fontSize={{
                                md: 20,
                                xs: 16,
                            }}
                            textAlign={{
                                xs: "center",
                                md: "left",
                            }}
                            fontWeight={400}
                            text={`${currentYear} WeCare Education, Inc. All rights reserved.`}
                        />
                        <div
                            className="flex gap-4 items-center"
                        >
                            <a
                                href="https://www.facebook.com/wecareeducationconsultant"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    style={{ width: "32px", height: "32px" }}
                                    src="/images/icon/fb_icon.svg"
                                    alt="facebook"
                                />
                            </a>

                            <a
                                href="https://www.youtube.com/channel/UCUQHWe4yYa-3h7slAgcwAEg"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    style={{ width: "32px", height: "32px" }}
                                    src="/images/icon/youtube_icon.svg"
                                    alt="youtube"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/md-iftekhar-rahman-2a5091297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    style={{ width: "32px", height: "32px" }}
                                    src="/images/icon/linkedin.svg"
                                    alt="linkedin"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/wecare_education2145/?igshid=MTk0NTkyODZkYg%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    style={{ width: "32px", height: "32px" }}
                                    src="/images/icon/instagram.svg"
                                    alt="instagram"
                                />
                            </a>
                        </div>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}
