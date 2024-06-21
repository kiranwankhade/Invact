import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { BiEdit, BiTrash, BiStar, BiChat } from "react-icons/bi";
import { TbEyeUp, TbEyeX } from "react-icons/tb";
import StarRatings from "./StarRatings";
import EditMovieModal from "./EditMovieModal";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../Redux/action";

const MovieCard = ({ movie }) => {
  const {
    title,
    description,
    imageUrl,
    releaseYear,
    genre,
    watchStatus,
    rating,
    reviews,
  } = movie;

  const dispatch = useDispatch();



  return (
    <Box w={'90%'}  maxW="md" bg={"gray.300"} borderRadius={"10px"} pb={2}>
      <Box
        w={"100%"}
        position="relative"
        pb="100%"
        borderTopRadius="10px"
        overflow="hidden"
      >
        <img
          src={imageUrl}
          alt={title}
          style={{
            objectFit: "fill",
            borderRadius: "10px 10px 0 0",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </Box>

      <Box display='flex' gap={4} textAlign={"center"} justifyContent={'space-between'} mt={2} p={1.5}>
        <Box>
        <Heading fontSize={"1rem"} noOfLines={1}>{title}</Heading>
        <Text>
          {releaseYear} | {genre}
        </Text>
        </Box>
        <Box>
        {watchStatus ? <Text fontSize={'2rem'} color={'blue'}>
            <TbEyeUp />
            </Text> :  <Text fontSize={'2rem'} color={'blue.500'}>
            <TbEyeX />
        </Text>}
        </Box>
      </Box>

     <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'2'} mb={2}>
        <Text>Ratings</Text>
        <Text><StarRatings value={rating} /></Text>
     </Box>

      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent="center"
        alignItems={'center'}
        gap={"0.5rem"}
        w={"100%"}
        margin={'auto'}
        p={2}
      >
        
        <Button
          bg={"black"}
          color={"white"}
          p={4}
          _hover={{
            bg: "white",
            color: "black",
            border:'1px solid black'
          }}
        >
          <span>
            <BiChat />
          </span>
          Review
        </Button>
        <EditMovieModal movie={movie} />
        <Button
          bg={"black"}
          color={"white"}
          p={4}
          _hover={{
            bg: "white",
            color: "black",
            border:'1px solid black'
          }}
         
        >
          <span>
            <BiTrash />
          </span>
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default MovieCard;
