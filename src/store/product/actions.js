import {
  CATEGORY_LIST,
  SUB_CATEGORY_LIST,
  CATEGORY_ERROR,
  BUSINESS_TYPE_LIST,
  SELLER_DATA,
  SET_ERROR,
  SET_MESSAGE,
  BUYER_PERSONAL_DATA,
  NOTIFY_BUYER_LIST,
  BUYER_NOTIFY_LIST,
  CHANGE_PASSWORD,
  SET_SUCCESS,
  POST_AD,
  POST_AD_ERROR,
  MY_ADS_LIST,
  EDIT_AD_ERROR,
  EDIT_AD,
  GET_PRODUCT_DETAIL,
  DELETE_AD,
  PAUSE_AD,
  ADD_TO_CART,
  RECENTLY_VIEWED,
  REMOVE_PRODUCT,
  ITEM_COUNT
} from './types';
import API from "../../constants/Api.js";
import history from "../../history/index";
import { LOGIN_SUCCESS, SET_LOGIN_DATA } from '../login/types';

const setCategoryList = data => ({
  type: CATEGORY_LIST,
  data
});

const setSubCategoryList = data => ({
  type: SUB_CATEGORY_LIST,
  data
})

const setCategoryError = err => ({
  type: CATEGORY_ERROR,
  err
})

const setPostAdError = err => ({
  type: POST_AD_ERROR,
  err
})

const setEditAdError = err => ({
  type: EDIT_AD_ERROR,
  err
})

const setBusinessTypeList = data => ({
  type: BUSINESS_TYPE_LIST,
  data
})

const setNotifyBuyerList = data => ({
  type: NOTIFY_BUYER_LIST,
  data
})

const setSellerProfile = data => ({
  type: LOGIN_SUCCESS,
  data
});

const setBuyerPersonalProfile = data => ({
  type: BUYER_PERSONAL_DATA,
  data
})

const setBuyerNotifyList = data => ({
  type: BUYER_NOTIFY_LIST,
  data
})

const setChangePassword = data => ({
  type: CHANGE_PASSWORD,
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

const setPostAd = (data) => ({
  type: POST_AD,
  data
});

const setEditAd = (data) => ({
  type: EDIT_AD,
  data
});

const setDeleteAd = (data) => ({
  type: DELETE_AD,
  data
});

const setPauseAd = (data) => ({
  type: PAUSE_AD,
  data
});

const setMyAdList = (data) => ({
  type: MY_ADS_LIST,
  data
});

const setLoginData = data => ({
  type: SET_LOGIN_DATA,
  data
});
const getProductsDetail = data => ({
  type: GET_PRODUCT_DETAIL,
  data
});

export function addToCart(data) {
  return{
    type: ADD_TO_CART,
    data
  }
}
export function removeProduct(id) {
  return {
    type: REMOVE_PRODUCT,
    data: id
  }
}
export function itemCount(data) {
  console.log("data",data);
  
  return {
    type: ITEM_COUNT,
    data: data
  }
}

const setRecentlyViewData = data => ({
  type: RECENTLY_VIEWED,
  data
});

export const resetData = () => {
  return {
    type: "RESET_DATA"
  }
}

export const getCategoryList = () => {
  return dispatch => {
    API.get(`products/categories`)
      .then(function (resp) {
        dispatch(setCategoryList(resp.data.data));
      })
      .catch(err => {
        dispatch(setCategoryError(err));
      });
  };
};

export const getSubCategoryList = (id) => {
  return dispatch => {
    API.get(`products/categories/${id}/sub-category`)
      .then(function (resp) {
        dispatch(setSubCategoryList(resp.data.data.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(setCategoryError(err));
      });
  };
};

export const getAdsListData = (id, token) => {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return dispatch => {
    API.get(`api/seller/${id}/ad`, { headers: headers })
      .then(function (resp) {
        dispatch(setMyAdList(resp.data.data.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(setError(err));
      });
  };
};

export const getBusinessTypeList = () => {
  return dispatch => {
    API.get(`static-list/business-type`)
      .then(function (resp) {
        dispatch(setBusinessTypeList(resp.data.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(setCategoryError(err));
      });
  };
};

export const postAdAction = (userId, data, token) => {

  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return dispatch => {
    API.post(`api/seller/${userId}/ad`, data, { headers: headers })
      .then(function (resp) {
        console.log('resp-----', resp)
        dispatch(setPostAd(resp.data.data));
        history.push('/my-ads')
      })
      .catch(err => {
        console.log(err);
        dispatch(setPostAdError(err));
      });
  };
};

export const pauseAdAction = (userId, token, adId) => {
  var formData = new FormData();
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return dispatch => {
    API.put(`api/seller/${userId}/ad/${adId}`, formData, { headers: headers })
      .then(function (resp) {
        dispatch(setPauseAd(resp.data.data));
        history.push('/my-ads')
      })
      .catch(err => {
        console.log(err);
        dispatch(setPostAdError(err));
      });
  };
};

export const deleteAdAction = (userId, token, adId) => {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };

  return dispatch => {
    API.delete(`api/seller/${userId}/ad/${adId}`, { headers: headers })
      .then(function (resp) {
        console.log('resp-----', resp)
        dispatch(setDeleteAd(resp.data.data));
        history.push('/my-ads')
      })
      .catch(err => {
        console.log(err);
        dispatch(setPostAdError(err));
      });
  };
};

export const editAdAction = (userId, data, token, adId) => {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return dispatch => {
    API.post(`api/seller/${userId}/ad/${adId}`, data, { headers: headers })
      .then(function (resp) {
        console.log('resp-----', resp)
        dispatch(setEditAd(resp.data.data));
        history.push('/my-ads')
      })
      .catch(err => {
        console.log(err);
        dispatch(setEditAdError(err));
      });
  };
};

export const sellerProfileAction = (data, id, token) => {
  return dispatch => {
    let headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    };
    console.log('sellerProfileAction', data)
    API.post(`api/seller/${id}/profile`, data, { headers: headers })
      .then(function (resp) {
        console.log('resp.data', resp.data)
        dispatch(setSellerProfile(resp.data.data))
        dispatch(setSucces('Your account updated successfully'))
        history.push("/seller-profile");
      })
      .catch(err => {
        console.log('err', err.response)
        dispatch(setError(err.response.data.message))
      })
  }
}

export const buyerProfilePersonalAction = (data, id, token) => {
  return dispatch => {
    let headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    };
    console.log('buyerProfilePersonalAction', data)
    API.post(`api/buyer/${id}/profile`, data, { headers: headers })
      .then(function (resp) {
        console.log('resp.data', resp.data)
        let uData = resp.data.data;
        dispatch(setLoginData({
          "id": uData.id,
          "first_name": uData.first_name,
          "last_name": uData.last_name,
          "email": uData.email,
          "profile_picture": uData.profile_picture,
        }))
        dispatch(setBuyerPersonalProfile(resp.data.data))
        dispatch(setSucces('Your account updated successfully'))
      })
      .catch(err => {
        console.log('err', err)
        dispatch(setError(err.response.data.message))
      })
  }
}

export const notifyBuyerListAction = (data, id, token) => {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return dispatch => {
    console.log('data', data)
    API.put(`/api/users/${id}/set-settings`, data, { headers: headers })
      .then(function (resp) {
        console.log(resp);
        dispatch(setBuyerNotifyList(resp.data));
      })
      .catch(err => {
        console.log('err', err);
        dispatch(setError(err.response.data.message))
      });
  };
};

export const buyerChangePassword = (data, id, token) => {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return dispatch => {
    console.log('data', data)
    API.post(`/api/users/${id}/edit-password`, data, { headers: headers })
      .then(function (resp) {
        console.log(resp);
        dispatch(setChangePassword(resp.data));
      })
      .catch(err => {
        console.log('err', err);
        dispatch(setError(err.response.data.message))
      });
  };
};

export const getNotifyBuyerList = () => {
  return dispatch => {
    API.get(`static-list/settings-list`)
      .then(function (resp) {
        dispatch(setNotifyBuyerList(resp.data.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(setError(err.response.data.message))
      });
  };
};

export const getProductDetail = (id) => {
  return dispatch => {
    API.get(`/ad/${id}`)
      .then(function (resp) {
        console.log("res", resp);
        dispatch(getProductsDetail(resp.data.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(setError(err.response.data.message))
      });
  };
};


export const getRecentlyViewed = (data) => {
  console.log('data', data)
  return dispatch => {
    console.log('data', data)
    API.get(`/ad/recently-viewed?item_per_page=10`)
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

export const postEnquiry = (id, data, token) => {
  console.log('data', data)
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return API.post(`/api/buyer/${id}/enquiry`, data, { headers: headers })
      .then(function (resp) {
        return resp
      })
      .catch(err => {
        return err
      });
};

export const setRecommendation = (adId, buyerId) => {
  return dispatch => {
    API.get(`/ad/${adId}?buyer_id=${buyerId}`)
      .then(function (resp) {
        console.log('fjsdf-d-d-d-=-=c-c--cc=', resp)
      })
      .catch(err => {
        console.log('err', err.response)
      });
  };
};


