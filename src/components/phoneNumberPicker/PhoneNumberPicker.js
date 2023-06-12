import { Box, Stack } from '@mui/material';
import * as React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function CountrySelect({ isDarkMode }) {
    const innerWidth = window.innerWidth;
    const [width, setWidth] = React.useState();
    React.useEffect(() => {
        if (innerWidth < 600) {
            setWidth(95);
        }
        if (innerWidth > 600) {
            setWidth(95);
        }
        if (innerWidth > 900) {
            setWidth(93);
        }

    }, [innerWidth]);
    return (
        <Stack
            gap={1}
        >
            <Box component={'span'}
                sx={{
                    color: isDarkMode ? '#FFFFFF' : '#181818',
                    fontSize: 18,
                    fontWeight: 400,
                }}
            >
                Phone Number
            </Box>
            <PhoneInput
                country={'bd'}
                // inputProps={{
                //     style: {
                //         width: '100%',
                //         height: '3.5rem',
                //         borderRadius: '10px',
                //         marginLeft: '20px',
                //         fontFamily: "Plus Jakarta Sans",
                //         color: '#808080',
                //         fontSize: '1rem'
                //     }
                // }}
                inputStyle={{
                    //padding: '10px 14px',
                    width: `${width}%`,
                    height: '3.5rem',
                    borderRadius: '10px',
                    // border: '1px solid #f00',
                    marginLeft: '20px',
                    fontFamily: "Plus Jakarta Sans",
                    color: '#808080',
                    fontSize: '1rem',
                    background: isDarkMode ? '#0D0D0D' : '#fff',
                    hover: {
                        background: isDarkMode ? '#0D0D0D' : '#fff',
                    }


                }}
                containerStyle={{
                    borderRadius: '10px',

                }}
                buttonStyle={{
                    background: isDarkMode ? '#0D0D0D' : '#fff',
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px',
                    padding: '0px 10px',
                }}
            />
        </Stack>
    );
}
