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
            height: '80vh',
            alignItems: 'center'
        }}>
            <Typography sx={{ fontFamily: 'damion, cursive', fontWeight: 'bold' }} variant='h3'>
                Welcome {localStorage.getItem('name') ?
                    <>
                        {localStorage.getItem('name')}<br />
                        <Link style={{textDecoration:'none'}} to ='/main'><Button sx={{ width: '20vw' }} variant="contained" onClick={existingHandler}>Enter</Button></Link>
                    </> : 
                    <>
                        <Typography sx={{ fontFamily: 'damion, cursive', marginBottom: 3 }} variant='h4'>
                            Please enter your name:
                        </Typography>
                        <TextField sx={{ width: '20vw' }} variant="filled" label="Name" inputRef={userName}/><br />
                        <Link style={{textDecoration:'none'}} to ='/main'><Button sx={{ width: '20vw' }} variant="contained" onClick={newHandler}>Enter</Button></Link>
                    </>
                }
            </Typography>

        </Box>
    )
}