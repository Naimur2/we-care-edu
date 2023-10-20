import { Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import line from "../../assets/images/line.svg";
import Service1 from "../../assets/svg/Service1";
import Service2 from "../../assets/svg/Service2";
import Service3 from "../../assets/svg/Service3";
import Service4 from "../../assets/svg/Service4";
import Service5 from "../../assets/svg/Service5";
import Service6 from "../../assets/svg/Service6";
import { CButton, CTypography } from "../../utility";

export default function OurServices() {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const [seletedService, setSeletedService] = React.useState(0);
  const [dataCount, setDataCount] = React.useState(6);
  const services = [
    {
      id: 1,
      title: "Free file assessment",
      icon: "/images/icon/services/1.svg",
    },
    {
      id: 2,
      title: "Choosing a right major",
      icon: "/images/icon/services/2.svg",
    },
    {
      id: 3,
      title: "24 hours counselling",
      icon: "/images/icon/services/3.svg",
    },
    {
      id: 4,
      title: "Error free Application",
      icon: "/images/icon/services/4.svg",
    },
    {
      id: 5,
      title: "Interview Preparation",
      icon: "/images/icon/services/5.svg",
    },
    {
      id: 6,
      title: "5 Trial Interview",
      icon: "/images/icon/services/6.svg",
    },
    {
      id: 7,
      title: "Cover letter & SOP",
      icon: "/images/icon/services/7.svg",
    },
    {
      id: 8,
      title: "Visa Documents Preparation",
      icon: "/images/icon/services/8.svg",
    },
    {
      id: 9,
      title: "Tax & TIN Registration",
      icon: "/images/icon/services/9.svg",
    },
    {
      id: 10,
      title: "Bank Balance Guidance",
      icon: "/images/icon/services/10.svg",
    },
    {
      id: 11,
      title: "Embassy Date Reservation",
      icon: "/images/icon/services/11.svg",
    },
    {
      id: 12,
      title: "Tuition Refund",
      icon: "/images/icon/services/12.svg",
    },
    {
      id: 13,
      title: "Air Ticket Reservation",
      icon: "/images/icon/services/13.svg",
    },
    {
      id: 14,
      title: "Dormitory",
      icon: "/images/icon/services/14.svg",
    },
    {
      id: 15,
      title: "Job Guidelines",
      icon: "/images/icon/services/15.svg",
    },
    {
      id: 16,
      title: "Korean Culture & Basics",
      icon: "/images/icon/services/16.svg",
    },
  ];

  const handleSeeMoreOrLess = () => {
    if (services?.length !== dataCount) {
      setDataCount((prev) => {
        if (prev + 6 <= services?.length) {
          return prev + 6;
        } else if (prev + 6 >= services?.length) {
          return services?.length;
        }
        return prev;
      });
    } else {
      setDataCount(6);
    }
  };

  return (
    <Stack
      component={"section"}
      position={"relative"}
      zIndex={1}
      overflow={"hidden"}
    >
      <Stack
        component={"div"}
        py={{
          md: 8,
          xs: 0,
        }}
        justifyContent={"center"}
        alignItems={"center"}
        className="container"
      >
        <Box
          pt={{
            xs: 8,
            md: 0,
          }}
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
            text="Our Services"
            align={"center"}
          />
          <Box
            component={"img"}
            src={line}
            sx={{
              width: {
                md: 198,
                xs: 105,
              },
              height: {
                md: 15,
                xs: 8,
              },
              ml: {
                xs: 6,
                md: 14,
              },
            }}
          />
        </Box>
        <Stack
          py={8}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              lg: " repeat(3, 1fr) ",
              md: " repeat(2, 1fr) ",
              xs: "1fr",
            },
            gap: "1.5rem",
          }}
        >
          {services.slice(0, dataCount).map((item, index) => (
            <div
              className=""
              key={item.id}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay={index * 100}
            >
              <Stack
                width={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
                className="hover-scale"
              >
                <Stack
                  key={item.id}
                  sx={{
                    display: "inline-block",
                    width: {
                      sm: 376,
                      xs: 343,
                    },
                    height: {
                      sm: 256,
                      xs: 233,
                    },
                    cursor: "pointer",
                    border:
                      seletedService === item.id ? "2px solid #0090A6" : null,
                    boxShadow: "0px 8px 56px rgba(0, 0, 0, 0.08)",
                    boxSizing: "border-box",
                    backgroundColor: isDarkMode ? "#222222" : "#FFFFFF",
                    borderRadius: "16px",
                    p: 4,
                  }}
                  onClick={() => setSeletedService(item.id)}
                >
                  <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={4}
                  >
                    <Box
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        width: {
                          md: 90,
                          xs: 82,
                        },
                        height: {
                          md: 90,
                          xs: 82,
                        },
                      }}
                      // alt=""
                    >
                      {/* {item.icon} */}
                      <img
                        src={item?.icon}
                        alt={item?.title}
                        style={{ width: "90px", height: "90px" }}
                      />
                    </Box>

                    <CTypography
                      color={isDarkMode ? "#FFFFFF" : "#12141D"}
                      fontSize={{
                        md: 24,
                        xs: 21,
                      }}
                      fontWeight={500}
                      text={item.title}
                      align={"center"}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </div>
          ))}
        </Stack>

        <Stack pt={2}>
          <CButton
            onClick={handleSeeMoreOrLess}
            btnTitle={services?.length !== dataCount ? "See More" : "See Less"}
            fontSize={{
              md: 20,
              xs: 16,
            }}
          />
        </Stack>
      </Stack>

      {/* right color */}
      <Box
        sx={{
          ":after": {
            content: '""',
            position: "absolute",
            bottom: {
              md: 150,
              xs: 80,
            },
            right: {
              md: 150,
              xs: 80,
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
            opacity: 0.4,
            filter: "blur(150px)",
            borderRadius: "50%",
          },
        }}
      />
      {/* left color */}
      <Box
        sx={{
          ":after": {
            content: '""',
            position: "absolute",
            top: {
              md: 150,
              xs: 80,
            },
            left: {
              md: 150,
              xs: 80,
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
            background: isDarkMode
              ? "rgba(251, 193, 49, 0.5)"
              : " rgba(250, 187, 24, 0.5)",

            // backgroundColor: '#FABB1880',
            zIndex: -1,
            opacity: 0.4,
            filter: "blur(150px)",
          },
        }}
      />
    </Stack>
  );
}
