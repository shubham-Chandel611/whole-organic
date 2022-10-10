import {
  SET_ERROR,
  SET_SUCCESS,
} from './types';
import API from "../../constants/Api.js";

const setError = (data) => ({
  type: SET_ERROR,
  data
});

const setSucces = (data) => ({
  type: SET_SUCCESS,
  data
});


export const postContactUs = (data) => {
  return dispatch => {
    API.post(`contact-us`, data)
      .then(function (resp) {
        dispatch(setSucces(true));
      })
      .catch(err => {
        console.log(err);
        dispatch(setError(err));
      });
  };
};




