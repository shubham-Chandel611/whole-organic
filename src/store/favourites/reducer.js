import {
  GET_FAVOURITES_LIST,
  SET_ERROR,
  SET_SUCCESS,
} from './types';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVOURITES_LIST:
      return {
        ...state,
        favouritesList: action.data,
      }
    case SET_ERROR:
      return {
        ...state,
        success: false,
        error: true,
        message: action.data,
      }
    case SET_SUCCESS:
      return {
        ...state,
        success: true,
        error: false,
        message: action.data,
      }
    case "RESET":
      return initialState
    default:
      return state;
  }
};

export default reducer;