import { Box, Stack } from "@mui/material";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
import line from "../../assets/images/line.svg";
import university1 from "../../assets/images/university1.png";
import university2 from "../../assets/images/university2.png";
import university3 from "../../assets/images/university3.png";
import university4 from "../../assets/images/university4.png";
import university5 from "../../assets/images/university5.png";
import university6 from "../../assets/images/university6.png";
import university7 from "../../assets/images/uni-7.png";
import university8 from "../../assets/images/uni-8.jpg";
import university9 from "../../assets/images/uni-9.jpeg";
import university10 from "../../assets/images/uni10.png";

import { CButton, CTypography } from "../../utility";
import React, { useState } from "react";

const universities = [
  {
    id: 1,
    name: "Kyungsung University",
    bio: " Kyungsung University is a private university in Busan, South Korea. It is located in the district of Nam-gu.",
    image: university1,
    backgroundColor: "#FFF4DC",
  },
  {
    id: 2,
    name: "Tongmyong University",
    bio: "Tongmyong University is a private university located in Busan, South Korea. It was founded in 1955.",
    image: university2,
    backgroundColor: "#D8F2FF",
  },
  {
    id: 3,
    name: "Dong-A University",
    bio: "Dong-A University is a private research university located in Busan, South Korea. Founded in 1952.",
    image: university3,
    backgroundColor: "#CEE0EF",
  },
  {
    id: 4,
    name: "Dong-Eui University ",
    bio: "Dong-Eui University is a private university located in Busan, South Korea. It was established in 1999.",
    image: university4,
    backgroundColor: "#FFDDE6",
  },
  {
    id: 5,
    name: "Sejong University",
    bio: "Sejong University is a private university located in Seoul, South Korea known for its standing in hospitality.",
    image: university5,
    backgroundColor: "#E9E7FF",
  },
  {
    id: 6,
    name: "Jeonbuk National University ",
    bio: `Jeonbuk National University is one of ten Flagship Korean National Universities founded in 1947.`,
    image: university6,
    backgroundColor: "#FFF4D6",
  },
  {
    id: 7,
    name: "Dongshin University ",
    bio: `Dongshin University is a private university in southwestern South Korea. Its campus is located in Naju`,
    image: university7,
    backgroundColor: "#FFFfff",
  },
  {
    id: 8,
    name: "Far East University ",
    bio: `Far East University is located in Gamgok-myeon, Eumseong County, North Chungcheong province, South Korea`,
    image: university8,
    backgroundColor: "#FFFfff",
  },
  {
    id: 9,
    name: "Namseoul University ",
    bio: `Namseoul University is a private university located in Cheonan, South Korea. `,
    image: university9,
    backgroundColor: "#FFFfff",
  },
  {
    id: 10,
    name: "Woosong Univesity",
    bio: `Woosong University, is a 4-year university, located in Daejeon, South Korea`,
    image: university10,
    backgroundColor: "#FFFfff",
  },
];

export default function WorkingUniversities() {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const [data, setData] = useState(universities);

  React.useEffect(() => {
    setData(universities?.slice(0, 6));
  }, []);

  const handleLoadMore = () => {
    setData(universities);
  };


  return (
    <Stack component={"section"}
      id="workingUniversities"
    >
      <Stack
        component={"div"}
        className="container"
        py={8}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box data-aos="fade-up" data-aos-anchor-placement="center-bottom">
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
          <Box component={"img"} src={line} sx={{}} />
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
          {data.map((item, index) => (
            <div
              className="max-w-sm mx-auto"
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

                    boxShadow: isDarkMode
                      ? "0px 8px 56px rgba(0, 0, 0, 0.08)"
                      : "0px 8px 56px rgba(0, 0, 0, 0.08)",
                    boxSizing: "border-box",
                    backgroundColor: isDarkMode ? "#0D0D0D" : "#FFFFFF",
                    borderRadius: "16px",
                  }}
                  p={2}

                >
                  <Box justifyContent={"center"} alignItems={"center"} mb={2}>
                    <Box
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        /// backgroundColor: '#D8F2FF',
                        backgroundColor: item.backgroundColor,
                        borderRadius: "12px",
                        overflow: "hidden",
                      }}
                      className="w-full h-full flex justify-center items-center p-8"
                    >
                      <img
                        alt={item?.name}
                        effect="blur"
                        src={item?.image}
                        className="h-36 w-36 object-contain"
                      />
                    </Box>
                  </Box>
                  <Stack gap={1}>
                    <CTypography
                      color={isDarkMode ? "#fff" : "#181818"}
                      fontSize={{
                        md: 20,
                        xs: 16,
                      }}
                      fontWeight={600}
                      text={item.name}
                    //align={'center'}
                    />
                    <CTypography
                      color={isDarkMode ? "#868686" : "#6B6B6B"}
                      fontSize={{
                        md: 14,
                        xs: 12,
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
            onClick={handleLoadMore}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
