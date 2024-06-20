import axios from "axios";
import {
  GET_MOVIES_LOADING,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_MOVIES_UPDATE,
  RATING_UPDATE,
  WATCH_STATUS_UPDATE,
} from "./actionTypes";

export const getMoviesData = () => async (dispatch) => {
    dispatch({ type:   GET_MOVIES_LOADING    })
    try {
        let res = await axios.get(`http://localhost:8000/movie`);
        dispatch({ type: GET_MOVIES_SUCCESS, payload: res.data })

    } catch (error) {
        console.log(error);
        dispatch({ type: GET_MOVIES_ERROR })
    }
}
