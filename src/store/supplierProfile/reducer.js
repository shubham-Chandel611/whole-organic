import {
  GET_RATING,
  GET_NEW_ITEM,
  RECENTLY_VIEWED

} from './types';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RATING:
      return {
        ...state,
        supplierRating: action.data,
        loading: false,
        success: true,
        error: false
      }
      case GET_NEW_ITEM:
        return {
          ...state,
          newItems: action.data.data,
          loading: false,
          success: true,
          error: false
        }
        case RECENTLY_VIEWED:
        return {
          ...state,
          recentViews: action.data.data,
          loading: false,
          success: true,
          error: false
        }
   
    default:
      return state;
  }
};

export default reducer;