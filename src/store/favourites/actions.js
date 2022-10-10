import {
  GET_FAVOURITES_LIST,
  FAVOURITES_TRUE,
  FAVOURITES_FALSE,
  SET_ERROR,
  SET_SUCCESS,
} from './types';
import API from "../../constants/Api.js";
import { SET_LOGIN_DATA } from '../login/types';


const setFavouritesList = (data) => ({
  type: GET_FAVOURITES_LIST,
  data
});

const setFavouritesAction = (data) => ({
  type: FAVOURITES_TRUE,
  data
});

const setUnFavouritesAction = (data) => ({
  type: FAVOURITES_FALSE,
  data
})

const setError = (data) => ({
  type: SET_ERROR,
  data
});

const setSucces = (data) => ({
  type: SET_SUCCESS,
  data
});


export const getFavouritesList = (id, token) => {
  console.log('getFavouritesList', id)
  console.log('token', token)
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return dispatch => {
    API.get(`api/buyer/${70}/ad/favorites`, { headers: headers })
      .then(function (resp) {
        console.log('resp', resp)
        let uData = resp.data.data;
        dispatch(setFavouritesList(uData));
      })
      .catch(err => {
        console.log(err.response);
        dispatch(setError(err.response));
      });
  };
};

export const favouriteTrueAction = (userId, pId, token) => {
  var formdata = new FormData();
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return dispatch => {
    API.post(`api/buyer/${userId}/ad/${pId}/favorites`, formdata, { headers: headers })
      .then(function (resp) {
        console.log('resp-----', resp)
        dispatch(setFavouritesAction(resp.data.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(setError(err.response.data.message));
      });
  };
};


export const favouriteFalseAction = (userId,pId,  token) => {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return dispatch => {
    API.delete(`api/buyer/${userId}/ad/${pId}/favorites`, { headers: headers })
      .then(function (resp) {
        console.log('resp-----', resp)
        dispatch(setUnFavouritesAction(resp.data.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(setError(err.response.data.message));
      });
  };
};