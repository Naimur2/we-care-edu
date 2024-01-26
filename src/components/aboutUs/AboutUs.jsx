import { Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import aboutImg from "../../assets/images/aboutImg.png";
import arrowAbout from "../../assets/images/arrowAbout.svg";
import arrowAboutMini from "../../assets/images/arrowAboutMini.svg";
import squreShape from "../../assets/images/squreShape.svg";
import line from "../../assets/images/line.svg";
import { CButton, CTypography } from "../../utility";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import useModal from "../../modal/hook/useModal";


export default function AboutUs() {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const { openModal } = useModal();
  return (
    <Stack
      py={{
        md: 8,
        xs: 4,
      }}
      id={"aboutUs"}
      bgcolor={isDarkMode ? "#141414" : "#F3FCFD"}
      position={"relative"}
      zIndex={1}
      overflow={"hidden"}
      component={"section"}
    >
      <Stack component={"div"} className="container">
        {/* right color */}
        <Box
          sx={{
            ":after": {
              content: '""',
              position: "absolute",
              top: 0,
              right: 0,
              borderRadius: "50%",

              height: {
                md: 300,
                xs: 161,
              },
              width: {
                md: 300,
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

        <Stack pb={4} justifyContent={"center"} alignItems={"center"}>
          <Box data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <CTypography
              color={isDarkMode ? "#fff" : "#181818"}
              fontSize={{
                md: 48,
                xs: 24,
              }}
              fontWeight={700}
              text="Free virtual counselling "
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
                ml: {
                  md: 0,
                  xs: 2,
                },
                height: {
                  md: 15,
                  xs: 6,
                },
              }}
              marginLeft={"auto"}
            />
          </Box>
        </Stack>

        <div className="grid gap-4 lg:gap-20 lg:grid-cols-2 place-items-center">
          <Stack
            width={"100%"}
            height={"100%"}
            maxWidth={{
              md: 500,
              xs: 300,
            }}
            mx={"auto"}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <Stack
              alignItems={{
                xs: "center",
                lg: "flex-start",
                
              }}
              paddingTop={6}
            >
              <Box position={"relative"} zIndex={1}>
                <Box
                  //  component={'img'}
                  // src={aboutImg}
                  sx={{
                    width: {},
                    height: {},
                    borderRadius: "24px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    alt={"aboutImg"}
                    effect="blur"
                    src={aboutImg}
                    width={"100%"}
                    height={"100%"}
                    className={`relative z-10 `}
                  />
                </Box>
                {/* left shape */}

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
                {/* right  */}
                <Box
                  sx={{
                    ":after": {
                      content: '""',
                      backgroundImage: `url(${squreShape})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "absolute",
                      bottom: {
                        md: -41,
                        xs: -20,
                      },
                      right: {
                        md: -40,
                        xs: -20,
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
            </Stack>
          </Stack>

          <Stack
            width={"100%"}
            height={"100%"}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            justifyContent={"center"}
          >
            <Box
              className="flex gap-10 flex-col justify-center items-center lg:items-start text-center lg:text-left"
              justifyContent={"center"}
              position={"relative"}
            >
              {/* arrow about lg */}
              <Box
                sx={{
                  ":after": {
                    content: '""',
                    // display: 'block',
                    backgroundImage: `url(${arrowAbout})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    left: -120,
                    bottom: 0,
                    width: 116,
                    height: 116,
                    display: {
                      xs: "none",
                      lg: "block",
                    },
                  },
                }}
              />
              {/* arrow about mini */}

              <CTypography
                color={isDarkMode ? "#868686" : "#363636"}
                fontSize={{
                  md: 16,
                  xs: 14,
                }}
                fontWeight={400}
                pt={{
                  xs: 2,
                  md: 0,
                }}
                sx={{
                  lineHeight: "1.8rem",
                }}
              >
                Established in 2021, WeCare Education has been recognized as one
                of the most efficient and trusted education agencies in
                Bangladesh. WeCare Education specializes in student recruitment
                for South Korean Universities. Its recognition is widespread
                from Bangladesh to South Korea. We have a main office in
                Gulshan, Dhaka and a branch office in Busan, South Korea. Apart
                from Bangladesh, we are recruiting students internationally-
                from India, Nepal, Pakistan and Uzbekistan. Considering our
                transparency.
              </CTypography>
              <Box>
                <CButton
                  btnTitle={"Book Now"}
                  fontSize={{
                    md: 20,
                    xs: 16,
                  }}
                  onClick={() => openModal("PersonalInfo")}
                />
              </Box>
            </Box>
          </Stack>
        </div>
      </Stack>
      {/* left color */}
      <Box
        sx={{
          ":after": {
            content: '""',
            position: "absolute",
            top: 360,
            left: 0,
            borderRadius: "50%",
            height: {
              md: 270,
              xs: 144,
            },
            width: {
              md: 270,
              xs: 144,
            },
            // background: 'rgba(251, 193, 49, 0.5)',
            background: isDarkMode ? "#1BE1FF" : "#01DDFF",
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
