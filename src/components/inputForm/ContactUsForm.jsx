import { Box, Stack } from "@mui/material";
import React from "react";
import "./ContactUs.css";
import telephone from "../../assets/svg/telephone.svg";
import sms from "../../assets/svg/sms.svg";
import building from "../../assets/svg/bulding.svg";
import { useSelector } from "react-redux";

const ContactUsCard = ({ title, description1, description2, icon }) => {
    const { isDarkMode } = useSelector((state) => state.darkMode);
    return (
        <Box
            className="contact-us-card"
            sx={{
                gap: {
                    xs: "1rem",
                    md: "2rem",
                },
            }}
        >
            <Box
                className="contact-us-card__icon"
                sx={{
                    height: {
                        xs: "3.5rem",
                        md: "4rem",
                    },
                    width: {
                        xs: "3.5rem",
                        md: "4rem",
                    },
                }}
            >
                <Box
                    src={icon}
                    alt=""
                    sx={{
                        width: {
                            xs: "1.5rem",
                            md: "2rem",
                        },
                        height: {
                            xs: "1.5rem",
                            md: "2rem",
                        },
                        objectFit: "contain",
                        color: isDarkMode ? "white" : "black",
                    }}
                    component={"img"}
                />
            </Box>
            <Box
                className="contact-us-card__details"
                sx={{
                    gap: {
                        xs: "0.5rem",
                        md: "1rem",
                    },
                }}
            >
                <Box
                    className="contact-us-card__title"
                    sx={{
                        color: isDarkMode ? "white" : "black",
                        fontSize: {
                            xs: "1.2rem",
                            md: "1.5rem",
                        },
                    }}
                    component={"h2"}
                >
                    {title}
                </Box>
                <div
                    className="contact-us-card__description"
                    style={{ color: isDarkMode ? "white" : "black" }}
                >
                    <Box
                        component={"p"}
                        sx={{
                            maxWidth: "70ch",
                            fontSize: {
                                xs: "0.85rem",
                                md: "1.2rem",
                            },
                        }}
                    >
                        {description1}
                    </Box>
                    {description2 && (
                        <Box
                            component={"p"}
                            sx={{
                                maxWidth: "70ch",
                                fontSize: {
                                    xs: "0.85rem",
                                    md: "1.2rem",
                                },
                            }}
                        >
                            {description2}
                        </Box>
                    )}
                </div>
            </Box>
        </Box>
    );
};

const data = [
    {
        title: "Call Now:",
        description1: "+880 1957-709434",
        description2: "+8201034428338",
        icon: telephone,
    },
    {
        title: "Email:",
        description1: "wecareeducation2145@gmail.com",
        icon: sms,
    },
    {
        title: "Dhaka Office:",
        description1: "Tropical Manco Tower (3rd Floor), T-111, T-112",
        description2: "Gulshan Badda Link Road, Dhaka-1212",
        icon: building,
    },
    {
        title: " Korea Office:",
        description1: "Kyungsung University27 Central Library,",
        description2: "15th Floor, Busan.",
        icon: building,
    },
];

export default function ContactUsForm() {
    return (
        <Stack
            justifyContent={"center"}
            sx={{
                gap: "2rem",
            }}
        >
            {data.map((item, index) => (
                <ContactUsCard
                    key={index}
                    title={item.title}
                    description1={item.description1}
                    description2={item.description2}
                    icon={item.icon}
                />
            ))}
        </Stack>
    );
}
