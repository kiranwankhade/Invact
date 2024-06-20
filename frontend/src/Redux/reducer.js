import {
    GET_MOVIES_LOADING,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_ERROR,
    GET_MOVIES_UPDATE,
    RATING_UPDATE,
    WATCH_STATUS_UPDATE,
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

        
        default: {
            return initialState;
        }

    }
}


export default movieReducer;