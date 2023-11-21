import { Box, IconButton, MenuItem, Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import line from "../../assets/images/line.svg";
import logo from "../../assets/images/logo.png";
import MenuIcon from "../../assets/svg/MenuIcon";
import SunIcon from "../../assets/svg/SunIcon";
import { toggleDarkMode } from "../../features/darkMode/darkMode";
import { CButton, CCollapse, CTypography } from "../../utility";
const menu = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Online Advisors",
    link: "#online-advisors",
  },
  {
    id: 3,
    name: "Schedule",
    link: "#schedule",
  },
  {
    id: 4,
    name: "Contact",
    link: "#contact",
  },
];
export default function Navbar() {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  // app mode dark or light
  const acitveNavbar = (id) => {
    if (isDarkMode) {
      return selected === id ? "#fff" : "#9C9C9C";
    } else {
      return selected === id ? "#181818" : "#171017";
    }
  };

  // tabs or desktop navbar
  const desktopNavbar = () => {
    return (
      <Stack py={1}>
        <Stack
          component={"nav"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          px={13.5}
          display={{ xs: "none", lg: "flex" }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={6}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
              component={"a"}
              href={"/"}
            >
              <Box
                component={"img"}
                src={logo}
                alt={"logo"}
                sx={{
                  width: 64,
                  height: 64,
                }}
              />
              <Box
                sx={{
                  width: "1.5px",
                  height: "2.5rem",
                  backgroundColor: isDarkMode ? "#ffffff70" : "#18181850",
                }}
              />
              <CTypography
                color={isDarkMode ? "#fff" : "#181818"}
                fontSize={{
                  md: "0.85rem",
                  xs: "0.85rem",
                }}
                fontWeight={700}
                text="WeCare Education"
                align={"center"}
                sx={{
                  maxWidth: "10ch",
                }}
              />
            </Box>

            <Box component={"ul"} display={"flex"} alignItems={"center"}>
              {menu.map((item) => (
                <Box
                  component={"li"}
                  key={item.id}
                  sx={{
                    listStyle: "none",
                    px: 3,
                    display: "inline-block",
                    cursor: "pointer",
                    ":after": {
                      content: '""',
                      display: "block",
                      width: 0,
                      height: 11,
                      backgroundImage: `url(${line})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      transition: "width .3s",
                    },
                    ":hover:after": {
                      width: "100%",
                    },
                  }}
                  onClick={() => setSelected(item.id)}
                >
                  <CTypography
                    color={acitveNavbar(item.id)}
                    // color={selected === item.id ? '#181818' : '#171017'}
                    fontFamily={"Plus Jakarta Sans"}
                    fontSize={16}
                    fontWeight={selected === item.id ? 700 : 500}
                    lineHeight={"140%"}
                    component={"a"}
                    sx={{
                      cursor: "pointer",
                    }}
                    href={item.link}
                  >
                    {item.name}
                  </CTypography>
                </Box>
              ))}
            </Box>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={4}>
            <IconButton
              color={isDarkMode ? "primary" : "secondary"}
              variant={"contained"}
              onClick={() => {
                dispatch(toggleDarkMode());
              }}
            >
              <SunIcon iconColor={isDarkMode ? "#fff" : "#292D32"} />
            </IconButton>
            <CButton
              btnTitle={"Book Now"}
              fontSize={{
                xs: 12,
                md: 14,
                lg: 16,
              }}
              padding={"0.5rem 2rem"}
              href={process.env.REACT_APP_DASHBOARD_URL}
              target="_blank"
            />
          </Stack>
        </Stack>
      </Stack>
    );
  };

  const mobileNavbar = () => {
    return (
      <Stack display={{ xs: "flex", lg: "none" }}>
        <Stack direction={"row"} justifyContent={"space-between"} px={4} py={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
            component={"a"}
            href={"/"}
          >
            <Box
              component={"img"}
              src={logo}
              alt={"logo"}
              sx={{
                width: 64,
                height: 64,
              }}
            />
            <Box
              sx={{
                width: "1.5px",
                height: "2.5rem",
                backgroundColor: isDarkMode ? "#ffffff70" : "#18181850",
              }}
            />
            <CTypography
              color={isDarkMode ? "#fff" : "#181818"}
              fontSize={{
                md: "1.5rem",
                xs: "0.85rem",
              }}
              fontWeight={700}
              text="WeCare Education"
              align={"center"}
              sx={{
                maxWidth: "10ch",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              // justifyContent: 'flex-end',
            }}
          >
            <Box>
              <IconButton
                color={isDarkMode ? "primary" : "secondary"}
                variant={"contained"}
                onClick={() => {
                  dispatch(toggleDarkMode());
                }}
              >
                <SunIcon iconColor={isDarkMode ? "#fff" : "#292D32"} />
              </IconButton>
            </Box>
            <IconButton
              color={isDarkMode ? "primary" : "secondary"}
              onClick={() => setOpen(!open)}
            >
              <MenuIcon iconColor={isDarkMode ? "#fff" : "#292D32"} />
            </IconButton>
          </Box>
        </Stack>
        <CCollapse in={open}>
          <Stack pl={4} py={4}>
            {menu.map((item) => (
              <MenuItem
                key={item.id}
                onClick={() => setSelected(item.id)}
                sx={{
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: 16,
                  fontWeight: selected === item.id ? 700 : 500,
                  lineHeight: "140%",
                  color: acitveNavbar(item.id),
                  cursor: "pointer",
                }}
                component={"a"}
                href={item.link}
              >
                {item.name}
              </MenuItem>
            ))}

            <Box py={2}>
              <CButton
                btnTitle={"Book Now"}
                fontSize={{
                  xs: 12,
                  md: 14,
                  lg: 16,
                }}
                href={process.env.REACT_APP_DASHBOARD_URL}
                target="_blank"
              />
            </Box>
          </Stack>
        </CCollapse>
      </Stack>
    );
  };

  return (
    <Stack
      component={"section"}
      position={"sticky"}
      top={0}
      zIndex={100}
      bgcolor={isDarkMode ? "#0D0D0D" : "#fff"}
    >
      <Stack component={"div"} className={"container"}>
        {desktopNavbar()}
        {mobileNavbar()}
      </Stack>
    </Stack>
  );
}
