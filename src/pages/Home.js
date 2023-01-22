import { Box } from '@mui/material';
import React, { useState } from 'react'
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
   <Box>
    <HeroBanner />
    <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} exercises={exercises} setExercises={setExercises}/>
    <Exercises bodyPart={bodyPart} setBodyPart={setBodyPart} exercises={exercises} setExercises={setExercises} /> 
   </Box>
  )
}

export default Home