import { Box, Pagination } from '@mui/material'
import React from 'react'
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises}) => {
  return (
    <Box
     id='exercises'
     sx={{mt:{lg:'110px'}}}
     mt='50px'
     p='20px'
    >
      <Typography variant='h3' mb="46px">
        Showing Results
      </Typography>
      <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}} flexwrap="wrap" justifyContent="center">
      {exercises.map((exercise,index)=>(
        <ExerciseCard key={index} exercise={exercise} />
      ))}
      </Stack>
      <Stack mt='100px' alignItems="center">
        {exercises.length>9&&(
            <Pagination de color="standard" shape='rounded' />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises