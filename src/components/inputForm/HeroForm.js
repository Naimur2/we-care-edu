import { Autocomplete, Box, Grid, Stack } from "@mui/material";
import React from "react";
import arrowDesktop from "../../assets/images/arrowDesktop.svg";
import arrowMobile from "../../assets/images/arrowMobile.svg";
import squreShape from "../../assets/images/squreShape.svg";
import { CButton, CCard } from "../../utility";
import Input from "../../utility/Input";
import PhoneNumberPicker from "../phoneNumberPicker/PhoneNumberPicker";
import useModal from "../../modal/hook/useModal";

export default function HeroForm({ isDarkMode }) {
      const { openModal } = useModal();

    return (
      <Stack
        sx={{
          position: "relative",
          pt: {
            xs: 10,
            lg: 0,
          },
        }}
      >
        {/* mini screen arrow */}
        <Box
          sx={{
            ":after": {
              content: '""',
              // display: 'block',
              backgroundImage: `url(${arrowMobile})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              top: -40,
              left: -20,
              width: 120,
              height: 130,
              display: {
                xs: "block",
                lg: "none",
              },
            },
          }}
        />
        <CCard
          sx={{
            bgcolor: isDarkMode ? "#0D0D0D" : "#FFFFFF",
            boxShadow: isDarkMode
              ? "0px 16px 32px rgba(0, 55, 61, 0.09)"
              : "0px 16px 32px rgba(0, 55, 61, 0.09)",
            borderRadius: "16px",
            py: 4,
            px: 2,
            //position: 'relative',
            // zIndex: 2,
          }}
        >
          <Box component="form" onSubmit={(e) => e.preventDefault()}>
            <Grid container spacing={2} py={4}>
              <Grid item xs={12} md={6}>
                <Input label="First Name" placeholder="Enter your first name" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input label="Last Name" placeholder="Enter your last name" />
              </Grid>
              <Grid item xs={12} md={6}>
                <PhoneNumberPicker isDarkMode={isDarkMode} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={["Category 1", "Category 2", "Category 3"]}
                  // size="small"
                  sx={{
                    p: 0,
                  }}
                  renderInput={(params) => (
                    <Input
                      {...params}
                      label="Category "
                      placeholder="Select category"
                      InputProps={{
                        ...params.InputProps,
                        sx: { borderRadius: "10px" },
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Stack>
              <CButton
                btnTitle={"Book Now"}
                type={"submit"}
                fontSize={{
                  xs: 12,
                  md: 14,
                  lg: 16,
                }}
                onClick={() => openModal("PersonalInfo")}
              />
            </Stack>
          </Box>
          <Box
            sx={{
              ":after": {
                content: '""',
                // display: 'block',
                backgroundImage: `url(${squreShape})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                bottom: {
                  md: -41,
                  xs: -20,
                },
                right: {
                  md: -40,
                  xs: -10,
                },
                // bottom: -38,
                // right: -38,
                width: {
                  md: 100,
                  xs: 50,
                },
                height: {
                  md: 100,
                  xs: 50,
                },
                overflow: "hidden",
                zIndex: -1,
              },
            }}
          />
        </CCard>
        {/* big screen shape arrow */}
        <Box
          sx={{
            ":after": {
              content: '""',
              // display: 'block',
              backgroundImage: `url(${arrowDesktop})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              bottom: -40,
              left: -140,
              width: 120,
              height: 130,
              display: {
                xs: "none",
                lg: "block",
              },
              // on scroll animation move top and bottom
              // '@keyframes moveUpDown': {
              //     '0%': {
              //         transform: 'translateY(0px)'
              //     },
              //     '50%': {
              //         transform: 'translateY(-10px)'
              //     },
              //     '100%': {
              //         transform: 'translateY(0px)'
              //     }
              // },
              // animation: 'moveUpDown 2s infinite',
            },
          }}
        />
      </Stack>
    );
}
