import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesData } from "../Redux/action";
import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";
import MovieCard from "../Components/MovieCard";
import { AiFillFolderAdd } from "react-icons/ai";


import {CirclesWithBar} from "react-loader-spinner"
import AddMovieModal from "../Components/AddMovieModal";

const Home = () => {
  const { status, error, movies } = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesData());
  }, [dispatch]);

  console.log("moviesData:", movies);

  useEffect(()=>{

  },[status])

  return (
    <Box>
      <Heading mt={2}>MOVIES Details</Heading>
      
      {/* Data Collected */}
      <Box>
      {
        status == "success" ?
        <Box w={"90%"} margin={"auto"} mt={"1rem"}>
            <AddMovieModal/>
            <Grid templateColumns="repeat(3, minmax(300px, 1fr))" gap={2}>
            {Array.isArray(movies) &&
                movies.map((movie) => <MovieCard key={movie._id} movie={movie} />)}
            </Grid>
      </Box> : <>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w={'100%'} m={'auto'} h={'100vh'}>
        <CirclesWithBar
            height="20%"
            width="100%"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
            innerCircleColor="#4fa94d"
            barColor="#4fa94d"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
        </Box>
        </>
      }
      </Box>
      
    </Box>
  );
};

export default Home;
