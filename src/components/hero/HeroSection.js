import { Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import heroCrossShape from "../../assets/images/heroCrossShape.svg";
import fingirPrint from "../../assets/images/fingirPrint.svg";
import { CTypography } from "../../utility";
import HeroForm from "../inputForm/HeroForm";

export default function HeroSection() {
    const { isDarkMode } = useSelector(state => state.darkMode);

    return (
        <Stack
            bgcolor={isDarkMode ? '#141414' : '#F3FCFD'}
            component={'section'}
            position={'relative'}
            overflow={'hidden'}
            zIndex={1}
        >
            <Stack
                component={'div'}
                className="container"
                position={'relative'}
                overflow={'hidden'}

                pb={{
                    md: 0,
                    xs: 8
                }}
            >
                {/* round shape */}
                <Box
                    sx={{
                        ':after': {
                            content: '""',
                            position: 'absolute',
                            background: isDarkMode ? 'linear-gradient(299.11deg, #171717 32.98%, rgba(23, 23, 23, 0) 81.28%)' : 'linear-gradient(299.11deg, #FFFFFF 32.98%, rgba(255, 255, 255, 0) 81.28%)',
                            width: {
                                md: 435,
                                xs: 233,
                            },
                            height: {
                                md: 444,
                                xs: 238,
                            },
                            top: {
                                md: -133,
                                xs: 8,
                            },
                            left: {
                                md: 52,
                                xs: -44,
                            },
                            borderRadius: '50%',
                            // opacity: 0.4,
                        }
                    }}
                />
                {/* right shape */}



                <div

                >

                    <Stack
                        px={{
                            md: 13.5,
                            xs: 2,
                        }}
                        py={{
                            lg: 12,
                            xs: 4
                        }}
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                lg: ' repeat(2, 1fr) ',
                                md: ' repeat(1, 1fr) ',
                                xs: '1fr'
                            },
                            gap: '2rem',
                        }}
                    >

                        <Stack
                            sx={{
                                position: 'relative',
                            }}
                            width={'100%'}
                            height={'100%'}
                        >


                            <Stack spacing={4}>

                                <CTypography
                                data-aos="zoom-out-up"
                                    color={isDarkMode ? '#fff' : "#171017"}
                                    fontFamily="Helvetica Now Display"
                                    fontSize={{
                                        lg: 52,
                                        xs: 34
                                    }}
                                    fontWeight={800}
                                    lineHeight={'140%'}
                                    textAlign={{
                                        lg: 'left',
                                        xs: 'center'
                                    }}
                                >

                                    Book A Free <br />
                                    <font color={isDarkMode ? '#00A6BF' : '#0090A6'}
                                    >Consultation</font> {''}
                                    With
                                    <br />
                                    Academic Advisors
                                </CTypography>
                                <CTypography
                                    data-aos="zoom-out-up"
                                    fontSize={{
                                        xs: 14,
                                        md: 18
                                    }}
                                    color={isDarkMode ? '#868686' : '#535353'}
                                    fontWeight={400}
                                    textAlign={{
                                        lg: 'left',
                                        xs: 'center'
                                    }}
                                >
                                    We are a trusted agency in Bangladesh, recruiting <br /> students for South Korean and Romanian universities with <br /> a commitment to transparency and professionalism.
                                </CTypography>
                            </Stack>
                        </Stack>

                        <Stack
                            width={'100%'}
                            height={'100%'}
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                        >
                            <HeroForm isDarkMode={isDarkMode} />

                        </Stack>
                    </Stack>
                </div>
                {/* finger shape */}
                <Box
                    sx={{
                        ':after': {
                            content: '""',
                            // display: 'block',
                            backgroundImage: `url(${fingirPrint})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: 'absolute',
                            mixBlendMode: 'multiply',
                            bottom: {
                                lg: -65,
                                xs: -30,
                            },
                            left: 10,
                            width: {
                                lg: 191,
                                xs: 74,
                            },
                            height: {
                                lg: 200,
                                xs: 77,
                            },
                        }
                    }}
                />
            </Stack>
            {/* left color shape */}
            <Box
                sx={{
                    ':after': {
                        content: '""',
                        position: 'absolute',
                        bottom: {
                            md: -150,
                            xs: -80
                        },
                        left: {
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

                        background: isDarkMode ? '#1BE1FF' : '#01DDFF',
                        borderRadius: '50%',

                        zIndex: -1,
                        opacity: 0.4,
                        filter: 'blur(150px)',

                    }
                }}
            />
            {/* cross shape */}
            <Box
                sx={{
                    ':after': {
                        content: '""',
                        // display: 'block',
                        backgroundImage: `url(${heroCrossShape})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: 'absolute',
                        top: {
                            md: 0,
                            xs: 0
                        },
                        right: {
                            md: 0,
                            xs: 10
                        },
                        width: {
                            md: 200,
                            xs: 100

                        },
                        height: {
                            md: 250,
                            xs: 140
                        },
                    }
                }}
            />
            {/* rigth color shape */}
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
        </Stack >
    )
}
