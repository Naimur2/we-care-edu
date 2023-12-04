import { Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import arrowHistory from "../../assets/images/arrowHistory.svg";
import flag1 from "../../assets/images/flag1.png";
import flag2 from "../../assets/images/flag2.png";
import flag3 from "../../assets/images/flag3.png";
import flag4 from "../../assets/images/flag4.png";
import flag5 from "../../assets/images/flag5.svg";
import flag6 from "../../assets/images/flag6.svg";
import line from "../../assets/images/line.svg";
import { CTypography } from "../../utility";

const countries = [
  {
    id: 1,
    country: "South Korea",
    image: flag1,
  },
  {
    id: 2,
    name: "Bangladesh",
    image: flag2,
  },
  {
    id: 3,
    name: "India",
    image: flag3,
  },
  {
    id: 4,
    name: "Nepal",
    image: flag4,
  },
  {
    id: 5,
    name: "Pakistan",
    image: flag5,
  },
  {
    id: 6,
    name: "Uzbekistan",
    image: flag6,
  },
];

export default function History() {
  const { isDarkMode } = useSelector((state) => state.darkMode);

  return (
    <Stack component={"section"}>
      <Stack
        component={"div"}
        className="container"
        justifyContent={"center"}
        alignItems={"center"}
        py={8}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <Stack
          sx={{
            display: "inline-block",
            // width: '85%',
            //  height: 256,
            boxShadow: "0px 8px 56px rgba(0, 0, 0, 0.08)",
            boxSizing: "border-box",
            backgroundColor: isDarkMode ? "#222222" : "#FFFFFF",
            borderRadius: "16px",
            py: 8,
            px: {
              lg: 18.5,
              xs: 6.8,
            },
            position: "relative",
            zIndex: 1,
            overflow: "hidden",
            width: "100%",
          }}
        >
          <Stack justifyContent={"center"} alignItems={"center"} pb={4}>
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
                  // background: 'rgba(251, 193, 49, 0.5)',
                  background: isDarkMode ? "#1BE1FF" : "#01DDFF",
                  borderRadius: "50%",

                  zIndex: -1,
                  opacity: 0.4,
                  filter: "blur(150px)",
                },
              }}
            />
            <Box
              sx={{
                position: "relative",
              }}
            >
              <CTypography
                color={isDarkMode ? "#fff" : "#181818"}
                fontSize={{
                  xs: 24,
                  md: 48,
                }}
                fontWeight={700}
                text="Collaboration with Countries "
                align={"center"}
                className={`relative inline-block  mx-auto  after:block md:after:hidden lg:after:block after:content-[''] after:absolute after:top-full after:right-0 after:h-10
                 after:w-20 lg:after:w-44 lg:after:h-24 after:bg-line after:bg-no-repeat after:bg-contain`}
              />
              <Box
                sx={{
                  ":after": {
                    content: '""',
                    // display: 'block',
                    backgroundImage: `url(${arrowHistory})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    top: {
                      md: -50,
                      xs: -40,
                    },
                    right: {
                      md: -50,
                      xs: -10,
                    },
                    width: {
                      md: 130,
                      xs: 47,
                    },
                    height: {
                      md: 70,
                      xs: 40,
                    },
                  },
                }}
              />
            </Box>
          </Stack>

          <Stack
            sx={{
              // display: "grid",
              // gridTemplateColumns: {
              //     md: "repeat(4, 1fr)",
              //     xs: "1fr",
              // },
              // placeItems: "center",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
            width={"100%"}
            // bgcolor={'#f00'}
            //spacing={12}
            // justifyContent={'center'}
            // alignItems={'center'}
          >
            {/* <Stack
                            width={"100%"}
                            height={"100%"}
                            alignItems={"center"}
                            sx={{
                                display: "grid",
                                gap: 1,
                                placeItems: "center",
                            }}
                        >
                            <VisibilitySensor partialVisibility>
                                {({ isVisible }) => (
                                    <CTypography
                                        color={
                                            isDarkMode ? "#00A6C0" : "#0090A6"
                                        }
                                        fontSize={36}
                                        fontWeight={600}
                                        align={"center"}
                                        component={"span"}
                                    >
                                        {isVisible ? (
                                            <CountUp
                                                end={4}
                                                duration={2}
                                                suffix="/5"
                                            />
                                        ) : (
                                            0
                                        )}
                                    </CTypography>
                                )}
                            </VisibilitySensor>
                            <Box
                                width={"60%"}
                                height={"1px"}
                                backgroundColor={"#C4C4C4"}
                            />
                            <Box
                            // sx={{
                            //     borderTop: '1px solid #C4C4C4',
                            // }}
                            >
                                <CTypography
                                    color={isDarkMode ? "#868686" : "#363636"}
                                    fontSize={16}
                                    fontWeight={500}
                                    text="On Facebook"
                                    align={"center"}
                                    pt={2}
                                    component={"span"}
                                />
                            </Box>
                        </Stack>
                        <Stack
                            width={"100%"}
                            height={"100%"}
                            alignItems={"center"}
                            sx={{
                                display: "grid",
                                gap: 1,
                                placeItems: "center",
                            }}
                        >
                            <VisibilitySensor partialVisibility>
                                {({ isVisible }) => (
                                    <CTypography
                                        color={
                                            isDarkMode ? "#00A6C0" : "#0090A6"
                                        }
                                        fontSize={36}
                                        fontWeight={600}
                                        align={"center"}
                                        component={"span"}
                                    >
                                        {isVisible ? (
                                            <CountUp
                                                end={10000}
                                                duration={1}
                                                prefix="+"
                                            />
                                        ) : (
                                            0
                                        )}
                                    </CTypography>
                                )}
                            </VisibilitySensor>
                            <Box
                                width={"60%"}
                                height={"1px"}
                                backgroundColor={"#C4C4C4"}
                            />
                            <Box
                            // sx={{
                            //     borderTop: '1px solid #C4C4C4',
                            // }}
                            >
                                <CTypography
                                    color={isDarkMode ? "#868686" : "#363636"}
                                    fontSize={16}
                                    fontWeight={500}
                                    text="Students helped"
                                    align={"center"}
                                    pt={2}
                                />
                            </Box>
                        </Stack> */}
            {/* <Stack
                            width={"100%"}
                            height={"100%"}
                            alignItems={"center"}
                            sx={{
                                display: "grid",
                                gap: 1,
                                placeItems: "center",
                            }}
                        >
                            <VisibilitySensor partialVisibility>
                                {({ isVisible }) => (
                                    <CTypography
                                        color={
                                            isDarkMode ? "#00A6C0" : "#0090A6"
                                        }
                                        fontSize={36}
                                        fontWeight={600}
                                        align={"center"}
                                        component={"span"}
                                    >
                                        {isVisible ? (
                                            <CountUp
                                                end={50000}
                                                duration={1}
                                                separator=","
                                            />
                                        ) : (
                                            0
                                        )}
                                    </CTypography>
                                )}
                            </VisibilitySensor>
                            <Box
                                width={"60%"}
                                height={"1px"}
                                backgroundColor={"#C4C4C4"}
                            />
                            <Box
                            // sx={{
                            //     borderTop: '1px solid #C4C4C4',
                            // }}
                            >
                                <CTypography
                                    color={isDarkMode ? "#868686" : "#363636"}
                                    fontSize={16}
                                    fontWeight={500}
                                    text="Hours taught"
                                    align={"center"}
                                    pt={2}
                                />
                            </Box>
                        </Stack> */}

            <Stack
              width={"100%"}
              height={"100%"}
              sx={{
                display: "grid",
                gap: 1,
                placeItems: "center",
              }}
            >
              <Stack
                direction={"row"}
                spacing={2}
                justifyContent={"center"}
                position={"relative"}
                py={"0.85rem"}
              >
                {countries.map((country) => (
                  <Stack
                    direction={"row"}
                    key={country.id}
                    component={"img"}
                    src={country.image}
                    sx={{
                      width: 43,
                      height: 28,
                    }}
                  ></Stack>
                ))}
              </Stack>

              <Box width={"60%"} height={"1px"} backgroundColor={"#C4C4C4"} />
              <CTypography
                color={isDarkMode ? "#868686" : "#363636"}
                fontSize={16}
                fontWeight={500}
                text={`${countries.length} Countries`}
                align={"center"}
                pt={2}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
