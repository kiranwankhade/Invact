import {
    GET_MOVIES_LOADING,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_ERROR,
    GET_MOVIES_UPDATE,
    GET_MOVIE_DELETE,
    RATING_UPDATE,
    WATCH_STATUS_TOGGLE,
    ADD_MOVIES_SUCCESS,
} from "./actionTypes";

import axios from "axios"
  
const initialState = {
    movies: [],
  status: 'idle',
  error: null,
  
};

const movieReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_MOVIES_LOADING: {
            return {
                ...state,
                status: "loading",
                error: false,
            }
        }

        case GET_MOVIES_SUCCESS: {
            return {
                ...state,
                movies: payload,
                status: "success",
            }
        }

        case GET_MOVIES_ERROR: {
            return {
                ...state,
                status: "error",
                error: false,
            }
        }

        case ADD_MOVIES_SUCCESS: {
            return {
                ...state,
                status: "success",
                error: false,
                movie:payload
            }
        }

        case GET_MOVIES_UPDATE:{
            return {
                ...state,
                movies: state.movies.map(movie => 
                    movie._id === payload.id ? payload : movie
                  ),
            }
        }

        case GET_MOVIE_DELETE:{
            return {
                ...state,
                movies:state.movies.filter((data)=> data._id !== payload.id)
            }
        }

        
        default: {
            return initialState;
        }

    }
}


export default movieReducer;