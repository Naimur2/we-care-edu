import { Collapse, Paper } from "@mui/material";
import React from "react";

const CCollapse = ({ children, sx, ...rest }) => {
	return (
		<Collapse {...rest}>
			{children}
		</Collapse >
	);
};

export default CCollapse;
