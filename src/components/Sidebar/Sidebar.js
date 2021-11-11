import React from 'react';
import Chat from './Chat'
import { List, Divider } from '@mui/material';

export default function Sidebar() {
    return (
        <List sx={{ height: '100vh', width: 360, bgcolor:'white', paddingRight:'10px' }}>
            <Chat />
            <Divider variant="inset" component="li" />
            <Chat />
            <Divider variant="inset" component="li" />
            <Chat />
        </List>
    )
}