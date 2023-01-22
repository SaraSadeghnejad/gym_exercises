import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from "../assets/assets/images/banner.png"
const HeroBanner = () => {
  return (
        <Box sx={{mt:{lg:'212px',xs:'70px'},ml:{sm:"50px"}}} position="relative" p="20px">
            <Typography color="#ff2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
            <Typography color="#ff2625" fontWeight="700"  mb="23px" mt="30px" xs={{fontSize:{lg:'44px',xs:'40px'}}}>Sweat,smile <br/> and Repeat</Typography>
            <Typography  fontSize="22px" LineHeight="35px" mb={4}>Checkout the most effective exercises</Typography>
          <Button variant="contained" color="error" href='#exercises' sx={{backgroundColor:"#ff2625",padding:"10px"}}>Explore exercises</Button>
          <Typography fontWeight={600} fontSize="200px" sx={{opacity:0.1,display:{lg:'block',xs:'none'}}}>Exercise</Typography>
          <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
        </Box>
  )
}

export default HeroBanner