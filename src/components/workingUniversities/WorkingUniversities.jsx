import { Box, Stack } from "@mui/material";
import React from "react";
import line from "../../assets/images/line.svg";
import university1 from "../../assets/images/university1.png";
import university2 from "../../assets/images/university2.png";
import university3 from "../../assets/images/university3.png";
import university4 from "../../assets/images/university4.png";
import university5 from "../../assets/images/university5.png";
import university6 from "../../assets/images/university6.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
import { CButton, CTypography } from "../../utility";

const universities = [
    {
        id: 1,
        name: "Bay Atlantic University ",
        bio: "Bay Atlantic University is a Washington DC based private, non-profit University that offers the very best in...",
        image: university1,
    },
    {
        id: 2,
        name: "California State University ",
        bio: "California State University, Northridge offers great value for students seeking a vibrant and diverse university...",
        image: university2,
    },
    {
        id: 3,
        name: "Columbus State University ",
        bio: "Columbus State University is a public university in Columbus, Georgia. Founded as Columbus College in...",
        image: university3,
    },
    {
        id: 4,
        name: "Ohio State University ",
        bio: "The Ohio State University, commonly called Ohio State or OSU, is a public land-grant research university in...",
        image: university4,
    },
    {
        id: 5,
        name: "North South University ",
        bio: "North South University is a private university based in Dhaka, Bangladesh. Its business school is the first...",
        image: university5,
    },
    {
        id: 6,
        name: "Texas A&M University Commerce ",
        bio: `Texas A&M University–Commerce is a public university in Commerce, Texas. With an enrollment of over...`,
        image: university6,
    },
];

export default function WorkingUniversities() {
    const { isDarkMode } = useSelector((state) => state.darkMode);

    return (
        <Stack component={"section"}>
            <Stack
                component={"div"}
                className="container"
                py={8}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                >
                    <CTypography
                        color={isDarkMode ? "#fff" : "#181818"}
                        fontSize={{
                            xs: 24,
                            md: 48,
                        }}
                        fontWeight={700}
                        text="Working with Universities"
                        align={"center"}
                    />
                    <Box
                        component={"img"}
                        src={line}
                        sx={{
                            width: {
                                md: 283,
                                xs: 105,
                            },
                            height: {
                                md: 15,
                                xs: 8,
                            },
                            ml: {
                                md: 40,
                                xs: 22,
                            },
                        }}
                    />
                </Box>
                <Stack
                    // direction="row"
                    // justifyContent="center"
                    // flexWrap="wrap"
                    // gap={2}
                    py={{
                        md: "5.5rem",
                        xs: "3rem",
                    }}
                    // pt={8}
                    // pb={4}
                    //spacing={4}
                    justifyContent={"center"}
                    // px={{
                    //     lg: 13.5,
                    //     xs: 2,
                    // }}
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            lg: " repeat(3, 1fr) ",
                            md: " repeat(2, 1fr) ",
                            xs: "1fr",
                        },
                        gap: "2rem",
                    }}
                >
                    {universities.map((item, index) => (
                        <div
                            className=""
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            key={item.id}
                            data-aos-delay={index * 100}
                        >
                            <Stack
                                width={"100%"}
                                height={"100%"}
                                sx={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                className="hover-scale"
                            >
                                <Stack
                                    sx={{
                                        display: "inline-block",
                                        width: 376,
                                        height: 327,
                                        boxShadow: isDarkMode
                                            ? "0px 8px 56px rgba(0, 0, 0, 0.08)"
                                            : "0px 8px 56px rgba(0, 0, 0, 0.08)",
                                        boxSizing: "border-box",
                                        backgroundColor: isDarkMode
                                            ? "#0D0D0D"
                                            : "#FFFFFF",
                                        borderRadius: "16px",
                                        py: 1,
                                    }}
                                >
                                    <Stack
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                    >
                                        <Box
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            sx={{
                                                width: 356,
                                                height: 167,
                                                /// backgroundColor: '#D8F2FF',
                                                borderRadius: "12px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <LazyLoadImage
                                                alt={item?.name}
                                                effect="blur"
                                                src={item?.image}
                                                width={"100%"}
                                                height={"100%"}
                                            />
                                        </Box>
                                    </Stack>
                                    <Stack p={2} gap={2}>
                                        <CTypography
                                            color={
                                                isDarkMode ? "#fff" : "#181818"
                                            }
                                            fontSize={{
                                                md: 20,
                                                xs: 16,
                                            }}
                                            fontWeight={600}
                                            text={item.name}
                                            //align={'center'}
                                        />
                                        <CTypography
                                            color={
                                                isDarkMode
                                                    ? "#868686"
                                                    : "#6B6B6B"
                                            }
                                            fontSize={{
                                                md: 16,
                                                xs: 14,
                                            }}
                                            fontWeight={400}
                                            text={item.bio}
                                        />
                                    </Stack>
                                </Stack>
                            </Stack>
                        </div>
                    ))}
                </Stack>
                <Stack pt={2}>
                    <CButton
                        btnTitle={"See More"}
                        fontSize={{
                            md: 20,
                            xs: 16,
                        }}
                    />
                </Stack>
            </Stack>
        </Stack>
    );
}
