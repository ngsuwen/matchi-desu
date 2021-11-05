import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AdCarousel from './AdCarousel'

export default function ActionAreaCard() {
  return (
    <Card sx={{ width: '15vw', margin: '0.5em' }}>
      <CardActionArea>
        <CardMedia
          component={AdCarousel}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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