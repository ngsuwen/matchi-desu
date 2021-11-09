import React, { useState } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const db = [
    {
        name: 'Richard Hendricks',
        url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    },
    {
        name: 'Erlich Bachman',
        url: './img/erlich.jpg'
    },
    {
        name: 'Monica Hall',
        url: './img/monica.jpg'
    },
    {
        name: 'Jared Dunn',
        url: './img/jared.jpg'
    },
    {
        name: 'Dinesh Chugtai',
        url: './img/dinesh.jpg'
    }
]

function Simple({ data }) {
    const characters = db
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }
    console.log(data)
    return (
        <div>
            <div className='cardContainer'>
                {data.map((character) =>
                    <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                        <Card sx={{ width: '15vw', maxHeight: '35vw', margin: '0.5em' }}>
                            <CardActionArea>
                                <CardMedia
                                    component='img'
                                    image={character ? character.display_picture : ''}
                                    alt='img'
                                    style={{ width: '15vw' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {character ? character.name : 'Ad here'}
                                    </Typography>
                                    <div style={{ overflow: "hidden" }}>
                                        <Typography variant="body2" color="text.secondary">
                                            {character ? character.description : 'Ad here'}
                                        </Typography>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </TinderCard>
                )}
            </div>
            {/* {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />} */}
        </div>
    )
}

export default Simple