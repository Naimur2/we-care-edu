import { Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import line from '../../assets/images/line.svg';
import { CButton, CTypography } from "../../utility";
const video = [
    {
        id: 1,
        title: 'Best Education System',
        url: 'https://www.youtube.com/embed/tgbNymZ7vqY'
    },
    {
        id: 2,
        title: 'Best Education System',
        url: 'https://www.youtube.com/embed/tgbNymZ7vqY'
    },
    {
        id: 3,
        title: 'Best Education System',
        url: 'https://www.youtube.com/embed/tgbNymZ7vqY'
    },
    {
        id: 4,
        title: 'Best Education System',
        url: 'https://www.youtube.com/embed/tgbNymZ7vqY'
    }
]
export default function Gallery() {
    const { isDarkMode } = useSelector(state => state.darkMode);
    return (
        <Stack
            position={'relative'}
            zIndex={1}
            overflow={'hidden'}
            component={'section'}
            py={8}
        >
            <Stack
                component={'div'}
                className="container"
            >

                <Stack py={8}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Box>
                        <CTypography
                            color={isDarkMode ? '#fff' : '#181818'}
                            fontSize={{
                                xs: 24,
                                md: 48
                            }}
                            fontWeight={700}
                            text='Gallery '
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
                                ml: {
                                    md: 0,
                                    xs: 2
                                },
                            }}
                        />


                    </Box>
                </Stack>
                <Stack
                    //spacing={4}
                    justifyContent={'center'}
                    px={{
                        lg: 13.5,
                        xs: 2,
                    }}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            // lg: ' repeat(2, 1fr) ',
                            lg: ' repeat(2, 1fr) ',
                            xs: '1fr'
                            
                        },
                        gap: '2rem',
                        placeItems: 'center',
                        alignItems: 'center',
                    }}
                //  px={17}
                >
                    {
                        video.map((item, index) => (
                            <Stack key={item.id}
                                width={'100%'}
                                height={'100%'}
                                sx={{
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                gap={'2rem'}
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                                data-aos-delay={index * 100}
                            >
                                <Box key={item.id}
                                    component={'iframe'}
                                    src={item.url}
                                    sx={{
                                        width: {
                                            md: 605,
                                            xs: 343
                                        },
                                        height: {
                                            md: 344,
                                            xs: 205
                                        },
                                        borderRadius: '12px',
                                        bgcolor: isDarkMode ? '#0D0D0D' : '#FFFFFF'
                                    }}
                                />
                                <CTypography
                                    color={isDarkMode ? '#fff' : '#181818'}
                                    fontSize={{
                                        md: 24,
                                        xs: 16

                                    }}
                                    fontWeight={500}
                                    text={item.title}
                                />
                            </Stack>
                        ))
                    }
                </Stack>

                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    py={8}
                >
                    <CButton
                        btnTitle={'See More'}
                        fontSize={20}
                    />
                </Box>

            </Stack>
            <Box>
                {/* left color */}
                <Box
                    sx={{
                        ':after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: {
                                md: 270,
                                xs: 144
                            },
                            width: {
                                md: 270,
                                xs: 144
                            },
                            borderRadius: '50%',

                            // background: 'rgba(251, 193, 49, 0.5)',
                            background: isDarkMode ? '#1BE1FF' : '#01DDFF',
                            // backgroundColor: '#FABB1880',
                            zIndex: -1,
                            opacity: 0.4,
                            filter: 'blur(150px)',

                        }
                    }}
                />
                {/* right color */}
                <Box
                    sx={{
                        ':after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            height: {
                                md: 270,
                                xs: 144
                            },
                            width: {
                                md: 270,
                                xs: 144
                            },
                            borderRadius: '50%',

                            background: isDarkMode ? 'rgba(251, 193, 49, 0.5)' : ' rgba(250, 187, 24, 0.5)',
                            // backgroundColor: '#FABB1880',
                            opacity: 0.4,
                            filter: 'blur(150px)',

                        }
                    }}
                />
            </Box>
        </Stack>
    )
}
