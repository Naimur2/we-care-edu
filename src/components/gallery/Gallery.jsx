import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getCategories, getVideos } from "../../api/videos";
import line from "../../assets/images/line.svg";
import { CButton, CTypography } from "../../utility";

export default function Gallery() {
  const [category, setCategory] = React.useState(undefined);
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const { data } = useQuery("categories", getCategories);
  const [page] = React.useState(1);
  const [limit, setLimit] = React.useState(4);

  const { data: videos } = useQuery(["videos", category, page, limit], () =>
    getVideos({ category, page, limit })
  );

  const backgroundColor = isDarkMode ? "#00A6C0" : "#0090A6";
  const color = !isDarkMode ? "#fff" : "#181818";
  const hoverBackgroundColor = isDarkMode ? "#00A6C0" : "#0090C0";

  const handleSeeMore = () => {
    if (videos?.meta?.page < videos?.meta?.totalPages) {
      setLimit((page + 1) * limit);
    }
  };

  return (
    <Stack
      position={"relative"}
      zIndex={1}
      overflow={"hidden"}
      component={"section"}
      py={8}
      id="videos"
    >
      <Stack component={"div"} className="container">
        <Stack py={8} justifyContent={"center"} alignItems={"center"}>
          <Box>
            <CTypography
              color={isDarkMode ? "#fff" : "#181818"}
              fontSize={{
                xs: 24,
                md: 48,
              }}
              fontWeight={700}
              text="Gallery "
              align={"center"}
            />
            <Box
              component={"img"}
              src={line}
              sx={{
                width: {
                  md: 152,
                  xs: 79,
                },
                height: {
                  md: 13,
                  xs: 6,
                },
                ml: {
                  md: 0,
                  xs: 2,
                },
              }}
            />
          </Box>
          <Box
            mt={4}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            gap={2}
          >
            <Button
              onClick={() => setCategory(undefined)}
              variant={category === undefined ? "contained" : "outlined"}
              sx={{
                borderRadius: "6px",
                backgroundColor:
                  category === undefined ? backgroundColor : "transparent",
                borderColor: backgroundColor,
                color: category === undefined ? color : backgroundColor,
                "&:hover": {
                  bgcolor: hoverBackgroundColor,
                  color: color,
                },
              }}
            >
              All
            </Button>

            {data?.data.map((item, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    setCategory(item?._id);
                    setLimit(4);
                  }}
                  variant={category === item?._id ? "contained" : "outlined"}
                  sx={{
                    borderRadius: "6px",
                    backgroundColor:
                      category === item?._id ? backgroundColor : "transparent",
                    borderColor: backgroundColor,
                    color: category === item?._id ? color : backgroundColor,
                    "&:hover": {
                      bgcolor: hoverBackgroundColor,
                      color: color,
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Stack>

        <Stack
          //spacing={4}
          justifyContent={"center"}
          px={{
            lg: 13.5,
            xs: 2,
          }}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              // lg: ' repeat(2, 1fr) ',
              lg: " repeat(2, 1fr) ",
              xs: "1fr",
            },
            gap: "2rem",
            placeItems: "center",
            alignItems: "center",
          }}
          //  px={17}
        >
          {videos?.data?.map((item, index) => {
            const videoId = item?.url?.split("v=")[1];
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
            return (
              <Stack
                key={item.id}
                width={"100%"}
                height={"100%"}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                gap={"2rem"}
              >
                <Box
                  key={item.id}
                  component={"iframe"}
                  src={embedUrl}
                  sx={{
                    width: {
                      md: 605,
                      xs: 343,
                    },
                    height: {
                      md: 344,
                      xs: 205,
                    },
                    borderRadius: "12px",
                    bgcolor: isDarkMode ? "#0D0D0D" : "#FFFFFF",
                  }}
                />
                <CTypography
                  color={isDarkMode ? "#fff" : "#181818"}
                  fontSize={{
                    md: 24,
                    xs: 16,
                  }}
                  fontWeight={500}
                  text={item.title}
                />
              </Stack>
            );
          })}
        </Stack>

        {videos?.meta?.page < videos?.meta?.totalPages && (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            py={8}
          >
            <CButton
              btnTitle={"See More"}
              fontSize={20}
              onClick={handleSeeMore}
            />
          </Box>
        )}
      </Stack>
      <Box>
        {/* left color */}
        <Box
          sx={{
            ":after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              height: {
                md: 270,
                xs: 144,
              },
              width: {
                md: 270,
                xs: 144,
              },
              borderRadius: "50%",

              // background: 'rgba(251, 193, 49, 0.5)',
              background: isDarkMode ? "#1BE1FF" : "#01DDFF",
              // backgroundColor: '#FABB1880',
              zIndex: -1,
              opacity: 0.4,
              filter: "blur(150px)",
            },
          }}
        />
        {/* right color */}
        <Box
          sx={{
            ":after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              right: 0,
              height: {
                md: 270,
                xs: 144,
              },
              width: {
                md: 270,
                xs: 144,
              },
              borderRadius: "50%",

              background: isDarkMode
                ? "rgba(251, 193, 49, 0.5)"
                : " rgba(250, 187, 24, 0.5)",
              // backgroundColor: '#FABB1880',
              opacity: 0.4,
              filter: "blur(150px)",
            },
          }}
        />
      </Box>
    </Stack>
  );
}
