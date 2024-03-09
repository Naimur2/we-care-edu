import { Box, Stack } from "@mui/material";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
import line from "../../assets/images/line.svg";
import squreShape from "../../assets/images/squreShape.svg";
import study from "../../assets/images/study.png";
import DotIcon from "../../assets/svg/DotIcon";
import { CTypography } from "../../utility";

export default function StudyInSouthKorea() {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const studyData = [
    {
      id: 1,
      title: "Standard Quality of Education",
      bgColor: isDarkMode ? "#1A1A1A" : "#ECF7F5",
      dotColor: isDarkMode ? "#67BBA9" : "#55B39E",
    },
    {
      id: 2,
      title: "Respectful civil right",
      bgColor: isDarkMode ? "#181818" : "#FEF8EA",
      dotColor: isDarkMode ? "#FFBA18" : "#FEB300",
    },
    {
      id: 3,
      title: "Engaging in a thriving global culture",
      bgColor: isDarkMode ? "#161616" : "#EEEFFD",
      dotColor: isDarkMode ? "#A77BFF" : "#9561FF",
    },
    {
      id: 4,
      title: "Work Ready",
      bgColor: isDarkMode ? "#171717" : "#FDEDEF",
      dotColor: isDarkMode ? "#F38594" : "#F16E80",
    },
    {
      id: 5,
      title: "Gain Life Skill",
      bgColor: isDarkMode ? "#161616" : "#EDF8FE",
      dotColor: isDarkMode ? "#1ABAFF" : "#00B2FF",
    },
  ];

  return (
    <Stack
      pb={8}
      position={"relative"}
      zIndex={1}
      overflow={"hidden"}
      component={"section"}
    >
      <Stack
        component={"div"}
        justifyContent={"center"}
        alignItems={"center"}
        className="container"
      >
        <Stack
          pb={10}
          justifyContent={"center"}
          alignItems={"center"}
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
              text="Top reasons to study in South Korea"
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
                  md: 21,
                  xs: 8,
                },
                ml: {
                  md: 70,
                  xs: 20,
                },
              }}
            />
          </Box>
        </Stack>
        <Stack
          px={{
            md: 13.5,
            xs: 2,
          }}
          width={"100%"}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              lg: " repeat(2, 1fr) ",
              md: " repeat(1, 1fr) ",
              xs: "1fr",
            },
            gap: "2.375rem",
          }}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <Stack
            width={"100%"}
            height={"100%"}
            alignItems={{
              xs: "center",
              lg: "flex-start",
            }}
            position={"relative"}
            zIndex={1}
          >
            <Box position={"relative"}>
              <Box
                // component={'img'}
                // src={study}
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
                className="w-full max-w-lg"

                // alt='study'
              >
                <img
                  alt={"study"}
                  effect="blur"
                  src={study}
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
              <Box
                sx={{
                  ":after": {
                    content: '""',
                    backgroundImage: `url(${squreShape})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    top: {
                      md: -41,
                      xs: -20,
                    },
                    left: {
                      md: -40,
                      xs: -10,
                    },
                    width: {
                      md: 100,
                      xs: 50,
                    },
                    height: {
                      md: 100,
                      xs: 50,
                    },
                    overflow: "hidden",
                    zIndex: -1,
                  },
                }}
              />
            </Box>
            {/* left color shape */}
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
                    md: 123,
                    xs: 89,
                  },
                  width: {
                    md: 123,
                    xs: 89,
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
            {/* rigth color shape */}
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
                    md: 174,
                    xs: 161,
                  },
                  width: {
                    md: 174,
                    xs: 161,
                  },
                  background: isDarkMode
                    ? "rgba(251, 193, 49, 0.5)"
                    : " rgba(250, 187, 24, 0.5)",
                  opacity: 0.4,
                  filter: "blur(150px)",
                  borderRadius: "50%",
                },
              }}
            />
          </Stack>
          <Stack
            width={"100%"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={{
              xs: "flex-start",
              sm: "center",
              md: "flex-start",
            }}
          >
            <Stack spacing={2}
            className="max-w-2xl mx-auto"
            >
              {studyData.map((item, index) => {
                return (
                  <Stack
                    key={item.id}
                    direction={"row"}
                    spacing={4}
                    alignItems={"center"}
                  >
                    {/* <Avatar
                                                src={item.image}
                                                sx={{
                                                    width: {
                                                        xs: 40,
                                                        md: 50,
                                                    },
                                                    height: {
                                                        xs: 40,
                                                        md: 50,
                                                    }
                                                }}

                                            /> */}
                    <Box
                      sx={{
                        width: {
                          xs: 49,
                          md: 51,
                        },
                        height: {
                          xs: 49,
                          md: 51,
                        },
                      }}
                    >
                      <DotIcon
                        dotColor={item.dotColor}
                        bgColor={item.bgColor}
                      />
                    </Box>
                    <CTypography
                      color={isDarkMode ? "#fff" : "#181818"}
                      fontSize={{
                        xl: 32,
                        lg: 28,
                        md: 24,
                        xs: 16,
                      }}
                      fontWeight={500}
                      text={item.title}
                      align={"left"}
                    />
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
