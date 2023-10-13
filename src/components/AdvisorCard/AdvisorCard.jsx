import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AdvisorCard = ({
  name = "Saadat Mahboob",
  advisorImageUrl = "/images/advisor/Picture1.jpg",
  facebookUrl = "https://www.facebook.com/cricketer.saadat.9?mibextid=ZbWKwL",
  viberUrl = "https://www.facebook.com/cricketer.saadat.9?mibextid=ZbWKwL",
  description = `I am Saadat Mahboob.I have 5 years of working experience.Currently
  working at Wecare Education as Student Counselor.`,
}) => {
  return (
    <div>
      <Box
        sx={{
          padding: "24px",
          width: "100%",
          maxWidth: "434px",
          borderRadius: "10px",
          boxShadow: "0px 8px 56px 0px rgba(0, 0, 0, 0.08)",
          backgroundColor: "white",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
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
              sx={{ fontSize: "24px", fontWeight: 600, lineHeight: "normal" }}
            >
              {name}
            </Typography>

            <Box sx={{ display: "flex", gap: "12px", marginTop: "8px" }}>
              <Box
                href={facebookUrl}
                sx={{
                  padding: "8px",
                  backgroundColor: "#ECF7F5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  borderRadius: "100%",
                }}
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
                href={viberUrl}
                sx={{
                  padding: "8px",
                  backgroundColor: "#EEEFFD",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  borderRadius: "100%",
                }}
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

        <Typography sx={{ marginTop: "24px" }}>{description}</Typography>
      </Box>
    </div>
  );
};

export default AdvisorCard;
