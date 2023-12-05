import { Box, Button, Stack } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import line from "../../assets/images/line.svg";
import photo1 from "../../assets/images/photos1.png";
import photo2 from "../../assets/images/photos2.png";
import photo3 from "../../assets/images/photos3.png";
import ArrowLeft from "../../assets/svg/ArrowLeft";
import ArrowRight from "../../assets/svg/ArrowRight";
import { CTypography } from "../../utility";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AnimatePresence, motion } from "framer-motion";

const visaImages = Array.from({ length: 56 }).map((_, index) => ({
  id: index + 1,
  image: `/images/visa-success/${index + 1}.jpg`,
  category: 1,
}));
const educationImages = Array.from({ length: 36 }).map((_, index) => ({
  id: index + 1,
  image: `/images/education/${index + 1}.jpg`,
  category: 2,
}));

const photos = [...visaImages, ...educationImages];

const category = [
  {
    _id: 1,
    name: "Visa Success",
  },
  {
    _id: 2,
    name: "Educational Images",
  },
];

const totalPages = Math.ceil(photos.length / 6);
const totalVisaPages = Math.ceil(visaImages.length / 6);
const totalEducationPages = Math.ceil(educationImages.length / 6);

const pages = {
  1: totalVisaPages,
  2: totalEducationPages,
};

export default function Photos() {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const [numberOfPages, setNumberOfPages] = React.useState(totalPages);

  const backgroundColor = isDarkMode ? "#00A6C0" : "#0090A6";
  const color = !isDarkMode ? "#fff" : "#181818";
  const hoverBackgroundColor = isDarkMode ? "#00A6C0" : "#0090C0";

  const [page, setPage] = React.useState(1);

  const [currentCategory, setCurrentCategory] = React.useState(null);

  const categoriesWithAll = [{ _id: null, name: "All" }, ...category];

  const categoryHandler = (id) => {
    console.log(id);
    setCurrentCategory(id);
  };

  const filteredPhotos = currentCategory
    ? photos.filter((photo) => photo.category === currentCategory)
    : photos;

  const handleSeeMore = () => {
    const photosDiv = document.getElementById("gphotos");
    switch (currentCategory) {
      case 1:
        if (page < totalVisaPages) {
          setPage(page + 1);
        } else {
          setPage(1);
          photosDiv.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case 2:
        if (page < totalEducationPages) {
          setPage(page + 1);
        } else {
          setPage(1);
          photosDiv.scrollIntoView({ behavior: "smooth" });
        }
        break;
      default:
        if (page < totalPages) {
          setPage(page + 1);
        } else {
          setPage(1);
          photosDiv.scrollIntoView({ behavior: "smooth" });
        }
        break;
    }
  };

  const paginatedImages = filteredPhotos.slice(0, page * 6);

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
          {categoriesWithAll.map((category) => (
            <Button
              key={category._id}
              onClick={() => {
                categoryHandler(category?._id);
                setPage(1);
                setNumberOfPages(pages[category?._id] || totalPages);
              }}
              variant={
                category?._id === currentCategory ? "contained" : "outlined"
              }
              sx={{
                borderRadius: "6px",
                backgroundColor:
                  category?._id === currentCategory
                    ? backgroundColor
                    : "transparent",
                borderColor: backgroundColor,
                color:
                  category?._id === currentCategory ? color : backgroundColor,
                "&:hover": {
                  bgcolor: hoverBackgroundColor,
                  color: color,
                },
              }}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <AnimatePresence>
          <motion.div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" layout>
            {paginatedImages.map((photo) => (
              <motion.div
                className="h-[20rem] p-3 rounded-xl overflow-hidden"
                layout
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <img
                  alt={"p"}
                  src={photo.image}
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
            {numberOfPages > page ? "See More" : "See Less"}
          </Button>
        </div>
      </div>
    </Stack>
  );
}
