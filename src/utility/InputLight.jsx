import { Box, Stack, TextField } from "@mui/material";
import { useSelector } from "react-redux";
export default function Input({ value, name, label, ...rest }) {
    const { isDarkMode } = useSelector((state) => state.darkMode);

    return (
        <Stack spacing={1}>
            <Box
                component={"span"}
                sx={{
                    color: isDarkMode ? "#868686" : "#363636",
                    fontSize: 16,
                    fontWeight: 400,
                }}
            >
                {label}
            </Box>
            <TextField
                name={name}
                //label={label}
                value={value}
                size="small"
                fullWidth
                sx={{
                    py: 2,
                    px: 1,
                    backgroundColor: isDarkMode ? "#0D0D0D" : "#FFFFFF",
                    boxShadow: "0px 8px 56px rgba(0, 0, 0, 0.08)",
                    borderRadius: "10px",
                    "& label.Mui-focused": {
                        color: "#fff",
                    },
                    "& .MuiInputLabel-root": {
                        color: "#8E8E8E",
                        fontFamily: "Plus Jakarta Sans",
                        fontSize: 16,
                        fontWeight: 500,
                    },
                    input: {
                        color: "#8E8E8E",
                        borderRadius: "10px",
                    },
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: isDarkMode ? "#0D0D0D" : "#FFFFFF",
                        },
                        "&:hover fieldset": {
                            borderColor: isDarkMode ? "#0D0D0D" : "#FFFFFF",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: isDarkMode ? "#0D0D0D" : "#FFFFFF",
                        },
                    },
                }}
                {...rest}
            />
        </Stack>
    );
}
