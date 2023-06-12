import { Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import line from '../../assets/images/line.svg';
import ArrowRight from '../../assets/svg/ArrowRight';
import MinusIcon from "../../assets/svg/MinusIcon";
import PlusIcon from "../../assets/svg/PlusIcon";
import { CCollapse, CTypography } from "../../utility";
import Arrow from "../../assets/svg/Arrow"

const questions = [
    {
        id: 1,
        question: 'How does Safespace work?',
        answer: 'Safespace is an online platform that provides mental health support and resources to individuals.'
    },
    {
        id: 2,
        question: 'How do I get started?',
        answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis doloribus minima temporibus mollitia voluptate obcaecati odio magni illo aliquid itaque.'
    }, {
        id: 3,
        question: 'Sed ut perspiciatis unde omnis iste natus error sit?',
        answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, voluptatibus!'
    },
    {
        id: 4,
        question: 'Lorem ipsum dolor sit amet.',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, facilis.'
    },
    {
        id: 5,
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolor?'
    },
    {
        id: 6,
        question: 'Lorem ipsum dolor sit amet.',
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, odio blanditiis minus eligendi atque possimus.'
    }
]
export default function Faq() {
    const { isDarkMode } = useSelector(state => state.darkMode);
    const [selected, setSelected] = React.useState(null)
    return (
        <Stack py={8}
            id={'faqs'}
            position={'relative'}
            overflow={'hidden'}
            zIndex={1}
            component={'section'}

        >
            <Stack
                component={'div'}
                className="container"
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
                                xs: 161
                            },
                            width: {
                                xs: 161
                            },
                            // background: 'rgba(251, 193, 49, 0.5)',
                            background: isDarkMode ? '#1BE1FF' : '#01DDFF',
                            // backgroundColor: '#FABB1880',
                            zIndex: -1,
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
                            left: 0,
                            bottom: 0,
                            height: {
                                xs: 161
                            },
                            width: {
                                xs: 161
                            },
                            background: isDarkMode ? 'rgba(251, 193, 49, 0.5)' : ' rgba(250, 187, 24, 0.5)',
                            // backgroundColor: '#FABB1880',
                            opacity: 0.4,
                            filter: 'blur(150px)',

                        }
                    }}
                />

                <Stack >
                    <Stack
                        justifyContent={'center'}
                        alignItems={'center'}
                        spacing={2}
                        pb={8}
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                    >
                        <Box >
                            <CTypography
                                color={isDarkMode ? '#fff' : '#181818'}
                                fontSize={{
                                    md: 48,
                                    xs: 24
                                }}
                                fontWeight={700}
                                text='Frequently asked questions'
                                align={'center'}
                            />
                            <Box
                                component={'img'}
                                src={line}
                                sx={{
                                    width: {
                                        md: 236,
                                        xs: 79
                                    },
                                    height: {
                                        md: 11,
                                        xs: 6
                                    },
                                    ml: {
                                        md: 55,
                                        xs: 28,
                                    }
                                }}
                            />


                        </Box>
                        <CTypography
                            color={isDarkMode ? '#868686' : '#363636'}
                            fontSize={{
                                md: 18,
                                xs: 14
                            }}
                            px={{
                                xs: 10,
                                md: 0
                            }}
                            fontWeight={400}
                            align={'center'}
                            text={' Please contact Safespace team for any questions you may have.'}

                        />
                        <Stack
                            direction={'row'}
                            gap={2}
                            alignItems={'center'}
                            justifyContent={'center'}
                            component={'a'}
                            href={'#more-faqs'}

                        >

                            <Box>
                                <CTypography
                                    color={isDarkMode ? '#00A6C0' : '#0090A6'}
                                    fontSize={{
                                        md: 18,
                                        xs: 14
                                    }}
                                    fontWeight={400}
                                    align={'center'}
                                    text='Read more FAQ'
                                />
                            </Box>
                            <Box>
                                <Arrow
                                    color={isDarkMode ? '#00A6C0' : '#0090A6'}
                                 />
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack
                        //spacing={4}
                        // justifyContent={'center'}
                        px={{
                            md: 13.5,
                            xs: 2,
                        }}
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                lg: ' repeat(2, 1fr) ',
                                md: ' repeat(1, 1fr) ',
                                xs: '1fr'
                            },
                            gap: '1.87rem',
                        }}
                    //  px={17}
                    >
                        {
                            questions.map((item, index) => (
                                <Stack key={item.id}
                                    width={'100%'}
                                    height={'100%'}
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    data-aos-delay={index * 100}
                                >
                                    <Stack
                                        sx={{
                                            boxShadow: '0px 8px 56px rgba(0, 0, 0, 0.08)',
                                            borderRadius: '10px',
                                            p: 2,
                                            py: {
                                                md: '2.37rem',
                                                xs: '1.25rem',
                                            },
                                            background: isDarkMode ? '#222222' : '#fff',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => {
                                            if (selected === index) {
                                                setSelected(null)
                                            } else {
                                                setSelected(index)
                                            }
                                        }}
                                    >
                                        <Stack
                                            direction={'row'}
                                            justifyContent={'space-between'}
                                            alignItems={'center'}
                                            px={{
                                                md: 4,
                                                xs: 0
                                            }}
                                            mr={{
                                                xs: 2,
                                                md: 0
                                            }}
                                            gap={2}
                                        >
                                            <CTypography
                                                color={isDarkMode ? '#fff' : '#181818'}
                                                fontSize={{
                                                    md: 24,
                                                    xs: 16
                                                }}
                                                lineHeight={'30px'}
                                                fontWeight={600}
                                                text={item.question}
                                            />
                                            {
                                                selected === index ? (
                                                    <Box
                                                        sx={{
                                                            width: {
                                                                md: 28,
                                                                xs: 17
                                                            },
                                                            height: {
                                                                md: 28,
                                                                xs: 17
                                                            },

                                                        }}

                                                    >
                                                        <MinusIcon />
                                                    </Box>

                                                ) : (
                                                    <Box
                                                        sx={{
                                                            width: {
                                                                md: 28,
                                                                xs: 17
                                                            },
                                                            height: {
                                                                md: 28,
                                                                xs: 17
                                                            },
                                                        }}

                                                    >
                                                        <PlusIcon />
                                                    </Box>

                                                )
                                            }
                                        </Stack>
                                        <CCollapse
                                            in={selected === index}

                                        >
                                            <CTypography
                                                color={isDarkMode ? '#ffffff80' : '#18181880'}
                                                fontSize={{
                                                    md: 16,
                                                    xs: 12
                                                }}
                                                py={2}
                                                fontWeight={400}
                                                text={item.answer}
                                                px={{
                                                    md: 4,
                                                    xs: 0
                                                }}
                                            />
                                        </CCollapse>

                                    </Stack>
                                </Stack>
                            ))
                        }
                    </Stack>
                </Stack>
            </Stack>

        </Stack >
    )
}
