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
      question: "Which program do you work for?",
      answer: "I work as a virtual assistant language model developed by OpenAI."
    },
    {
      id: 2,
      question: "Is it legal to do a part-time job as a student in South Korea?",
      answer: "Yes, international students in South Korea can work part-time, but there are restrictions on the number of hours you can work. You should check with your specific visa and university for the latest regulations."
    },
    {
      id: 3,
      question: "What is the IELTS requirements?",
      answer: "The IELTS requirements for admission to South Korean universities may vary. Some universities require a minimum IELTS score, while others may accept alternative English proficiency tests. It's important to check the specific requirements of the university and program you are interested in."
    },
    {
      id: 4,
      question: "Is Duolingo acceptable in South Korea?",
      answer: "Some South Korean universities accept the Duolingo English Test as an alternative to IELTS or TOEFL for English language proficiency. However, the acceptance may vary, so you should confirm with the university you're applying to."
    },
    {
      id: 5,
      question: "What is the average living cost in South Korea as a student?",
      answer: "The average living cost in South Korea for students can vary depending on the city and lifestyle. On average, it may range from $800 to $1,500 per month, covering accommodation, food, transportation, and other expenses."
    },
    {
      id: 6,
      question: "Is it valid to do a driving job in South Korea?",
      answer: "Driving jobs for international students in South Korea may have specific requirements and restrictions. You should check with local authorities and your university for the latest regulations."
    },
    {
      id: 7,
      question: "How much time can a student work in a week?",
      answer: "The number of hours a student can work in South Korea varies based on their visa type. Generally, student visa holders can work part-time up to 20 hours per week during the academic semester and full-time during breaks."
    },
    {
      id: 8,
      question: "Can I go to another country from South Korea after completing my graduation?",
      answer: "Yes, you can travel to another country from South Korea after completing your graduation. However, it's important to ensure that you have the necessary visas and documentation for your destination."
    },
    {
      id: 9,
      question: "What is the maximum scholarship amount for the bachelor & master's program?",
      answer: "Scholarship amounts for bachelor's and master's programs in South Korea can vary widely. Some scholarships may cover tuition fees and provide a stipend, while others may be partial scholarships. The maximum amount depends on the specific scholarship program and university."
    },
    {
      id: 10,
      question: "Can I get my tuition fees refund if my visa is denied?",
      answer: "Tuition fee refund policies vary among South Korean universities. Some universities offer partial or full tuition fee refunds if your visa is denied, while others may have different refund policies. It's important to check the university's refund policy before applying."
    },
    {
      id: 11,
      question: "How much intake in South Korean universities?",
      answer: "Intake periods in South Korean universities can vary, but there are typically two main intakes: spring and fall. Some programs may also have additional intakes, so you should check with the specific university and program for their intake schedule."
    },
    {
      id: 12,
      question: "Does Wecare Education charge for file opening and assessments?",
      answer: "Wecare Education's policies may vary, and they may or may not charge for file opening and assessments. It's best to contact Wecare Education directly to inquire about their specific policies and fees."
    },
    {
      id: 13,
      question: "Can I get a 100% scholarship for a bachelor's program?",
      answer: "While some universities in South Korea offer full scholarships for exceptional international students, getting a 100% scholarship for a bachelor's program is highly competitive. Scholarships are typically based on academic merit, and you should check with individual universities for specific scholarship opportunities."
    },
    {
      id: 14,
      question: "How much is the study gap acceptable for the bachelor's and for master's?",
      answer: "The acceptable study gap for admission to South Korean universities can vary. Many universities do not specify a maximum study gap, but it's essential to check the specific admission requirements of the university and program you're interested in."
    },
    {
      id: 15,
      question: "Can I study at any universities in South Korea?",
      answer: "You can study at various universities in South Korea, but admission requirements and eligibility criteria may vary. You need to apply to universities that offer programs compatible with your educational background and qualifications."
    },
    {
      id: 16,
      question: "Can I apply without IELTS?",
      answer: "Some South Korean universities may accept applications without IELTS, especially if you meet other English proficiency criteria. You should check the specific admission requirements of the university and inquire about alternative English proficiency tests."
    },
    {
      id: 17,
      question: "Can I apply for a spouse visa?",
      answer: "International students in South Korea may be eligible to apply for a spouse visa if they are married to a South Korean national or a resident with a valid visa. The specific requirements and procedures for obtaining a spouse visa may vary, so it's important to consult with immigration authorities."
    }
  ];
  

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
