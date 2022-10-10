import {
  SET_ERROR,
  SET_SUCCESS,
} from './types';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default reducer;