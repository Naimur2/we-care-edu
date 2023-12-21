import { Box, Stack } from "@mui/material";
import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import line from "../../assets/images/line.svg";
import ArrowLeft from "../../assets/svg/ArrowLeft";
import ArrowRight from "../../assets/svg/ArrowRight";
import QuoteIcon from "../../assets/svg/QuoteIcon";
import { CTypography } from "../../utility";

const testimonial = [
  {
    id: 1,
    name: "Rafiqul islam",
    image: "/images/testimonial/0.jpg",
    quote: `Hello , This is Md Rafiqul Islam. First of all thanks to Almighty Allah, Family, friends, well wishers and last but not the least, special thanks goes to Md Iftekhar Rahman for his wonderful help and support in my journey towards South Korea. I hope and expect his endless and everlasting support on the days ahead. I pray for his healthy life and success in his goals. Thank you.`,
  },
  {
    id: 2,
    name: "Kamrol Hasan",
    image: "/images/testimonial/1.jpg",
    quote: `Since the day one when I started my counseling with WE CARE, the overall journey of my admission as well visa process was enjoyable. The guidance and the road map shown by them during the process helped me a lot. The endless support  along with a perfect document list given by WE CARE helped me to get success for my visa approval. Thanks a lot to entire team.`,
  },
  {
    id: 3,
    name: "Mohammad saiful islam",
    image: "/images/testimonial/2.jpg",
    quote: `I had a fantastic experience with We Care Education as my consultancy for pursuing higher studies in South Korea. They guided me through the entire visa process, and I'm thoroughly satisfied with their excellent services. Their expertise and support made the journey smooth and stress-free. I highly recommend We Care Education to anyone seeking assistance for studying in South Korea. And once again thank you We Care Education and the honourable CEO of We Care Education MD Iftekher Rahman Vhaiya..`,
  },
  {
    id: 4,
    name: "Shimanto Hasan",
    image: "/images/testimonial/3.jpg",
    quote: `I had an outstanding experience with We Care throughout my entire visa processing journey. Their consultant went above and beyond to provide exceptional support and guidance. From the initial consultation to the final approval, their expertise and professionalism were evident. They were always responsive, addressing all my queries promptly and ensuring a smooth process. Thanks to their dedication and knowledge, I now have my visa and can't thank them enough. I highly recommend We Care to anyone seeking visa assistance; they truly live up to their name, caring deeply about their clients' success.  Specially many many thanks to my counselor @Md Ashik bhaiya and of course our honorable CEO @MD Iftekhar Rahman bhaiya🧡
`,
  },
  {
    id: 5,
    name: "Saifur Rahman",
    image: "/images/testimonial/4.jpg",
    quote: `I was so nervous about the visa process, but wecare made it so easy. They were incredibly helpful and knowledgeable, and they answered all of my questions patiently. They guided me through the entire process step-by-step, and they made sure that I had everything I needed to submit a complete and accurate application I recommend wecare to anybody who is looking for a good consultant for s.korea study visa processing.
`,
  },
  {
    id: 6,
    name: "Abdur Rahman Akash",
    image: "/images/testimonial/5.jpg",
    quote: `The journey with WeCare Education has been nothing short of incredible, culminating in the successful approval of my study permit visa. Throughout the entire procedure, the bond between us has grown stronger, and their outstanding track record speaks volumes, as not a single rejection has been witnessed in this semester.And Many many thanks My counsilor @Md. Ashikur Rahman vai. and of cource our honorable CEO MD Iftekhar Rahman Vai.
`,
  },
  {
    id: 7,
    name: "Rhitil Akash",
    image: "/images/testimonial/6.jpg",
    quote: `It was a wonderful journey since the beginning and was smoother than I've imagined.We Care helped me sincerely in every step on achieving my desired goal.There were many people who helped me but I would like to mention our beloved Boss Md Iftekhar Rahman and my personal favourite Md Aashik bhai for guiding towards the right path.I am also grateful to my friend Raffy,Al Mamun and aowlad for being there for me.I recommend We Care to whoever is dreaming about studying in South Korea  period
`,
  },
  {
    id: 8,
    name: "Kopil Acharjee",
    image: "/images/testimonial/7.jpg",
    quote: `WeCare Education is the best agency for South Korea student visa process. The key to their effectiveness is the professionalism and attention to every minute detail born out of their personal involvement. At WeCare customer service and satisfaction are on top priority. They make every area of the admission and visa application process seamless with their continuous support and involvement.`,
  },
  {
    id: 9,
    name: "Md Pappu Ahmed",
    image: "/images/testimonial/8.jpg",
    quote: `I think wecare is the best agency for South Korea student visa. There were many problems in my papers where I did not have confidence but wecare did.Thank you to every member of wecare. Especially,iftekar Bhaiya,Nabil Bhaiya,Mridul Bhaiya,Tamanna Apu,Sahina Apu And Smart Saadat Bhai.`,
  },
  {
    id: 10,
    name: "Ashikur Rahman",
    image: "/images/testimonial/9.jpg",
    quote: `At first thanks to almighty Allah & secondly thanks to we care education who prepare all the documents & keep me tension free during my visa processing time. I think we care education is best consultancy for south korea, they received my call even 12 am and they prove that they provide 24/7 service.Highly recommended those who are want to apply in south korea. A special thanks to my Counselor Md Nabil Hossain & Ceo of we care education Md Iftekhar Rahman.I am so greatfull to you brother.
`,
  },
  {
    id: 11,
    name: "Mehedi Khan Raffy",
    image: "/images/testimonial/10.jpg",
    quote: `Assalamu alaikum, wecare is best Educational consultant so far I can assure that. we were four boys from Narsingdi ( Rhitil, Mamun and Juvayer). Since we completed our IELTS we approached to wecare education and they gave us their best. Currently we are enrolled at Tongmyong university Busan in Computer engineering. So far everything is good and I strongly recommend wecare education if you are interested studying in South Korea. They will provide everything from Start to end, for example offer letter to accomodations. So take a small nap and approach wecare education. Best of Luck and God bless you. 
`,
  },
  {
    id: 12,
    name: "Ariful H Adnan",
    image: "/images/testimonial/11.jpg",
    quote: `Wecare education is such a outstanding consultancy Which will never disappoint you in any single steps to get student visa in South korea.They are highly supportive,cooperative and charismatic❤️ Make your dream feasible with Wecare education.
`,
  },
  {
    id: 14,
    name: "Najim Reezu",
    image: "/images/testimonial/13.jpg",
    quote: `Highly recommended,not only because they are friendly but also they work very professionally.I can't ignore the fact that it was very cheap and less time consuming especially if you are from middle class family.The major problem of bank statement was solved within a glance in this conslutancy.If you are lucky finding this consultancy my only request will be don't waste time looking at other consultancies,just hop in and get your visa..Good luck folks.
`,
  },
  {
    id: 15,
    name: "15.	Afsana Mim",
    image: "/images/testimonial/14.jpg",
    quote: `First of all thanks to almighty Allah swt . I just got South Korea student visa D-2-3( Masters program ). I had a great Experience with we care education consultancy Md iftheker Rahman and his team mate. They are so friendly and so concern about their student and they try their best of best to get the visa. Personally I highly recommend this consultancy for visa processing.
`,
  },
];

export default function Testimonial() {
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
            text="Testimonial "
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
        <Slider
          {...settings}
          ref={slider}
          autoplay={true}
          autoplaySpeed={2000}
          infinite={true}
        >
          {testimonial.map((item, index) => (
            <Stack
              key={item.id}
              sx={{
                // width: {
                //     sm: 525,
                //     xs: 368
                // },
                // height: {
                //     sm: 348,
                //     xs: 250
                // },
                px: 2,
                height: "100%",
              }}
            // bgcolor={'#f00'}
            >
              <Stack
                sx={{
                  // border: '2px solid #CDCDCD',
                  border:
                    currentSlide === item.id
                      ? "none"
                      : isDarkMode
                        ? "2px solid #3F3F3F"
                        : "2px solid #CDCDCD",
                  borderRadius: "16px",
                  boxShadow:
                    currentSlide === item.id &&
                    "0px 8px 56px rgba(0, 0, 0, 0.08)",
                  bgcolor:
                    currentSlide === item.id &&
                    (isDarkMode ? "#0D0D0D" : "#fff"),
                  position: "relative",
                  zIndex: 1,
                  height: "100%",
                }}
                gap={4}
                px={4}
                pt={10}
                pb={6}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: {
                      md: 50,
                      xs: 45,
                    },
                    // zIndex: 0,
                    zIndex: -1,
                  }}
                >
                  <QuoteIcon
                    qouteColor={
                      currentSlide === item.id
                        ? isDarkMode
                          ? "#141414"
                          : "#F3FCFD"
                        : isDarkMode
                          ? "#1B1B1B"
                          : "#F3FCFD"
                    }
                  />
                </Box>

                <CTypography
                  fontSize={{
                    md: 20,
                    xs: 16,
                  }}
                  color={
                    currentSlide === item.id
                      ? isDarkMode
                        ? "#868686"
                        : "#535353"
                      : isDarkMode
                        ? "#868686"
                        : "#CDCDCD"
                  }
                  fontStyle={"italic"}
                  fontWeight={400}
                  text={item.quote}
                  sx={{
                    position: "relative",
                    zIndex: 10,
                    lineClamp: 5,
                  }}
                  className="line-clamp-5"
                // align={'center'}
                />
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  <Box
                    sx={{
                      width: {
                        md: 80,
                        xs: 50,
                      },
                      height: {
                        md: 80,
                        xs: 50,
                      },
                      borderRadius: "100%",
                      overflow: "hidden",
                      //   objectFit: 'cover',
                      // objectPosition: 'center',
                    }}
                  >
                    <img
                      alt={item.name}
                      effect="blur"
                      src={item.image}
                      width={"100%"}
                      height={"100%"}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </Box>
                  <Box>
                    <CTypography
                      color={
                        currentSlide === item.id
                          ? isDarkMode
                            ? "#00A6C0"
                            : "#0090A6"
                          : "#868686"
                      }
                      fontSize={{
                        xs: 16,
                        md: 24,
                      }}
                      fontWeight={700}
                      text={item.name}
                    />
                    <CTypography
                      color={
                        currentSlide === item.id
                          ? isDarkMode
                            ? "#fff"
                            : "#191919"
                          : "#727272"
                      }
                      fontSize={{
                        xs: 12,
                        md: 20,
                      }}
                      fontWeight={400}
                      text={item.university}
                    />
                  </Box>
                </Stack>
              </Stack>
            </Stack>
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
