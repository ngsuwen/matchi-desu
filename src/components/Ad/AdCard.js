import React from 'react';
import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material';
import AdCarousel from './AdCarousel'

export default function ActionAreaCard() {
  return (
    <Card sx={{ width: 200, margin: 1 }}>
      <CardActionArea>
        <CardMedia
          component={AdCarousel}
        />
        <CardContent>
          <Typography sx={{fontSize:20, fontWeight:'bold'}} variant="h1" gutterBottom component="div">
            Hot singles in your area!!!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Click here to chat with one of them!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}