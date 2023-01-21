import { Stack } from '@mui/material'
import React from 'react'
import Logo from '../assets/images/Logo.png';

const Home = () => {
  return (
    <Stack direction="row" justifyContent="space-around">
    <Link to='/'>
        <img src={Logo} alt="logo" style={{width:"48px",height:"48px",margin:"0 20px"}}/>
        </Link>
        <Stack direction='row' fontSize="24px" gap='40px' alignItems="flex-end">
            <Link to='/' style={{textDecoration:"none",color:"#3A1212",borderBottom:"3px solid #FF2625"}}>Home</Link>
            <a href="/" style={{textDecoration:"none",color:"#3A1212"}}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Home