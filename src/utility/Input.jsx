import { Box, Stack, TextField } from "@mui/material";
import { useSelector } from "react-redux";
export default function Input({
	value,
	name,
	label,
	...rest
}) {
	const { isDarkMode } = useSelector(state => state.darkMode);

	return (
		<Stack
			spacing={1}
		>
			<Box component={'span'}
				sx={{
					color: isDarkMode ? '#FFFFFF' : '#181818',
					fontSize: 18,
					fontWeight: 400,
				}}
			>
				{label}
			</Box>
			<TextField
				name={name}
				//label={label}
				value={value}
				//size="small"
				fullWidth
				sx={{
					"& label.Mui-focused": {
						color: "#fff",
						fontFamily: 'Plus Jakarta Sans',

					},
					"& .MuiInputLabel-root": {
						color: "#ACACAC",
						fontFamily: 'Plus Jakarta Sans',
						fontSize: 16,
						fontWeight: 500,



					},
					input: {
						color: '#808080',
						fontFamily: 'Plus Jakarta Sans',

					},
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							borderColor: '#ACACAC',
						},
						'&:hover fieldset': {
							borderColor: '#ACACAC',
						},
						'&.Mui-focused fieldset': {
							borderColor: '#ACACAC',
						},

					},
					// style for multiline
					'& .MuiOutlinedInput-inputMultiline': {
						padding: 0,
						fontFamily: 'Plus Jakarta Sans',
						color: '#fff',
						backgroundColor: '#2C323C',
					},
				}}
				InputProps={{ sx: { borderRadius: '10px' } }}
				{...rest}
			/>
		</Stack>
	);
}
