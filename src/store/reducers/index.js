import { combineReducers } from "redux";
import loginReducer from "../login";
import registerReducer from '../register';
import productReducer from '../product';
import favouritesReducer from '../favourites';
import homeReducer from '../home'
import aboutReducer from '../about'
import supplierReducer from '../supplierProfile'

const reducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  product: productReducer,
  favourite: favouritesReducer,
  home: homeReducer,
  about: aboutReducer,
  supplier: supplierReducer
});

export default reducer;