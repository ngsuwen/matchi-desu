import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

export default function Sidebar({ data }) {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary={'Remy Sharp'}
                secondary={
                    <>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="subtitle1"
                            color="text.secondary"
                        >
                            Start a conversation...
                        </Typography>
                    </>
                }
            />
        </ListItem>
    )
}