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
    <Box className="grid gap-4 md:gap-8 place-items-center px-4 lg:px-8 py-8 bg-white rounded-xl shadow-lg"
    data-aos="fade-up"
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
        className="contact-us-card__details grid gap-8"
        sx={{
          gap: {
            xs: "0.5rem",
            md: "1rem",
          },
        }}
      >
        <Box
          
          sx={{
            color: isDarkMode ? "white" : "black",
          }}
          component={"h2"}
          className="text-center text-base sm:text-lg md:text-xl  xl:text-2xl font-bold mb-4"
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
            }}
            className="text-center text-xs sm:text-sm md:text-base xl:text-lg "
          >
            {description1}
          </Box>
          {description2 && (
            <Box
              component={"p"}
              sx={{
                maxWidth: "70ch",
              }}
              className="text-center text-xs sm:text-sm md:text-base xl:text-lg"
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
    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 px-2 py-10">
      {data.map((item, index) => (
        <ContactUsCard
          key={index}
          title={item.title}
          description1={item.description1}
          description2={item.description2}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
