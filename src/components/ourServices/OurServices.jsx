import { Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import line from "../../assets/images/line.svg";
import { CButton, CTypography } from "../../utility";
import useModal from "../../modal/hook/useModal";

const services = [
    {
        id: 1,
        title: "Free file assessment",
        icon: "/images/icon/services/1.svg",
        content: `<p>
            When it comes to assessing files for taking university admission it becomes quite concerning. In one hand, it is not an easy step to assess an applicant’s files and apply to a subject randomly, on the other hand it is quite tricky to choose a major as English track majors are hardly available in South Korean Universities.
            But, our counsellors are expert in South Korean universities and therefore can distinguish what major to choose for you. After checking you academic (SSC, HSC/Diploma & Bachelor) score and also your study background, we can most accurately tell you which subject you should apply to which university.
            Now the question may arise why is it important to assess file for University admission? Well, the answer is “Assessing files helps you to find right major and right University for you, and later it helps getting university admission and also getting a study visa. Choosing a major or choosing a university in a unprofessional way may lead to failure of your admission and also refusal of your visa application.
            And here is WeCare Education, our dedicated and expert counsellor’s help you assess your files for completely free and with most efficiency
        </p>.
`
    },
    {
        id: 2,
        title: "Choosing a right major",
        icon: "/images/icon/services/2.svg",
        content: `<p>
            Choosing a right major and Choosing a right University is a high intensity affair simply because the University you are targeting may not have the major your expect to study. On the other hand, the major you expect to study may not offer in English track. And this is why it sometimes become a mind-stressing game. 
            WeCare Education is right there for you to choose you your target major from a wide range of University all over South Korea. And this is one of the great strength WeCare Education has.
        </p>
`
    },
    {
        id: 3,
        title: "24 hours counselling",
        icon: "/images/icon/services/3.svg",
        content: `<p>If you ask why WeCare Education is a beautiful organization, the answer would be our “counselling pattern” for our applicants. It means, we are not getting you left behind for an hour. It simply means, we are always available to answers your question, to hear your concerns and fix any problem. Our counsellors remain available during the day and throughout out night just to ensure you are getting all of solutions you need. You can get answer of your question and discuss with us by visiting our office or online. We provide both of the services for your convenience.</p>`
    },
    {
        id: 4,
        title: "Error free Application",
        icon: "/images/icon/services/4.svg",
        content: `<p>Online Application is one of the first and an important step to begin with. And especially in South Korean university application portals, application is quite complex and confusing as the websites are entirely in Korean language. But our application team is advanced and most experienced so that they can do application in a very perfect way without any single errors. It ensures all the information is relevant and correct, writing your SOP and uploading your documents. All is done in order and errorless.</p>`
    },
    {
        id: 5,
        title: "Interview Preparation",
        icon: "/images/icon/services/5.svg",
        content: `It is the most important part in getting admission to your dream University. Whatsoever you academic result and others are, if you cannot perform well in the University interview you cannot qualify for the admission. In university interview, there are some formalities, behavioral marks, presentation styles, talking styles, questions and answers. If you unfortunately miss one of them, it may lead to refusal of your admission. And that is why “performing good” in the university interview can be called “gateway to the University”. Our counsellors fully help you in interview preparation and make sure until you are confident enough to face the University interview.`
    },
    {
        id: 6,
        title: "5 Trial Interview",
        icon: "/images/icon/services/6.svg",
        content: `<p class="mb-4">We conduct 4-5 trial interviews in order to make our students perfectly ready for the university final interview. During this trial interview we teach our students every single details such as. </p>
<ul class="!list-disc !list-inside marker:bg-slate-500">
    <li>Everything about zoom/skype.</li>
    <li>How to write your name and application ID on ZOOM/SKYPE. </li>
    <li>What dress to wear?</li>
    <li>How to stand in front of the camera.</li>
    <li>We guide you about the possible question and how to answer them.</li>
    <li>We will guide you about the different question parent for different majors and different universities.</li>
    <li>We guide you how to handle an unexpected or difficult question and how to handle the situation.</li>
</ul>

<p>This trial interviews are to make you most know about the overall interview environment so that you can feel confident in your main interview and give your best.</p>
`
    },
    {
        id: 7,
        title: "Cover letter & SOP",
        icon: "/images/icon/services/7.svg",
    },
    {
        id: 8,
        title: "Visa Documents Preparation",
        icon: "/images/icon/services/8.svg",
        content: `<p>It is the final step and the most crucial step whether will you get visa or not. Wecare Education is the best of all in this case, specifically telling, we include some additional documents to your visa application that makes your visa file really worthy and reasonable.  We guide, write, revise, correct the cover letter, visa form fill-up and so on. Finally our expert counselor check each of the document one by one and ensure it is 100% error free.</p>`
    },
    {
        id: 9,
        title: "Tax & TIN Registration",
        icon: "/images/icon/services/9.svg",
    },
    {
        id: 10,
        title: "Bank Balance Guidance",
        icon: "/images/icon/services/10.svg",
    },
    {
        id: 11,
        title: "Embassy Date Reservation",
        icon: "/images/icon/services/11.svg",
    },
    {
        id: 12,
        title: "Tuition Refund",
        icon: "/images/icon/services/12.svg",
    },
    {
        id: 13,
        title: "Air Ticket Reservation",
        icon: "/images/icon/services/13.svg",
        content: `<p>As soon as our students get visa approval, we do purchase air ticket for them. And also we guide them about what to take with them and some financial/currency issues.</p>`
    },
    {
        id: 14,
        title: "Dormitory",
        icon: "/images/icon/services/14.svg",
        content: `<p>We arrange meetings with our student as soon as they come in Korea and discuss with them some fundamental issues such as things not to do in Korea and things what Korean like and dislike. We also arrange Dormitory/ living space for our students. And finally, we give them job guidance & reference such as how to apply for a job, what is job requirement and where can you get a job. After all, you should be aware of that getting a job in South Korea may take 1 to 3 month after arrival in Korea, as a new students in a new country & culture you should have patience in getting a job. So it is advised that you should take some money from Bangladesh for your better movement.</p>`
    },
    {
        id: 15,
        title: "Job Guidelines",
        icon: "/images/icon/services/15.svg",
    },
    {
        id: 16,
        title: "Korean Culture & Basics",
        icon: "/images/icon/services/16.svg",
    },
];
export default function OurServices() {
    const { isDarkMode } = useSelector((state) => state.darkMode);
    const [seletedService, setSeletedService] = React.useState(0);
    const [dataCount, setDataCount] = React.useState(6);

    const { openModal } = useModal()

    const handleSeeMoreOrLess = () => {
        if (services?.length !== dataCount) {
            setDataCount((prev) => {
                if (prev + 6 <= services?.length) {
                    return prev + 6;
                } else if (prev + 6 >= services?.length) {
                    return services?.length;
                }
                return prev;
            });
        } else {
            setDataCount(6);
        }
    };

    return (
        <Stack
            component={"section"}
            position={"relative"}
            zIndex={1}
            overflow={"hidden"}
            id="services"
        >
            <Stack
                component={"div"}
                py={{
                    md: 8,
                    xs: 0,
                }}
                justifyContent={"center"}
                alignItems={"center"}
                className="container"
            >
                <Box
                    pt={{
                        xs: 8,
                        md: 0,
                    }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                >
                    <CTypography
                        color={isDarkMode ? "#fff" : "#181818"}
                        fontSize={{
                            xs: 24,
                            md: 48,
                        }}
                        fontWeight={700}
                        text="Our Services"
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
                                xs: 6,
                                md: 14,
                            },
                        }}
                    />
                </Box>
                <Stack
                    py={8}
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            lg: " repeat(3, 1fr) ",
                            md: " repeat(2, 1fr) ",
                            xs: "repeat(2, 1fr)",
                        },
                        gap: {
                            lg: "2.5rem",
                            md: "1.5rem",
                            xs: "1.25rem",
                        },
                        width: "100%",
                    }}
                >
                    {services?.slice(0, dataCount)?.map((item, index) => (
                        <Box
                            className=""
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-delay={index * 100}
                            sx={{
                                width: "100%",
                                height: "100%",
                            }}
                            onClick={() => {
                                if (item.content) {
                                    openModal("ServiceDetails", {
                                        title: item.title,
                                        description: item.content,
                                    });
                                }
                            }}
                        >
                            <Stack
                                width={"100%"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                height={"100%"}
                                className="hover-scale"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <Stack
                                    key={item.id}
                                    sx={{
                                        display: "inline-block",
                                        width: "100%",
                                        height: "100%",
                                        cursor: "pointer",
                                        border:
                                            seletedService === item.id
                                                ? "2px solid #0090A6"
                                                : null,
                                        boxShadow:
                                            "0px 8px 56px rgba(0, 0, 0, 0.08)",
                                        boxSizing: "border-box",
                                        backgroundColor: isDarkMode
                                            ? "#222222"
                                            : "#FFFFFF",
                                        borderRadius: "16px",
                                        py: {
                                            xl: 8,
                                            md: 4,
                                            xs: 3,
                                        },
                                    }}
                                    onClick={() => setSeletedService(item.id)}
                                >
                                    <Stack
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                        gap={4}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "100%",
                                            height: "100%",
                                            gap: {
                                                xl: 6,
                                                md: 4,
                                                xs: 2,
                                            },
                                        }}
                                    >
                                        <Box
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            sx={{
                                                width: "100%",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        // alt=""
                                        >
                                            {/* {item.icon} */}
                                            <Box
                                                component={"img"}
                                                src={item?.icon}
                                                alt={item?.title}
                                                sx={{
                                                    width: {
                                                        md: "90px",
                                                        xs: "50px",
                                                    },
                                                    height: {
                                                        md: "90px",
                                                        xs: "50px",
                                                    },
                                                    resizeMode: "contain",
                                                }}
                                            />
                                        </Box>

                                        <CTypography
                                            color={
                                                isDarkMode
                                                    ? "#FFFFFF"
                                                    : "#12141D"
                                            }
                                            fontSize={{
                                                md: 24,
                                                xs: 16,
                                            }}
                                            fontWeight={500}
                                            text={item.title}
                                            align={"center"}
                                            maxWidth={{
                                                md: 150,
                                                xs: 120,
                                            }}
                                        />
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    ))}
                </Stack>

                <Stack pt={2}>
                    <CButton
                        onClick={handleSeeMoreOrLess}
                        btnTitle={
                            services?.length !== dataCount
                                ? "See More"
                                : "See Less"
                        }
                        fontSize={{
                            md: 20,
                            xs: 16,
                        }}
                    />
                </Stack>
            </Stack>

            {/* right color */}
            <Box
                sx={{
                    ":after": {
                        content: '""',
                        position: "absolute",
                        bottom: {
                            md: 150,
                            xs: 80,
                        },
                        right: {
                            md: 150,
                            xs: 80,
                        },
                        height: {
                            md: 298,
                            xs: 161,
                        },
                        width: {
                            md: 298,
                            xs: 161,
                        },
                        background: isDarkMode ? "#1BE1FF" : "#01DDFF",
                        opacity: 0.4,
                        filter: "blur(150px)",
                        borderRadius: "50%",
                    },
                }}
            />
            {/* left color */}
            <Box
                sx={{
                    ":after": {
                        content: '""',
                        position: "absolute",
                        top: {
                            md: 150,
                            xs: 80,
                        },
                        left: {
                            md: 150,
                            xs: 80,
                        },
                        height: {
                            md: 298,
                            xs: 161,
                        },
                        width: {
                            md: 298,
                            xs: 161,
                        },
                        // background: 'rgba(251, 193, 49, 0.5)',
                        background: isDarkMode
                            ? "rgba(251, 193, 49, 0.5)"
                            : " rgba(250, 187, 24, 0.5)",

                        // backgroundColor: '#FABB1880',
                        zIndex: -1,
                        opacity: 0.4,
                        filter: "blur(150px)",
                    },
                }}
            />
        </Stack>
    );
}
