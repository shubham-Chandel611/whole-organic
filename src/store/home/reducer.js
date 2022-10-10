import {
    HOME_PRODUCTS,
    FILTER_PRODUCTS,
    HOME_RECOMMENDATION
  } from './types';
  import initialState from './initialState';
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case HOME_PRODUCTS:
        return {
          ...state,
          homeProducts: action.data.data,
          loading: false,
          success: true,
          error: false
        }
        case FILTER_PRODUCTS:
          return {
            ...state,
            filterProducts: action.data.data,
            loading: false,
            success: true,
            error: false
          }
          case HOME_RECOMMENDATION:
          return {
            ...state,
            recommendedProducts: action.data.data,
            loading: false,
            success: true,
            error: false
          }
      default:
        return state;
    }
  };
  
  export default reducer;