import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { exersiceOptions, fetchData } from '../utils/fetchData'

const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail]= useState({});
  const {id} = useParams({id});
  useEffect(() => {
    const fetchExercisesData = async ()=>{
     const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
       const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/${id}`,exersiceOptions)
       setExerciseDetail(exerciseDetailData)
    console.log({exerciseDetail})
      }
    fetchExercisesData()
  
  }, [id])
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail