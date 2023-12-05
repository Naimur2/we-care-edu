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
import cn from "../../utility/cn";
import GMap from "./GMap";

const locations = [
  {
    id: 1,
    title: "Dhaka Office",
    name: "Tropical Maanco Tower, T - 111, T - 112, Gulshan Badda Link Road, DHaka - 1212",
    telephone: "+880 9613 756 545",
    email: "wecareeducation2145@gmail.com",
    time: "Sun - Thu, 10 AM - 6PM",
    location: {
      lat: 23.780513,
      lng: 90.419938,
    },
  },
  {
    id: 2,
    title: "Narsingdi Office",
    name: "235, Sultan tower, Balur maat west. Brahmondi Narsingdi.",
    telephone: "+880 9613 756 545",
    email: "wecareeducation2145@gmail.com",
    time: "Sun - Thu, 10 AM - 6PM",
    location: {
      lat: 23.92298,
      lng: 90.71768,
    },
  },
  {
    id: 3,
    title: "Nepal branch",
    name: "28 Bagbazar, Kathmandu, Nepal",
    telephone: "+880 9613 756 545",
    email: "wecareeducation2145@gmail.com",
    time: "Sun - Thu, 10 AM - 6PM",
    location: {
      lat: 27.71202,
      lng: 85.31295,
    },
  },
  {
    id: 4,
    title: "Korea branch",
    name: "Yongso-Ro 7beon-Gil, Nam-Gu, Busan",
    telephone: "+82 0104 824 8338",
    email: "wecareeducation2145@gmail.com",
    time: "Sun - Thu, 10 AM - 6PM",
    location: {
      lat: 35.136699,
      lng: 129.100465,
    },
  },
];

export default function ContactUs() {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const [selected, setSelected] = React.useState(1);
  const mapRef = React.useRef(null);

  const currentLocation = locations.find(
    (location) => location.id === Number(selected)
  );

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

        <div className="grid gap-10 lg:grid-cols-2 py-8">
          <div className="row-start-2 lg:row-start-1">
            <GMap ref={mapRef} />
          </div>
          <div className="p-4 grid gap-6">
            <h1
              className={cn(
                "text-black font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl",
                {
                  "text-white": isDarkMode,
                }
              )}
            >
              Branch Location
            </h1>
            <div className="grid gap-4">
              <h2
                className={cn(
                  "text-xs sm:text-sm lg:text-base font-semibold text-black",
                  {
                    "text-white": isDarkMode,
                  }
                )}
              >
                Select branch
              </h2>
              <select
                name="branch"
                id="branch"
                className={cn(
                  "w-full px-3 py-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",
                  {
                    "bg-gray-700 text-white": isDarkMode,
                  }
                )}
                onChange={(e) => {
                  setSelected(e.target.value);
                  const currentLoc = locations.find(
                    (location) => location.id === Number(e.target.value)
                  );
                  mapRef.current.panTo(currentLoc.location);
                }}
                value={selected}
              >
                {locations.map((location) => (
                  <option value={location.id} key={location.id}>
                    {location.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-6">
              <h2
                className={cn(
                  "text-xs sm:text-sm lg:text-base font-semibold text-black",
                  {
                    "text-white": isDarkMode,
                  }
                )}
              >
                Location
              </h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-[auto,1fr] gap-4">
                  <img
                    src="/icons/location.svg"
                    alt=""
                    className="w-6 h-6 object-contain"
                  />
                  <p
                    className={cn(
                      "text-xs sm:text-sm lg:text-base text-[#66665C] ",
                      {
                        "text-white": isDarkMode,
                      }
                    )}
                  >
                    {currentLocation.name}
                  </p>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-4">
                  <img
                    src="/icons/telephone.svg"
                    alt=""
                    className="w-6 h-6  object-contain"
                  />
                  <p
                    className={cn(
                      "text-xs sm:text-sm lg:text-base text-[#66665C] ",
                      {
                        "text-white": isDarkMode,
                      }
                    )}
                  >
                    {currentLocation.telephone}
                  </p>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-4">
                  <img
                    src="/icons/mail.svg"
                    alt=""
                    className="w-6 h-6  object-contain"
                  />
                  <p
                    className={cn(
                      "text-xs sm:text-sm lg:text-base text-[#66665C] ",
                      {
                        "text-white": isDarkMode,
                      }
                    )}
                  >
                    {currentLocation.email}
                  </p>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-4">
                  <img
                    src="/icons/clock.svg"
                    alt=""
                    className="w-6 h-6  object-contain"
                  />
                  <p
                    className={cn(
                      "text-xs sm:text-sm lg:text-base text-[#66665C] ",
                      {
                        "text-white": isDarkMode,
                      }
                    )}
                  >
                    {currentLocation.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
