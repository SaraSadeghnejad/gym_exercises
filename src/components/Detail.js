import React from 'react'
import BodyPart from '../assets/assets/icons/body-part.png';
import Target from '../assets/assets/icons/target.png';
import Equipment from '../assets/assets/icons/equipment.png';
import ExerciseDetail from '../pages/ExerciseDetail';
import { Stack } from '@mui/material';

const Detail = ({exerciseDetail}) => {
    const {bodyPart, target, equipment,name,gifUrl} = exerciseDetail;
  return (
    <Stack gep="60px" sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center'}}>
      <img src={gifUrl} alt={name} loading='lazy'className='detail-image' />
    </Stack>
  )
}

export default Detail