import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AdvisorCard = ({
    name = "Saadat Mahboob",
    advisorImageUrl = "/images/advisor/Picture1.jpg",
    facebook = "https://www.facebook.com/cricketer.saadat.9?mibextid=ZbWKwL",
    whatsapp = "https://www.facebook.com/cricketer.saadat.9?mibextid=ZbWKwL",
    description = `I am Saadat Mahboob.I have 5 years of working experience.Currently
  working at Wecare Education as Student Counselor.`,
}) => {
    return (
        <Box
            sx={{
                width: "100%",
                padding: "1rem",
                minHeight: "20rem",
            }}
        >
            <Box
                sx={{
                    padding: "24px",
                    width: "100%",
                    borderRadius: "10px",
                    boxShadow: "0px 8px 56px 0px rgba(0, 0, 0, 0.08)",
                    backgroundColor: "white",
                    height: "100%",
                }}
            >
                <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                    <LazyLoadImage
                        src={advisorImageUrl}
                        alt={"advisor"}
                        effect="blur"
                        width={"75px"}
                        height={"75px"}
                        style={{ borderRadius: "8px" }}
                    />

                    <Box>
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: 600,
                                lineHeight: "normal",
                            }}
                        >
                            {name}
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                gap: "12px",
                                marginTop: "8px",
                            }}
                        >
                            <Box
                                href={facebook}
                                sx={{
                                    padding: "8px",
                                    backgroundColor: "#ECF7F5",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    borderRadius: "100%",
                                }}
                                component={"a"}
                                target="_blank"
                            >
                                <LazyLoadImage
                                    src={"/images/icon/facebook_icon.svg"}
                                    alt={"advisor"}
                                    effect="blur"
                                    width={"24px"}
                                    height={"24px"}
                                />
                            </Box>

                            <Box
                                href={`https://wa.me/${whatsapp}`}
                                sx={{
                                    padding: "8px",
                                    backgroundColor: "#EEEFFD",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    borderRadius: "100%",
                                }}
                                component={"a"}
                                target="_blank"
                            >
                                <LazyLoadImage
                                    src={"/images/icon/viber_icon.svg"}
                                    alt={"advisor"}
                                    effect="blur"
                                    width={"24px"}
                                    height={"24px"}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Typography sx={{ marginTop: "24px" }}>
                    {description}
                </Typography>
            </Box>
        </Box>
    );
};

export default AdvisorCard;
