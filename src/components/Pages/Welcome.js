import React, { useRef } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Welcome() {
    const userName = useRef()

    const newHandler = () => {
        localStorage.setItem('name', userName.current.value)
    }

    const existingHandler = () => {
        console.log(localStorage.getItem('name'))
    }

    return (
        <Box sx={{
            display: 'flex',
            height: '100vh',
            alignItems: 'center'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 3,
                paddingRight: '30px',
                boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.50)' 
            }}>
                <img style={{
                    padding: 30,
                    width: 400,
                }} src='https://i.redd.it/46p3tv5ryqy71.jpg' alt='waifu is here' />
                <Typography sx={{ fontFamily: 'damion, cursive', fontWeight: 'bold' }} variant='h3'>
                    Welcome {localStorage.getItem('name') ?
                        <>
                            {localStorage.getItem('name')}<br />
                            <Link style={{ textDecoration: 'none' }} to='/main'><Button sx={{ width: '20vw' }} variant="contained" onClick={existingHandler}>Enter</Button></Link>
                        </> :
                        <>
                            <Typography sx={{ fontFamily: 'damion, cursive', marginBottom: 3 }} variant='h4'>
                                Please enter your name:
                            </Typography>
                            <TextField sx={{ width: '20vw' }} variant="filled" label="Name" inputRef={userName} /><br />
                            <Link style={{ textDecoration: 'none' }} to='/main'><Button sx={{ width: '20vw' }} variant="contained" onClick={newHandler}>Enter</Button></Link>
                        </>
                    }
                </Typography>
            </Box>
        </Box>
    )
}