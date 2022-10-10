import React, { useState } from "react";
import { connect } from "react-redux";
import PostAdsStepFirst from './PostAdFirstStep'
import FullWidth from "../../layout/FullWidth";
import PostAdSecondStep from "./PostAdSecondStep";

const links = [{
  link: "#",
  name: "Post an ad"
}]

const PostAds = () => {
  const [productName, setProductName] = useState('');
  const [productCategoryId, setProductCategory] = useState(null);
  const [productSubCatId, setProductSubCat] = useState(null);
  const [stepSecond, setStepSecond] = useState(false);

  const buttonClicked = (name, category, subCategory) => {
    setProductCategory(category)
    setProductSubCat(subCategory)
    setProductName(name)
    setStepSecond(true)
  }

  return (
    <FullWidth
      breadCrumbLink={links}
    >
      {(!stepSecond) ? <PostAdsStepFirst
        postcallback={(name, category, subCategory) => { buttonClicked(name, category, subCategory) }}
      /> :
        <PostAdSecondStep
          productCategoryId={productCategoryId}
          productName={productName}
          productSubCategoryId={productSubCatId}
          postcallback={() => { setStepSecond(false) }}
        />}
    </FullWidth>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  categories: state.product.categories,
  subCategories: state.product.subCategories,
  userData: state.login.userData,
  error: state.product.error,
  success: state.product.success,
  message: state.product.message,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostAds);

