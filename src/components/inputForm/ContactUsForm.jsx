import { Stack } from "@mui/material";
import React from "react";
import "./ContactUs.css";
import telephone from "../../assets/svg/telephone.svg";
import sms from "../../assets/svg/sms.svg";
import building from "../../assets/svg/bulding.svg";

const ContactUsCard = ({ title, description1, description2, icon }) => {
    return (
        <div className="contact-us-card">
            <div className="contact-us-card__icon">
                <img src={icon} alt="" />
            </div>
            <div className="contact-us-card__details">
                <h1 className="contact-us-card__title">{title}</h1>
                <div className="contact-us-card__description">
                    <p>{description1}</p>
                    {description2 && <p>{description2}</p>}
                </div>
            </div>
        </div>
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
        description1: "House- 54/A, Road-133, Room no: 302,",
        description2: "Gulshan-1,  Dhaka-1212.",
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
