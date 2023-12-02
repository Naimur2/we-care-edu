import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";

const AdvisorCard = ({
  name = "Saadat Mahboob",
  advisorImageUrl = "/images/advisor/Picture1.jpg",
  facebook = "",
  whatsapp = "",
  description = ``,
}) => {
  const { isDarkMode } = useSelector((state) => state.darkMode);

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
          backgroundColor: isDarkMode ? "#0D0D0D" : "#fff",
          height: "100%",
          minHeight: "20rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img
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
                color: isDarkMode ? "#868686" : "#535353" 
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
                <img
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
                <img
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

        <Typography
          sx={{ marginTop: "24px", color: isDarkMode ? "#868686" : "#535353" }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default AdvisorCard;
