import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesData } from '../Redux/action';
import { Box, Heading } from '@chakra-ui/react';

const Home = () => {
   
    const { status,error, movies } = useSelector(
        (store) => store.movies
      );
      const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getMoviesData())
    },[])
    console.log('moviesData:', movies)
  return (
    <Box>
        <Heading>MOVIES APP</Heading>
    </Box>
  )
}

export default Home