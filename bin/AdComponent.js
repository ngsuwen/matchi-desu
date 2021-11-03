import React from 'react';
import Ad from '../src/components/ApiCalls/AdsApi';
import Box from '@mui/material/Box';

const arrList = [15050, 4329, 9617, 15499, 13431, 17318, 15322, 13346, 7025]

const ads = arrList.map((element) => <Ad id={element} />)

export default function AdComponent() {
    return (
        <>
            <Box
                sx={{
                    '& > :not(style)': {
                        display: 'flex',
                    },
                }}
            >
                {ads}
                {/* <button onClick={clickHandler}>Random</button> */}
            </Box>
        </>
    );
};