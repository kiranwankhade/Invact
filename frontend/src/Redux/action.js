import axios from "axios";
import {
  GET_MOVIES_LOADING,
  GET_MOVIES_SUCCESS,
  ADD_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_MOVIES_UPDATE,
  GET_MOVIE_DELETE,
  RATING_UPDATE,
  WATCH_STATUS_TOGGLE,
} from "./actionTypes";

export const getMoviesData = () => async (dispatch) => {
    dispatch({ type:   GET_MOVIES_LOADING    })
    try {
        let res = await axios.get(`http://localhost:8000/movie`);
        console.log('res:', res)
        dispatch({ type: GET_MOVIES_SUCCESS, payload: res.data })

    } catch (error) {
        console.log(error);
        dispatch({ type: GET_MOVIES_ERROR })
    }
}


export const addMovie = (data) => async (dispatch) => {
    console.log('update_data:', data);
    dispatch({ type: GET_MOVIES_LOADING });
  
    try {
      const res = await axios.post(`http://localhost:8000/movie/`, data);
      console.log('res.data:', res.data);
      dispatch({ type: ADD_MOVIES_SUCCESS, payload: res.data });
    } catch (error) {
      console.error('Error updating movie:', error.response ? error.response.data : error.message);
      dispatch({ type: GET_MOVIES_ERROR });
    }
}



export const updateMovieData = (id,data) => async (dispatch) => {
    console.log('update_data:', data);
    dispatch({ type: GET_MOVIES_LOADING });
  
    try {
      const res = await axios.put(`http://localhost:8000/movie/${id}`, data);
      console.log('res.data:', res.data);
      dispatch({ type: GET_MOVIES_UPDATE, payload: res.data });
    } catch (error) {
      console.error('Error updating movie:', error.response ? error.response.data : error.message);
      dispatch({ type: GET_MOVIES_ERROR });
    }
}


export const deleteMovie = (id) => async(dispatch) => {
    try{
        let res = await axios.delete(`http://localhost:8000/movie/${id}`);
        dispatch({type:GET_MOVIE_DELETE,payload:id})
    }catch(e){
      dispatch({type: GET_MOVIES_ERROR})
    }
}




