import { Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import fingirPrint from '../../assets/images/fingirPrint.svg';
import line from '../../assets/images/line.svg';
import { CTypography } from "../../utility";
const programs = [
    "Business", "Economics", "Education", "Global Studies", "Engineering",
    "Graphic Design & Web Developments", "Media Communication",
    "Health Sciences", "Information/Computter Science", "Sustainability"
]
export default function FindProgram() {
    const { isDarkMode } = useSelector(state => state.darkMode);
    const [selected, setSelected] = React.useState('')
    return (
        <Stack
            sx={{
                position: 'relative',
                backgroundColor: isDarkMode ? '#141414' : '#F3FCFD',
                zIndex: 1,
                overflow: 'hidden',
                pb: 8
            }}
        >
            <Stack
                component={'div'}
                className="container"
            >
                <Stack
                    justifyContent={'center'}
                    alignItems={'center'}
                    py={4}
                    position='relative'
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                          
                >
                    <Box>
                        <CTypography
                            color={isDarkMode ? '#fff' : '#181818'}
                            fontSize={{
                                xs: 24,
                                md: 48
                            }}
                            fontWeight={700}
                            text='Find a program'
                            align={'center'}
                        />
                        <Box
                            component={'img'}
                            src={line}
                            sx={{
                                width: {
                                    md: 198,
                                    xs: 90
                                },
                                height: {
                                    md: 15,
                                    xs: 8
                                },
                                ml: {
                                    md: 20,
                                    xs: 10,
                                }
                            }}
                        />

                    </Box>
                    <CTypography
                        color={isDarkMode ? '#868686' : '#363636'}
                        fontSize={16}
                        fontWeight={400}
                        align={'center'}
                        py={2}
                        px={{
                            xs: 4,
                            sm: 0
                        }}
                    >
                        WeCare Education offers a comprehensive range of services, from admissions support <br /> to visa assistance, to ensure a smooth and stress-free application <br />
                        process for our students.
                    </CTypography>
                    <Box
                        sx={{
                            ':after': {
                                content: '""',
                                // display: 'block',
                                backgroundImage: `url(${fingirPrint})`,
                                backgroundRepeat: "no-repeat",
                                mixBlendMode: "multiply",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: 'absolute',
                                bottom: -65,
                                right: 55,
                                width: 140,
                                height: 180,
                                overflow: 'hidden',
                                zIndex: -1,
                                display: {
                                    xs: 'none',
                                    lg: 'block'
                                }
                            }
                        }}
                    />
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                    flexWrap="wrap"
                    gap={2}
                >
                    {
                        programs.map((item) => (
                            <Stack key={Math.random() * 1000 + 1 + item.toString() }
                                sx={{
                                    display: 'inline-block',
                                    //minWidth: '200px',
                                    cursor: 'pointer',
                                    px: 4,
                                    py: 2,

                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: 'transparent',
                                    boxShadow: isDarkMode ? '0px 8px 56px rgba(0, 0, 0, 0.08)' : '0px 8px 56px rgba(0, 0, 0, 0.08)',
                                    boxSizing: 'border-box',
                                    backgroundColor: isDarkMode ? '#0D0D0D' : '#FFFFFF',
                                    borderRadius: '10px',
                                    ':is(:hover,:focus)': {
                                        border: isDarkMode ? "1px solid #00A6C0" : '1px solid #0090A6',
                                    }
                                }}
                                onClick={() => setSelected(item)}
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                            >
                                <CTypography
                                    color={isDarkMode ? '#fff' : '#181818'}
                                    fontSize={{
                                        md: 18,
                                        xs: 16
                                    }}
                                    fontWeight={600}
                                    text={item}
                                    align={'center'}
                                />
                            </Stack>

                        ))
                    }
                </Stack>
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
                            background: isDarkMode ? ' rgba(251, 193, 49, 0.5)' : ' rgba(250, 187, 24, 0.5)',
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

            </Stack>
        </Stack>
    )

}
