import { Box } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CEOStatement = () => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "100%",
        maxWidth: "50rem",
        paddingBlock: "5rem",
      }}
    >
      {/* <img style={{width: "100%"}} src={"/images/ceo_statement/banner.svg"} alt="ceo-statement" /> */}
      <img
        src={"/images/ceo_statement/banner.svg"}
        alt="ceo-statement"
        effect="blur"
        width={"100%"}
      />
    </Box>
  );
};

export default CEOStatement;
