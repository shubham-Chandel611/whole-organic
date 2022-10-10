import {
  SET_ERROR,
  GET_RATING,
  GET_NEW_ITEM,
  RECENTLY_VIEWED
} from './types';
import API from "../../constants/Api.js";

const setError = (data) => ({
  type: SET_ERROR,
  data
});


const getRating = data => ({
  type: GET_RATING,
  data
});
const getNewItem = data => ({
  type: GET_NEW_ITEM,
  data
});

const setRecentlyViewData = data => ({
  type: RECENTLY_VIEWED,
  data
});


export const getAllRating = (id) => {
  return dispatch => {
    API.get(`/seller/${id}/rating`)
      .then(function (resp) {
        console.log("res", resp);
        dispatch(getRating(resp.data.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(setError(err.response.data.message))
      });
  };
};


export const getNewItems = (id) => {
  return dispatch => {
    API.get(`/ad/recently-viewed?item_per_page=10&seller_id=${id}`)
      .then(function (resp) {
        console.log('resp', resp)
        dispatch(getNewItem(resp.data.data));
      })
      .catch(err => {
        console.log('err', err.response)
        dispatch(setError(err.response.data.message))
      });
  };
};


export const setRecentlyItem = (id) => {
  return dispatch => {
    API.get(`/ad/recently-viewed?item_per_page=10&seller_id=${id}`)
      .then(function (resp) {
        console.log('resp', resp)
        dispatch(setRecentlyViewData(resp.data.data));
      })
      .catch(err => {
        console.log('err', err.response)
        dispatch(setError(err.response.data.message))
      });
  };
};


