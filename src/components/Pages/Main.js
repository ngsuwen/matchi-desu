import React from 'react';
import { Box } from '@mui/material'
import Profile from "../Profile/ProfileApi"
import Sidebar from '../Sidebar/Sidebar'

export default function Main() {
    return (
        <>
            <Box sx = {{
                display:'flex',
                flexDirection:'row',
                width:'100vw'
            }}>
                <Sidebar />
                <Profile />
            </Box>
        </>
    )
}