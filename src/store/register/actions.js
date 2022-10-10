import {
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  USER_PROFILE_DATA,
  SET_ERROR,
  SET_SUCCESS,
} from './types';
import API from "../../constants/Api.js";
import { SET_LOGIN_DATA } from '../login/types';

const statusError = err => ({
  type: REGISTRATION_ERROR,
  err
});

const setRegistration = data => ({
  type: REGISTRATION_SUCCESS,
  data
})

const forgotStatusError = err => ({
  type: FORGOT_PASSWORD_ERROR,
  err
});

const setForgotPassowd = data => ({
  type: FORGOT_PASSWORD_SUCCESS,
  data
})

const setResetPassword = data => ({
  type: RESET_PASSWORD_SUCCESS,
  data
})

const setResetPasswordError = err => ({
  type: RESET_PASSWORD_ERROR,
  err
})

const setProfileData = (data) => ({
  type: USER_PROFILE_DATA,
  data
});

const setError = (data) => ({
  type: SET_ERROR,
  data
});

const setSucces = (data) => ({
  type: SET_SUCCESS,
  data
});



export const resetRegData = () => {
  return {
    type: "RESET"
  }
}

export const registrationAction = (data) => {
  console.log(data);
  return dispatch => {
    API.post(`users`, data).then(function (resp) {
      console.log(resp.data);
      dispatch(setRegistration(resp.data));
    })
      .catch(err => {
        console.log('err', err);
        dispatch(statusError(err.response.data.message));
      });
  };
};

export const verifyAccount = (id) => {
  return dispatch => {
    // dispatch(setStatus());
    API.patch(`users/${id}/verify`)
      .then(function (resp) {
        console.log(resp.data);
        //dispatch(setRegistration(resp.data));
      })
      .catch(err => {
        dispatch(statusError(err.response.data.message));
      });
  };
};

export const forgotPasswordAction = (data) => {
  return dispatch => {
    API.post(`users/request-reset-password`, data)
      .then(function (resp) {
        console.log(resp);
        dispatch(setForgotPassowd(resp.data));
      })
      .catch(err => {
        console.log('err', err.response.data);
        dispatch(forgotStatusError(err.response.data.message));
      });
  };
};

export const resetPasswordAction = (data, token) => {
  return dispatch => {
    API.put(`users/${token}/reset-password`, data)
      .then(function (resp) {
        console.log(resp);
        dispatch(setResetPassword(resp.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(setResetPasswordError(err.response.data.message));
      });
  };
};

export const getProfileData = (id, token) => {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return dispatch => {
    API.get(`api/users/${id}`, { headers : headers})
      .then(function (resp) {
        let uData = resp.data.data;
        dispatch(setProfileData(uData));
      })
      .catch(err => {
        console.log(err);
        dispatch(setError(err.response.data.message));
      });
  };
};

export const addInterest = (id, token, data) => {
  console.log('data', data)
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return dispatch => {
    API.post(`api/buyer/${id}/set-product-interest`, {"product_interest" : data}, { headers : headers})
      .then(function (resp) {
        console.log('resp', resp)
        //let uData = resp.data.data;
        //dispatch(setProfileData(uData));
      })
      .catch(err => {
        console.log(err);
        dispatch(setError(err.response.data.message));
      });
  };
};

export const removeInterest = (id, token, intId) => {
  console.log('data', intId, token)
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  var urlencoded = new URLSearchParams();
  urlencoded.append("product_interest_id", intId);
  return dispatch => {
    API.delete(`api/buyer/${id}/product-interest/${intId}`, { headers : headers })
      .then(function (resp) {
        console.log('resp', resp)
        //let uData = resp.data.data;
        //dispatch(setProfileData(uData));
      })
      .catch(err => {
        console.log(err);
        dispatch(setError(err.response.data.message));
      });
  };
};
