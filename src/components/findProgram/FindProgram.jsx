import { Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import fingirPrint from "../../assets/images/fingirPrint.svg";
import line from "../../assets/images/line.svg";
import { CButton, CTypography } from "../../utility";
const programs = [
    "Global Business Administration",
    "Global Hospitality Management",
    "Global Business Administration",
    "Global Mechanical Design Engineering",
    "Global IT Engineering",
    "Global Business Studies",
    "Integrated Business Administration",
    "Tourism Management",
    "English Language & Literature",
    "Public Administration",
    "Tourism Management",
    "Mathematics",
    "Fashion & Textiles",
    "Physical education",
    "Architectural Engineering",
    "Civil Engineering",
    "Electronic Engineering",
    "Urban Planning & Landscape",
    "Computer Engineering",
    "Naval Architecture and Offshore Engineering",
    "ICT Integrated Ocean Smart Cities Engineering",
    "International Studies",
    "International Engineering and Science",
    "English Education",
    "Electronic Information Materials Engineering",
    "Nano Convergence Engineering",
    "Global Business",
    "Computer Science & Engineering",
    "Information Security",
    "Global Business Administration",
    "Global Media and Communication Program",
    "Global Economics",
    "Global Business Administration",
    "Global Hospitality & Tourism Management",
    "Computer Engineering",
    "Global Applied Music",
    "Business Administration",
    "Computer Science and Engineering",
    "Artificial Intelligence Programming",
    "Architecture Engineering",
    "Civil and Environment Engineering",
    "Nanotechnology and Advanced Engineering",
    "Hospitality Management",
    "Computer Science Engineering",
    "Hospitality Management",
];
export default function FindProgram() {
    const { isDarkMode } = useSelector((state) => state.darkMode);
    const [selected, setSelected] = React.useState("");
    const [dataCount, setDataCount] = React.useState(10);

    const handleSeeMoreOrLess = () => {
        if (programs?.length !== dataCount) {
            setDataCount((prev) => {
                if (prev + 6 <= programs?.length) {
                    return prev + 6;
                } else if (prev + 6 >= programs?.length) {
                    return programs?.length;
                }
                return prev;
            });
        } else {
            setDataCount(6);
        }
    };

    return (
        <Stack
            sx={{
                position: "relative",
                backgroundColor: isDarkMode ? "#141414" : "#F3FCFD",
                zIndex: 1,
                overflow: "hidden",
                pb: 8,
            }}
        >
            <Stack component={"div"} className="container">
                <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    py={4}
                    position="relative"
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
                            text="Find a program"
                            align={"center"}
                        />
                        <Box
                            component={"img"}
                            src={line}
                            sx={{
                                width: {
                                    md: 198,
                                    xs: 90,
                                },
                                height: {
                                    md: 15,
                                    xs: 8,
                                },
                                ml: {
                                    md: 20,
                                    xs: 10,
                                },
                            }}
                        />
                    </Box>
                    <CTypography
                        color={isDarkMode ? "#868686" : "#363636"}
                        fontSize={16}
                        fontWeight={400}
                        align={"center"}
                        py={2}
                        px={{
                            xs: 4,
                            sm: 0,
                        }}
                    >
                        WeCare Education offers a comprehensive range of
                        programs, from admissions support to visa assistance, to
                        ensure a smooth and stress-free application process for
                        our students.
                    </CTypography>
                    <Box
                        sx={{
                            ":after": {
                                content: '""',
                                // display: 'block',
                                backgroundImage: `url(${fingirPrint})`,
                                backgroundRepeat: "no-repeat",
                                mixBlendMode: "multiply",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "absolute",
                                bottom: -65,
                                right: 55,
                                width: 140,
                                height: 180,
                                overflow: "hidden",
                                zIndex: -1,
                                display: {
                                    xs: "none",
                                    lg: "block",
                                },
                            },
                        }}
                    />
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                    flexWrap="wrap"
                    sx={{
                        gap: {
                            md: 2,
                            xs: 1,
                        },
                    }}
                >
                    {programs?.slice(0, dataCount)?.map((item) => (
                        <Stack
                            key={Math.random() * 1000 + 1 + item.toString()}
                            sx={{
                                display: "inline-block",
                                //minWidth: '200px',
                                cursor: "pointer",
                                px: {
                                    md: 4,
                                    xs: 1,
                                },
                                py: {
                                    md: 2,
                                    xs: 1,
                                },
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderColor: "transparent",
                                boxShadow: isDarkMode
                                    ? "0px 8px 56px rgba(0, 0, 0, 0.08)"
                                    : "0px 8px 56px rgba(0, 0, 0, 0.08)",
                                boxSizing: "border-box",
                                backgroundColor: isDarkMode
                                    ? "#0D0D0D"
                                    : "#FFFFFF",
                                borderRadius: "10px",
                                ":is(:hover,:focus)": {
                                    border: isDarkMode
                                        ? "1px solid #00A6C0"
                                        : "1px solid #0090A6",
                                },
                            }}
                            onClick={() => setSelected(item)}
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                        >
                            <CTypography
                                color={isDarkMode ? "#fff" : "#181818"}
                                fontSize={{
                                    md: 16,
                                    xs: 8,
                                }}
                                fontWeight={600}
                                text={item}
                                align={"center"}
                            />
                        </Stack>
                    ))}
                </Stack>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "12px 0 0 0",
                    }}
                >
                    <Stack pt={4}>
                        <CButton
                            onClick={handleSeeMoreOrLess}
                            btnTitle={
                                programs?.length !== dataCount
                                    ? "See More"
                                    : "See Less"
                            }
                            fontSize={{
                                md: 20,
                                xs: 16,
                            }}
                        />
                    </Stack>
                </Box>
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
                                ? " rgba(251, 193, 49, 0.5)"
                                : " rgba(250, 187, 24, 0.5)",
                            borderRadius: "50%",

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

                            background: isDarkMode ? "#1BE1FF" : "#01DDFF",
                            borderRadius: "50%",

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
