import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exersiceOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({bodyPart,setBodypart,exercises,setExercises}) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([])
     useEffect(() => {
        const fetchExercisesData=async()=>{
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exersiceOptions);
            setBodyParts(['all',...bodyPartsData])
        } 
     fetchExercisesData()
     }, [])
     
    const handleSearch = async() => {
        if(search){
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exersiceOptions);
           
     const searchedExercises= exercisesData.filter(exercises =>(exercise)=> exercise.name.toLowerCase().includes(search)
     || exercise.target.toLowerCase().includes(search)
     || exercise.equipment.toLowerCase().includes(search)
     || exercise.bodyPart.toLowerCase().includes(search)
     );
     setSearch('');
     setExercises(searchedExercises);
    } 
       }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{fontSize:{lg:"44px",xs:"30px"}}} mb="50px" textAlign="center">
            Awsome Exercises You <br/> Should Know
        </Typography>
        <Box position="relative" mb='72px'>
            <TextField 
                sx={{
                    input:{
                        fontWeight:'700px',
                        border:'none',
                        borderRadius:'4px'},
                    width:{lg:'800px',xs:'350px'},
                    backgroundColor:"#fff",
                    borderRadius:'40px'
                }}
                height='76px'
                value={search}
                onChange={(e)=>setSearch(e.target.value.toLowerCase())}
                placeholder='Search Exercises ...'
                type="text"
            />
            <Button className="btn-search" 
             onClick={handleSearch}
            sx={{
                bgcolor:"#ff2625",
                color:"#fff",
                textTransform:"none",
                width:{lg:'175px',xs:'80x'},
                fontSize:{lg:'20px',sx:"14px"},
                height:"56px",
                position:"absolute",
                right:'0'
            }}>
                Search
            </Button>
           
        </Box>
        <Box sx={{position:"relative",eidth:'100%',p:"20px"}}>
        <HorizontalScrollbar data={bodyParts} />
        </Box>
    </Stack>
  )
}

export default SearchExercises