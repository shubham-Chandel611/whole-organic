import {
  HOME_PRODUCTS,
  SET_ERROR,
  FILTER_PRODUCTS,
  HOME_RECOMMENDATION,
} from "./types";
import API from "../../constants/Api.js";

const setHomeProductsData = (data) => ({
  type: HOME_PRODUCTS,
  data,
});

const setFilterProductsData = (data) => ({
  type: FILTER_PRODUCTS,
  data,
});

const getRecommendationProductsData = (data) => ({
  type: HOME_RECOMMENDATION,
  data,
});

const setError = (data) => ({
  type: SET_ERROR,
  data,
});

export const getHomeProducts = () => {
  return (dispatch) => {
    API.get(`ad/most-popular?item_per_page=${"10"}`)
      .then(function (resp) {
        console.log("ressss", resp);

        dispatch(setHomeProductsData(resp?.data?.data));
      })
      .catch((err) => {
        dispatch(setError(err.response?.data?.message));
      });
  };
};

export const getFilterProducts = (values) => {
  console.log("getFilterProducts values", values);
  let name = values && values.name ? `&name=${values.name}` : "";
  let page = values && values.page ? `&page=${values.page + 1}` : "";
  let catId = values && values.catId ? `&category_id=${values.catId}` : "";
  let subId = values && values.subId ? `&sub_category_id=${values.subId}` : "";
  let price =
    values && values.price && values.price.length > 0
      ? `&price=${values.price}`
      : "";
  let location =
    values && values.location ? `&location=${values.location}` : "";
  let rating =
    values && values.rating && values.rating.length > 0
      ? `&rating_value=${values.rating}`
      : "";
  let sort = values && values.sort ? `&sort-by[${values.sort}]=asc` : "";
  const url = `search/ad/filter-search?item_per_page=9${name}${catId}${subId}${price}${location}${rating}${sort}${page}`;
  console.log("url", url);
  return (dispatch) => {
    API.get(url)
      .then(function (resp) {
        console.log("resp.data", resp.data);
        dispatch(setFilterProductsData(resp?.data));
      })
      .catch((err) => {
        dispatch(setError(err?.response?.data?.message));
      });
  };
};

export const getRecommendationProducts = (id, token) => {
  console.log("token", token);
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return (dispatch) => {
    API.get(`api/buyer/${id}/recommendations?item_per_page=4`, {
      headers: headers,
    })
      .then(function (resp) {
        console.log("getRecommendationProducts", resp);
        dispatch(getRecommendationProductsData(resp?.data?.data));
      })
      .catch((err) => {
        dispatch(setError(err?.response?.data?.message));
      });
  };
};
