import { Box, Button, Stack } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";

import line from "../../assets/images/line.svg";
import { CTypography } from "../../utility";
import { photosApiSlice, useGetPhotosQuery } from "../../store/apis/photosApi";

const categories = [
  {
    _id: 0,
    name: "All",
    value: undefined,
  },
  {
    _id: 1,
    name: "Visa Success",
    value: "visa",
  },
  {
    _id: 2,
    name: "Educational Images",
    value: "education",
  },
];

export default function Photos() {
  const [category, setCategory] = React.useState(undefined);
  const dispatch = useDispatch();

  const args = {
    category: "photos",
    subCategory: category ? category : undefined,
    page: 1,
    limit: 6,
  };

  


  const { data } = useGetPhotosQuery(args, {
    refetchOnMountOrArgChange: true,
  });

  const { isDarkMode } = useSelector((state) => state.darkMode);

  const backgroundColor = isDarkMode ? "#00A6C0" : "#0090A6";
  const color = !isDarkMode ? "#fff" : "#181818";
  const hoverBackgroundColor = isDarkMode ? "#00A6C0" : "#0090C0";

  const handleSeeMore = async () => {
    if (Number(data?.meta?.page) < Number(data?.meta?.maximumPage)) {
      try {
        const res = await dispatch(
          photosApiSlice.endpoints.getMorePhotos.initiate({
            category: "photos",
            subCategory: category ? category : undefined,
            page: Number(data?.meta?.page) + 1,
            limit: 6,
          })
        ).unwrap();

        if (res) {
          dispatch(
            photosApiSlice.util.updateQueryData("getPhotos", args, (draft) => {
              draft.data = [...draft.data, ...res.data];
              draft.meta = res.meta;
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Stack
      bgcolor={isDarkMode ? "#141414" : "#F3FCFD"}
      pb={8}
      position={"relative"}
      zIndex={1}
      overflow={"hidden"}
      id="gphotos"
    >
      {/* right color */}
      <Box
        sx={{
          ":after": {
            content: '""',
            position: "absolute",
            top: {
              md: -150,
              xs: -80,
            },
            right: {
              md: -150,
              xs: -80,
            },
            height: {
              md: 298,
              xs: 161,
            },
            width: {
              md: 298,
              xs: 161,
            },
            background: isDarkMode
              ? "rgba(251, 193, 49, 0.5)"
              : " rgba(250, 187, 24, 0.5)",
            // backgroundColor: '#FABB1880',
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
            bottom: 250,
            left: 50,
            height: {
              md: 170,
              xs: 145,
            },
            width: {
              md: 270,
              xs: 145,
            },
            // background: 'rgba(251, 193, 49, 0.5)',
            background: isDarkMode ? "#1BE1FF" : "#01DDFF",
            // backgroundColor: '#FABB1880',
            zIndex: -1,
            opacity: 0.4,
            filter: "blur(150px)",
            borderRadius: "50%",
          },
        }}
      />
      <Stack justifyContent={"center"} alignItems={"center"} py={8}>
        <Box>
          <CTypography
            color={isDarkMode ? "#fff" : "#181818"}
            fontSize={{
              xs: 24,
              md: 48,
            }}
            fontWeight={700}
            text="Photos"
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
              ml: 2,
            }}
          />
        </Box>
      </Stack>

      <div className="container mx-auto px-4 grid gap-10">
        <div className="flex justify-center items-center flex-wrap gap-4">
          {categories.map((cat) => (
            <Button
              key={cat._id}
              onClick={() => {
                setCategory(cat.value);
              }}
              variant={cat.value === category ? "contained" : "outlined"}
              sx={{
                borderRadius: "6px",
                backgroundColor:
                  cat.value === category ? backgroundColor : "transparent",
                borderColor: backgroundColor,
                color: cat.value === category ? color : backgroundColor,
                "&:hover": {
                  bgcolor: hoverBackgroundColor,
                  color: color,
                },
              }}
            >
              {cat.name}
            </Button>
          ))}
        </div>
        <AnimatePresence>
          <motion.div
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            layout
          >
            {data?.data?.map((photo) => (
              <motion.div
                className="h-[20rem] p-3 rounded-xl overflow-hidden"
                layout
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                key={photo._id}
              >
                <img
                  alt={"p"}
                  src={photo.url}
                  className="h-full w-full object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center">
          <Button
            onClick={handleSeeMore}
            variant={"contained"}
            sx={{
              borderRadius: "6px",
              backgroundColor: backgroundColor,
              color: color,
              "&:hover": {
                bgcolor: hoverBackgroundColor,
                color: color,
              },
              px: 4,
              py: 1.5,
            }}
          >
            {data?.meta?.page < data?.meta?.maximumPage
              ? "See More"
              : "See Less"}
          </Button>
        </div>
      </div>
    </Stack>
  );
}
