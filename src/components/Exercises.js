import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exersiceOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises,setExercises,bodyPart}) => {
    const [currentPage,setCurrentPage]=useState(1);
    const exercisesPerPage =9;
    const indexOfLastExercise = currentPage *exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const paginate =(e,value)=>{
    setCurrentPage(value);
        window.scrollTo({top:1800,behaviour:'smooth'})
    }
    const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise);
    useEffect(() => {
      const fetchExercisesData = async ()=>{
        let exercisesData = [];
        if(bodyPart === 'all'){
            exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exersiceOptions)
        }else{
            exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exersiceOptions)
        }
        setExercises(exercisesData)
      }
      fetchExercisesData()

    }, [bodyPart])
    
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
      {currentExercises.map((exercise,index)=>(
        <ExerciseCard key={index} exercise={exercise} />
      ))}
      </Stack>
      <Stack mt='100px' alignItems="center">
        {exercises.length>9&&(
            <Pagination defaultPage={1} size='large' onChange={paginate} page={currentPage} count={Math.ceil(exercises.length/exercisesPerPage)} color="standard" shape='rounded' />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises