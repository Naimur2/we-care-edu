import { Box, Stack } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import line from '../../assets/images/line.svg';
import photo1 from '../../assets/images/photos1.png';
import photo2 from '../../assets/images/photos2.png';
import photo3 from '../../assets/images/photos3.png';
import ArrowLeft from "../../assets/svg/ArrowLeft";
import ArrowRight from "../../assets/svg/ArrowRight";
import { CTypography } from "../../utility";
import { useSelector } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const photos = [
    {
        id: 1,
        image: photo1
    },
    {
        id: 2,
        image: photo2
    },
    {
        id: 3,
        image: photo3
    },
    {
        id: 4,
        image: photo2
    },
    {
        id: 5,
        image: photo3
    },
]

export default function Photos() {
    const { isDarkMode } = useSelector(state => state.darkMode);

    const slider = React.useRef(null);
    // const isCenterMode = window.innerWidth > 700 ? true : false;
    // alert(width)
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
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.75,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
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
        ]
    };

    return (
        <Stack
            bgcolor={isDarkMode ? '#141414' : '#F3FCFD'}
            pb={8}
            position={'relative'}
            zIndex={1}
            overflow={'hidden'}
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
                        // backgroundColor: '#FABB1880',
                        opacity: 0.4,
                        filter: 'blur(150px)',
                        borderRadius: '50%',


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
                        // background: 'rgba(251, 193, 49, 0.5)',
                        background: isDarkMode ? "#1BE1FF" : '#01DDFF',
                        // backgroundColor: '#FABB1880',
                        zIndex: -1,
                        opacity: 0.4,
                        filter: 'blur(150px)',
                        borderRadius: '50%',

                    }
                }}
            />
            <Stack
                justifyContent={'center'}
                alignItems={'center'}
                py={8}
            >
                <Box>
                    <CTypography
                        color={isDarkMode ? '#fff' : '#181818'}
                        fontSize={{
                            xs: 24,
                            md: 48
                        }}
                        fontWeight={700}
                        text='Photos'
                        align={'center'}
                    />
                    <Box
                        component={'img'}
                        src={line}
                        sx={{
                            width: {
                                md: 152,
                                xs: 79
                            },
                            height: {
                                md: 13,
                                xs: 6
                            },
                            ml: 2
                        }}
                    />
                </Box>
            </Stack>
            <Stack
                //  px={8}x
                gap={4}
            >
                <Slider {...settings}
                    ref={slider}
                >
                    {
                        photos.map((photo) => (
                            <Box
                                key={photo.id}
                                sx={{
                                    //   width: 525,
                                    // height: 348,
                                    width: {
                                        md: 525,
                                        xs: 368
                                    },
                                    height: {
                                        md: 400,
                                        xs: 276
                                    },
                                    borderRadius: '16px',
                                    px: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: 10,
                                        overflow: 'hidden',

                                    }}
                                >
                                    <LazyLoadImage
                                        alt={'photo'}
                                        effect="blur"
                                        src={photo.image}
                                        width={'100%'}
                                        height={'100%'}
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 10,
                                            overflow: 'hidden',
                                        }}

                                    />
                                </Box>

                            </Box>
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
