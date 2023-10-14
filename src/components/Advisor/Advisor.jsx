import { Box, Stack } from "@mui/material";
import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import photo1 from "../../assets/images/TestimonialImg1.png";
import photo2 from "../../assets/images/TestimonialImg2.png";
import photo3 from "../../assets/images/TestimonialImg3.png";
import photo4 from "../../assets/images/TestimonialImg4.png";
import line from "../../assets/images/line.svg";
import ArrowLeft from "../../assets/svg/ArrowLeft";
import ArrowRight from "../../assets/svg/ArrowRight";
import { CTypography } from "../../utility";
import AdvisorCard from "../AdvisorCard/AdvisorCard";

const testimonial = [
  {
    id: 1,
    name: "Saadat Mahboob",
    advisorImageUrl: "/images/advisor/Picture1.jpg",
    facebook: "https://www.facebook.com/cricketer.saadat.9?mibextid=ZbWKwL ",
    whatsApp: "8801757748977",
    description: `Introduction: I am Saadat Mahboob.I have 5 years of working experience.Currently working at Wecare Education as Student Counselor `,
  },
  {
    id: 2,
    name: "Shahina Akter",
    advisorImageUrl: "/images/advisor/Picture2.jpg",
    facebook: "https://www.facebook.com/shanta.akther.90663?mibextid=ZbWKwL ",
    whatsApp: "8801621480130",
    description: `I'm Student Councelor of WeCare Education!`,
  },
  {
    id: 3,
    name: "Israt Jahan Ritu",
    advisorImageUrl: "/images/advisor/Picture3.jpg",
    facebook: "https://www.facebook.com/ritu.ritujahan.3?mibextid=9R9pXO ",
    whatsApp: "8801904766087",
    description: `Introduction:This is Ritu Jahan from wecare education. You can get help from wecare to fulfill  your abroad goal. `,
  },
  {
    id: 4,
    name: "Md Nabil Hossen",
    advisorImageUrl: "/images/advisor/Picture4.jpg",
    facebook: "https://www.facebook.com/nabil.hasan.92167?mibextid=ZbWKwL ",
    whatsApp: "8801734544028",
    description: `Myself Md Nabil Hossen. I'm student counsellor of WeCare education. I'm from Gazipur,Bangladesh `,
  },
  {
    id: 5,
    name: "Tamanna Hossain",
    advisorImageUrl: "/images/advisor/Picture5.jpg",
    facebook:
      "https://www.facebook.com/profile.php?id=100004708244828&mibextid=LQQJ4d ",
    whatsApp: "8801630689687",
    description: `It’s my pleasure to introduce myself. This is Tamanna Hossain, Student Counselor of Wecare Education. My ethic is “ I never neglect an opportunity for my improvement.`,
  },
  {
    id: 6,
    name: "Salman Shakil",
    advisorImageUrl: "/images/advisor/Picture6.jpg",
    facebook:
      "https://m.facebook.com/profile.php/?id=100002022349635&name=xhp_nt__fb__action__open_userQ ",
    whatsApp: "8801992340260",
    description:
      "HELLO.! I am Salman Shakil, currently working as a junior counselor, studying BSC in CSE. Have good computer skills. As a counselor the work will be easy for me as I am a teacher in Albatros Coaching. Love traveling and riding.",
  },
  {
    id: 7,
    name: "Panna Chakma",
    advisorImageUrl: "/images/advisor/Picture7.jpg",
    facebook:
      "https://www.facebook.com/profile.php?id=100005271466385&mibextid=ZbWKwL ",
    whatsApp: "8801533124708",
    description:
      "Myself Panna Chakma.I am from Khagrachhari, Chittagong divison.",
  },
];

export default function Advisor() {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const slider = React.useRef(null);
  const width = window.innerWidth;
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    if (width < 600) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(2);
    }
  }, [width]);

  const settings = {
    className: "center",
    infinite: true,
    dots: false,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => {
      if (width < 600) {
        setCurrentSlide(newIndex + 1);
      } else {
        if (newIndex === testimonial.length - 1) setCurrentSlide(1);
        //   else if (newIndex === testimonial.length + 1) setCurrentSlide(2)
        else setCurrentSlide(newIndex + 2);
      }
    },
  };

  return (
    <Stack
      bgcolor={isDarkMode ? "#141414" : "#F3FCFD"}
      pb={8}
      position={"relative"}
      zIndex={1}
      overflow={"hidden"}
      id="testimonial"
    >
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
            bottom: 250,
            left: 50,
            height: {
              md: 170,
              xs: 145,
            },
            width: {
              md: 270,
              xs: 145,
            },
            borderRadius: "50%",

            background: isDarkMode ? "#1BE1FF" : "#01DDFF",
            // backgroundColor: '#FABB1880',
            zIndex: -1,
            opacity: 0.4,
            filter: "blur(150px)",
          },
        }}
      />
      <Stack justifyContent={"center"} alignItems={"center"} py={8}>
        <Box data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <CTypography
            color={isDarkMode ? "#fff" : "#181818"}
            fontSize={{
              xs: 24,
              md: 48,
            }}
            fontWeight={700}
            text="Online Advisor"
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
                md: 4,
                xs: 3,
              },
            }}
          />
        </Box>
      </Stack>
      <Stack gap={4}>
        <Slider {...settings} ref={slider}>
          {testimonial.map((item) => (
            <AdvisorCard
              key={item.id}
              description={item?.description}
              facebook={item?.facebook}
              name={item?.name}
              advisorImageUrl={item?.advisorImageUrl}
              whatsapp={item?.whatsApp}
            />
          ))}
        </Slider>

        <Stack
          direction={"row"}
          spacing={6}
          sx={{
            justifyContent: "center",
          }}
        >
          <Box
            onClick={() => slider?.current?.slickPrev()}
            sx={{
              backgroundColor: isDarkMode ? "#0D0D0D" : "#fff",
              borderRadius: 50,
              height: 50,
              width: 50,
              dropShadow: "2px 2px 20px rgba(0, 0, 0, 0.1)",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              "&:hover": {
                cursor: "pointer",
                bgcolor: "#0090A690",
              },
            }}
          >
            <Box>
              <ArrowLeft color={isDarkMode ? "#fff" : "#191919"} />
            </Box>
          </Box>
          <Box
            onClick={() => slider?.current?.slickNext()}
            sx={{
              backgroundColor: isDarkMode ? "#0D0D0D" : "#fff",
              borderRadius: 50,
              height: 50,
              width: 50,
              dropShadow: "2px 2px 20px rgba(0, 0, 0, 0.1)",
              //filter: 'drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.1))'
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              "&:hover": {
                cursor: "pointer",
                bgcolor: "#0090A690",
              },
              //
            }}
          >
            <Box>
              <ArrowRight color={isDarkMode ? "#fff" : "#191919"} />
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
