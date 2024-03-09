import { Collapse } from "@mui/material";

const CCollapse = ({ children, sx, ...rest }) => {
	return (
		<Collapse {...rest}>
			{children}
		</Collapse >
	);
};

export default CCollapse;
