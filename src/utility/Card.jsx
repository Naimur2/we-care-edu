import { Card } from '@mui/material';
import React from 'react';

const CCard = ({ borderRadius, sx, children, ...rest }) => {
    return (
        <Card
            sx={
                sx
                    ? sx
                    : {
                        bgcolor: '#FFFFFF',
                        boxShadow: '0px 16px 32px rgba(0, 55, 61, 0.09)',
                        borderRadius: 3,
                        py: 2,

                    }
            }
            variant="outlined"
            {...rest}
        >
            {children}
        </Card>
    );
};


export default CCard;