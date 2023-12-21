import { Box } from "@mui/material";
import React from "react";

import ceoStatement from "./banner.svg";
import stripe from "./stripe.svg";

const CEOStatement = () => {
  return (
    <div className="py-20"
      id="ceoStatement"
    >
      <Box
        sx={{
          margin: "0 auto",
          width: "100%",
          maxWidth: "50rem",
          paddingBlock: "5rem",
        }}
        className="relative px-4 "
      >
        {/* <img style={{width: "100%"}} src={"/images/ceo_statement/banner.svg"} alt="ceo-statement" /> */}
        <img
          src={ceoStatement}
          alt="ceo-statement"
          effect="blur"
          width={"100%"}
        />
        <img src={stripe} className="absolute top-0 left-0 w-16 h-16 lg:h-32 lg:w-32" alt="" />
        <img src={stripe} className="absolute bottom-0 right-0 w-16 h-16 lg:h-32 lg:w-32" alt="" />
      </Box>
    </div>
  );
};

export default CEOStatement;
