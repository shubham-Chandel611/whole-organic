import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Authorization from '../constants/Authorization';
import PrivateRoute from './PrivateRoute';
import Home from "../screens/home";
import history from '../history';
import Registration from '../screens/register/Registration';
import Login from '../screens/login';
import PostAds from '../screens/ads/PostAds';
import ResetPassword from '../screens/register/ResetPassword';
import ForgotPassword from '../screens/register/ForgotPassword';
import VerifyAccount from '../screens/register/VerifyAccount';
import SetUpSellerProfile from '../screens/profile/sellerProfile/SetUpSellerProfile';
import SetUpBuyerProfile from '../screens/profile/buyerProfile/SetUpBuyerProfile';
import BuyerProfile from '../screens/profile/buyerProfile/BuyerProfile';
import SellerProfile from '../screens/profile/sellerProfile/SellerProfile';
import EditPassword from '../screens/profile/EditPassword';
import ProductDetails from '../screens/productDetail/productDetail';
import MyAds from '../screens/ads/MyAds';
import Listing from "../screens/listing/Listing";
import EditAds from '../screens/ads/EditAd';
import MyCart from '../screens/cart/MyCart';
import CartCheckout from '../screens/cart/CartCheckOut';
import RecentlyViewed from '../screens/productDetail/RecentlyViewed';
import Favourites from '../screens/favourites/Favourites';
import ContactUs from '../screens/aboutWhole/Contactus';
import Legal from '../screens/aboutWhole/Legal';
import FAQS from '../screens/aboutWhole/FAQS';
import Aboutus from '../screens/aboutWhole/Aboutus';
import ForBusiness from '../screens/aboutWhole/ForBusiness';
import SupplierPage from '../screens/profile/SupplierPage';


class AppRouter extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/listing" component={Listing} exact />
          <Route path="/myCart" component={MyCart} exact />
          <Route path="/supplierPage/:id" component={SupplierPage} exact />
          <Route path="/cart-checkout" component={CartCheckout} exact />
          <Route path="/product-detail/:id" component={ProductDetails} exact />
          <Route path="/contact-us" component={ContactUs} exact />
          <Route path="/registration" component={Registration} exact />
          <Route path="/forgot-password" component={ForgotPassword} exact />
          <Route path={`/request-reset-password/:id`} component={ResetPassword} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/request-reset-password/:id" component={Login} exact />
          <Route path="/confirm-account/:id" component={VerifyAccount} exact />
          <Route path="/legal" component={Legal} exact />
          <Route path="/faq" component={FAQS} exact />
          <Route path="/about-us" component={Aboutus} exact />
          <Route path="/for-business" component={ForBusiness} exact />
          <PrivateRoute path="/postAds" component={Authorization(PostAds, [2])} exact />
          <PrivateRoute path="/edit-ad/:id" component={Authorization(EditAds, [2])} exact />
          <PrivateRoute path="/setup-seller-profile" component={SetUpSellerProfile} exact />
          <PrivateRoute path="/setup-buyer-profile" component={SetUpBuyerProfile} exact />
          <PrivateRoute path="/buyer-profile" component={Authorization(BuyerProfile, [1])} exact />
          <PrivateRoute path="/seller-profile" component={Authorization(SellerProfile, [2])} exact />
          <PrivateRoute path="/edit-password" component={EditPassword} exact />
          <PrivateRoute path="/favourites" component={Favourites} exact />
          <PrivateRoute path="/my-ads" component={Authorization(MyAds, [2])} exact />
          <PrivateRoute path="/recent-view" component={RecentlyViewed} exact />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;