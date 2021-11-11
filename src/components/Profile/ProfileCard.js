import React from 'react';
import TinderCard from 'react-tinder-card';
import { Box, Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material';

export default function TinderProfileCard({ data }) {

    const swiped = (direction, name, id) => {
        if (direction === 'right') {
            localStorage.setItem(id, name)
        }
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <Box sx={{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {data.map((character) =>
                <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name, character.id)} onCardLeftScreen={() => outOfFrame(character.name)}>
                    <Card sx={{ width: 300, height: 500, padding: 1, boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.20)' }}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                image={character ? character.display_picture : ''}
                                alt='img'
                                width='300'
                                height='400'
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {character ? character.name : ''}
                                </Typography>
                                <Typography style={{ overflow: "hidden", height: 40 }} variant="body2" color="text.secondary">
                                    {character ? character.description : ''}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </TinderCard>
            )}
        </Box>
    )
}