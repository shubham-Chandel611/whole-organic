import {
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  FORGOT_RESET,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_RESET,
  USER_PROFILE_DATA,
  SET_ERROR,
  SET_SUCCESS,
} from './types';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        registration_success: true,
      }
    case REGISTRATION_ERROR:
      return {
        ...state,
        registration_error: action.err
      }
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgot_success: true,
      }
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        forgot_error: action.err,
      }
    case FORGOT_RESET:
      return {
        ...state,
        forgot_error: null,
        forgot_success: null,
      }
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        reset_password_success: true,
      }
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        reset_password_error: action.err,
      }
    case RESET_PASSWORD_RESET:
      return {
        ...state,
        reset_password_error: null,
        reset_password_success: null,
      }
    case SET_ERROR:
      return {
        ...state,
        success: false,
        error: true,
        message: action.data,
      }
    case USER_PROFILE_DATA: 
      return  {
        ...state,
        profiledata: action.data,
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