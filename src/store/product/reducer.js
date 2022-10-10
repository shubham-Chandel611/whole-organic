import {
  CATEGORY_LIST,
  SUB_CATEGORY_LIST,
  CATEGORY_ERROR,
  BUSINESS_TYPE_LIST,
  SELLER_DATA,
  SET_ERROR,
  POST_AD,
  ADD_TO_CART,
  SET_SUCCESS,
  NOTIFY_BUYER_LIST,
  BUYER_PERSONAL_DATA,
  POST_AD_ERROR,
  MY_ADS_LIST,
  EDIT_AD_ERROR,
  EDIT_AD,
  PAUSE_AD,
  DELETE_AD,
  GET_PRODUCT_DETAIL,
  RECENTLY_VIEWED,
  REMOVE_PRODUCT,
  ITEM_COUNT
} from './types';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_LIST:
      return {
        ...state,
        categories: action.data,
        loading: false,
        success: true,
        error: false
      }
    case SUB_CATEGORY_LIST:
      return {
        ...state,
        subCategories: action.data,
        loading: false,
        success: true,
        error: false
      }
    case CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        //message: action.err,
        success: false,
        error: true
      }
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.data,
        loading: false,
        success: true,
        error: false
      }
    case ADD_TO_CART:
      const { productDetail } = action.data
      const quantitys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      let upated = state.updateItem
      let arr = (state.cartList) ? state.cartList : []
      let cartProducts = []
      if(arr && arr.length>0){
        cartProducts = arr.filter(item => {
          return item.id === productDetail.id
        })
      }
      if (cartProducts.length > 0) {
        arr.map((item) => {
          if (item.id === productDetail.id) {
            if((item.quantity + productDetail.quantity) >=10 ){
              item.quantity = 10
              item.quantityArr = quantitys
            } else{
              item.quantity = item.quantity + productDetail.quantity
              item.quantityArr = quantitys

            }
          }
        })
      } else {
        productDetail.quantityArr = quantitys
        arr.push(productDetail)
      }
      return {
        ...state,
        cartList: arr,
        updateItem: !upated

      }

      case ITEM_COUNT: {
        const{count,itemId} = action.data
        let arr = state.cartList
        let upated = state.updateItem
        arr.map((item)=>{
          if(item.id ==itemId ){
            item.quantity = count
          }
        })
        return {
          cartList: arr,
          updateItem: !upated
        };
      }

    case REMOVE_PRODUCT: {
      let cartItems = state.cartList
      let id = action.data
      let removeProduct = cartItems.filter(cartItem => {
        return (cartItem.id !== id)
      })
      return {
        cartList: removeProduct
      };
    }
    case RECENTLY_VIEWED:
      return {
        ...state,
        recentlyData: action.data,
        loading: false,
        success: true,
        error: false
      }
    case POST_AD_ERROR:
      return {
        ...state,
        loading: false,
        //message: action.err,
        success: false,
        error: true
      }
    case EDIT_AD_ERROR:
      return {
        ...state,
        loading: false,
        //message: action.err,
        success: false,
        error: true
      }
    case BUSINESS_TYPE_LIST:
      return {
        ...state,
        businessTypeList: action.data,
        loading: false,
        success: true,
        error: false
      }
    case NOTIFY_BUYER_LIST:
      return {
        ...state,
        notifyBuyerList: action.data,
        loading: false,
        success: true,
        error: false
      }
    case BUYER_PERSONAL_DATA:
      return {
        ...state,
        buyerPersonalDetails: action.data,
        loading: false,
        success: true,
        error: false
      }
    case SELLER_DATA:
      return {
        ...state,
        loading: false,
        success: true,
        sellerData: action.data,
        error: false,
      };
    case SET_ERROR:
      return {
        ...state,
        success: false,
        error: true,
        message: action.data,
      }
    case SET_SUCCESS:
      return {
        ...state,
        success: true,
        error: false,
        message: action.data,
      }
    case POST_AD:
      return {
        ...state,
        success: true,
        error: false,
        message: action.data,
      }
    case EDIT_AD:
      return {
        ...state,
        success: true,
        error: false,
        message: action.data,
      }
    case DELETE_AD:
      return {
        ...state,
        success: true,
        error: false,
        message: action.data,
      }
    case PAUSE_AD:
      return {
        ...state,
        success: true,
        error: false,
        message: action.data,
      }
    case MY_ADS_LIST:
      return {
        ...state,
        myAdsList: action.data,
        loading: false,
        success: true,
        error: false
      }
    case "RESET_DATA":
      return {
        ...state,
        subCategories: [],
        productDetail: null,
        success: false,
        error: false,
        message: null,
      }
    default:
      return state;
  }
};

export default reducer;