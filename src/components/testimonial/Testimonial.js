import { Avatar, Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import photo1 from '../../assets/images/TestimonialImg1.png';
import photo2 from '../../assets/images/TestimonialImg2.png';
import photo3 from '../../assets/images/TestimonialImg3.png';
import photo4 from '../../assets/images/TestimonialImg4.png';
import line from '../../assets/images/line.svg';
import ArrowLeft from "../../assets/svg/ArrowLeft";
import ArrowRight from "../../assets/svg/ArrowRight";
import QuoteIcon from "../../assets/svg/QuoteIcon";
import { CTypography } from "../../utility";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const testimonial = [
    {
        id: 1,
        name: 'Tom Kerry 1',
        image: photo1,
        university: 'Student of RU',
        quote: `Thanks to WeCare transparent and efficient process, I was able to secure a spot at a prestigious Korean university.`
    },
    {
        id: 2,
        name: 'Jenny Wilson 2',
        image: photo2,
        university: 'Students of BUET',
        quote: `Thanks to WeCare transparent and efficient process, I was able to secure a spot at a prestigious Korean university.`
    },
    {
        id: 3,
        name: 'Leslie Winslate 3',
        image: photo3,
        university: 'Student of JU',
        quote: `Thanks to WeCare transparent and efficient process, I was able to secure a spot at a prestigious Korean university.`
    },
    {
        id: 4,
        name: 'Jennifer Aniston 4',
        image: photo4,
        university: 'Student of DU',
        quote: `Thanks to WeCare transparent and efficient process, I was able to secure a spot at a prestigious Korean university.`
    },

]

export default function Testimonial() {
    const { isDarkMode } = useSelector(state => state.darkMode);
    const slider = React.useRef(null);
    const width = window.innerWidth;
    const [currentSlide, setCurrentSlide] = React.useState(0);
    React.useEffect(() => {
        if (width < 600) {
            setCurrentSlide(1)
        }
        else {
            setCurrentSlide(2)
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
                    dots: true
                }
            },

            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        beforeChange: (oldIndex, newIndex) => {
            if (width < 600) {
                setCurrentSlide(newIndex + 1)
            }
            else {
                if (newIndex === testimonial.length - 1) setCurrentSlide(1)
                //   else if (newIndex === testimonial.length + 1) setCurrentSlide(2)
                else setCurrentSlide(newIndex + 2)
            }
        }
    };
    return (
        <Stack
            bgcolor={isDarkMode ? '#141414' : '#F3FCFD'}
            pb={8}
            position={'relative'}
            zIndex={1}
            overflow={'hidden'}
            id='testimonial'
        >
            {/* right color */}
            <Box
                sx={{
                    ':after': {
                        content: '""',
                        position: 'absolute',
                        top: {
                            md: -150,
                            xs: -80
                        },
                        right: {
                            md: -150,
                            xs: -80
                        },
                        height: {
                            md: 298,
                            xs: 161
                        },
                        width: {
                            md: 298,
                            xs: 161
                        },
                        background: isDarkMode ? 'rgba(251, 193, 49, 0.5)' : ' rgba(250, 187, 24, 0.5)',
                        borderRadius: '50%',

                        opacity: 0.4,
                        filter: 'blur(150px)',

                    }
                }}
            />
            {/* left color */}
            <Box
                sx={{
                    ':after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 250,
                        left: 50,
                        height: {
                            md: 170,
                            xs: 145
                        },
                        width: {
                            md: 270,
                            xs: 145
                        },
                        borderRadius: '50%',

                        background: isDarkMode ? '#1BE1FF' : '#01DDFF',
                        // backgroundColor: '#FABB1880',
                        zIndex: -1,
                        opacity: 0.4,
                        filter: 'blur(150px)',

                    }
                }}
            />
            <Stack
                justifyContent={'center'}
                alignItems={'center'}
                py={8}
            >
                <Box  data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                    <CTypography
                        color={isDarkMode ? '#fff' : '#181818'}
                        fontSize={{
                            xs: 24,
                            md: 48
                        }}
                        fontWeight={700}
                        text='Testimonial '
                        align={'center'}
                    />
                    <Box
                        component={'img'}
                        src={line}
                        sx={{
                            width: {
                                md: 198,
                                xs: 105
                            },
                            height: {
                                md: 15,
                                xs: 8
                            },
                            ml: {
                                md: 4,
                                xs: 3
                            },
                        }}
                    />
                </Box>
            </Stack>
            <Stack
                gap={4}
            >
                <Slider {...settings}
                    ref={slider}
                >
                    {
                        testimonial.map((item, index) => (
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
                                }}
                            // bgcolor={'#f00'}

                            >
                                <Stack
                                    sx={{
                                        // border: '2px solid #CDCDCD',
                                        border: currentSlide === item.id ? 'none' : (isDarkMode ? '2px solid #3F3F3F' : '2px solid #CDCDCD'),
                                        borderRadius: '16px',
                                        boxShadow: currentSlide === item.id && '0px 8px 56px rgba(0, 0, 0, 0.08)',
                                        bgcolor: currentSlide === item.id && (isDarkMode ? '#0D0D0D' : '#fff'),
                                        position: 'relative',
                                        zIndex: 1


                                    }}
                                    gap={4}
                                    px={4}
                                    pt={10}
                                    pb={6}
                                >

                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: {
                                                md: 50,
                                                xs: 45
                                            },
                                            // zIndex: 0,
                                            zIndex: -1,
                                        }}
                                    >
                                        <QuoteIcon
                                            qouteColor={currentSlide === item.id ? (isDarkMode ? '#141414' : '#F3FCFD') : (isDarkMode ? '#1B1B1B' : '#F3FCFD')}
                                        />
                                    </Box>

                                    <CTypography
                                        fontSize={{
                                            md: 20,
                                            xs: 16
                                        }}
                                        color={currentSlide === item.id ? (isDarkMode ? '#868686' : '#535353') : (isDarkMode ? '#868686' : '#CDCDCD')}
                                        fontStyle={'italic'}
                                        fontWeight={400}
                                        text={item.quote}
                                        sx={{
                                            position: 'relative',
                                            zIndex: 10,
                                        }}
                                    // align={'center'}
                                    />
                                    <Stack
                                        direction={'row'}
                                        spacing={2}
                                        alignItems={'center'}

                                    >
                                        <Box
                                            sx={{
                                                width: {
                                                    md: 80,
                                                    xs: 50
                                                },
                                                height: {
                                                    md: 80,
                                                    xs: 50
                                                },
                                                borderRadius: '50%',
                                                overflow: 'hidden',
                                                //   objectFit: 'cover',
                                                // objectPosition: 'center',
                                            }}
                                        >
                                            <LazyLoadImage
                                                alt={item.name}
                                                effect="blur"
                                                src={item.image}
                                                width={'100%'}
                                                height={'100%'}

                                            />
                                        </Box>
                                        <Box>
                                            <CTypography
                                                color={currentSlide === item.id ? (isDarkMode ? '#00A6C0' : '#0090A6') : '#868686'}
                                                fontSize={{
                                                    xs: 16,
                                                    md: 24
                                                }}
                                                fontWeight={700}
                                                text={item.name}

                                            />
                                            <CTypography
                                                color={currentSlide === item.id ? (isDarkMode ? '#fff' : '#191919') : '#727272'}
                                                fontSize={{
                                                    xs: 12,
                                                    md: 20
                                                }}
                                                fontWeight={400}
                                                text={item.university}
                                            />
                                        </Box>
                                    </Stack>

                                </Stack>

                            </Stack>
                        ))

                    }
                </Slider>

                <Stack
                    direction={'row'}
                    spacing={6}
                    sx={{
                        justifyContent: 'center',
                    }}
                >
                    <Box onClick={() => slider?.current?.slickPrev()}
                        sx={{
                            backgroundColor: isDarkMode ? '#0D0D0D' : '#fff',
                            borderRadius: 50,
                            height: 50,
                            width: 50,
                            dropShadow: '2px 2px 20px rgba(0, 0, 0, 0.1)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            '&:hover': {
                                cursor: 'pointer',
                                bgcolor: '#0090A690',

                            },
                        }}
                    >
                        <Box>
                            <ArrowLeft
                                color={isDarkMode ? '#fff' : '#191919'}
                            />
                        </Box>
                    </Box>
                    <Box onClick={() => slider?.current?.slickNext()}
                        sx={{
                            backgroundColor: isDarkMode ? '#0D0D0D' : '#fff',
                            borderRadius: 50,
                            height: 50,
                            width: 50,
                            dropShadow: '2px 2px 20px rgba(0, 0, 0, 0.1)',
                            //filter: 'drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.1))'
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            '&:hover': {
                                cursor: 'pointer',
                                bgcolor: '#0090A690',

                            },
                            // 

                        }}
                    >
                        <Box>
                            <ArrowRight
                                color={isDarkMode ? '#fff' : '#191919'}
                            />
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}
