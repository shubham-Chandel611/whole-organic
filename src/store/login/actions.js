import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "./types";
import API from "../../constants/Api.js";
import history from "../../history/index";

const startLogin = () => {
  return {
    type: LOGIN_PENDING
  };
};

const loginComplete = data => ({
  type: LOGIN_SUCCESS,
  data
});

const loginError = err => ({
  type: LOGIN_ERROR,
  err
});

export const resetLogin = () => {
  return {
    type: "RESET_ERROR"
  }
}

export const resetReducer = () => {
  return {
    type: "RESET"
  }
}

export const loginUser = (data) => {
  return dispatch => {
    dispatch(startLogin());
    API.post(`users/login`, data)
      .then(function (resp) {
        let respData = resp.data.data.user;
        dispatch(loginComplete(respData));
        console.log('resp.data.data.user', respData)
        localStorage.setItem("access_token", resp.data.data.access_token);
        localStorage.setItem("name", resp.data.data.username);
        if(respData.type === 'seller'){
          if(!respData.business_email || !respData.business_email || !respData.business_number || !respData.business_type_id) {
            history.push("/setup-seller-profile");
          } else {
            history.push("/seller-profile");
          }
        } else {
          history.push("/buyer-profile");
        }
      })
      .catch(err => {
        console.log('err', err.response);
        dispatch(loginError(err.response.data.message));
      });
  };
};

export const socialLogin = (data) => {
  return dispatch => {
    dispatch(startLogin());
    API.post(`users/register/facebook`, data)
      .then(function (resp) {
        let respData = resp.data.data.user;
        console.log('resp.data.data.user', resp.data.data.user)
        dispatch(loginComplete(respData));
        if(respData.type === 'seller'){
          if(!respData.business_email || !respData.business_email || !respData.business_number || !respData.business_type_id) {
            history.push("/setup-seller-profile");
          } else {
            history.push("/seller-profile");
          }
        } else {
          history.push("/buyer-profile");
        }
      })
      .catch(err => {
        console.log('err', err.response);
        dispatch(loginError(err.response.data.message));
      });
  };
};

export const logOut = (token) => {
  return async function (dispatch) {
    var formdata = new FormData();
    let headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    };
    dispatch(resetReducer());
    API.post(`users/logout`, formdata, { headers: headers }).then(function(resp) {
      dispatch(resetReducer());
      localStorage.clear();
      history.push("/login");
    })
    .catch(err => {
      console.log('err', err.response);
      dispatch(loginError(err.response.data.message));
    });
  }
}
