import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  SET_LOGIN_DATA
} from "./types";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        loading: true,
        loginError: false,
        token: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.data.access_token,
        loginError: false,
        loading: false,
        userData: action.data,
        userName: action.data.first_name + ' ' + action.data.last_name,
        userId: action.data.id,
        userType: action.data.type === 'buyer' ? 1 : 2,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        loginError: action.err,
        message: action.err
      };
    case SET_LOGIN_DATA:
      return {
        ...state,
        userData: action.data,
        userName: action.data.first_name + ' ' + action.data.last_name,
        userId: action.data.id,
      };
    case "RESET_ERROR": 
      return {
        ...state,
        loginError: false,
      }
    case "RESET":
      return initialState

    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default reducer;
