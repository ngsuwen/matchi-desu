import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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