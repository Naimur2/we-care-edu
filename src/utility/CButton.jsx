/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import * as React from "react";
import { useSelector } from "react-redux";

export default function ContainedButtons({
  children,
  btnTitle,
  fontSize,
  fontWeight,
  padding,
  sx = {},
  ...rest
}) {
  const { isDarkMode } = useSelector((state) => state.darkMode);

  return (
    <Button
      sx={{
        bgcolor: isDarkMode ? "#00A6C0" : "#0090A6",
        color: isDarkMode ? "#0D0D0D" : "#FFFFFF",
        fontSize: fontSize ? fontSize : 16,
        fontWeight: fontWeight ? fontWeight : 600,
        fontFamily: "Plus Jakarta Sans",
        textTransform: "none",
        borderRadius: "10px",
        padding: padding
          ? padding
          : {
              md: "1rem 4rem",
              xs: "0.5rem 2rem",
            },
        "&:hover": {
          bgcolor: isDarkMode ? "#00A6C0" : "#0090C0",
        },
        ...sx,
      }}
      {...rest}
    >
      {btnTitle} {children}
    </Button>
  );
}

ContainedButtons.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  endIcon: PropTypes.node,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  startIcon: PropTypes.node,
  sx: PropTypes.object,
  btnTitle: PropTypes.string,
};
