import React, { useEffect } from "react";
import { connect } from "react-redux";
import BuyerPersonalViewProfile from './BuyerPersonalViewProfile';
import BuyerBusinessViewProfile from './BuyerBusinessViewProfile';
import { getCategoryList, getSubCategoryList } from '../../../store/product/actions';
import LeftNavLayout from '../../../layout/LeftNavLayout'

const links = [{
  link: "#",
  name: "My account "
},
{
  link: "#",
  name: "My profile "
}
];

const SellerViewProfile = ({
  getCategoryList,
  getSubCategoryList,
  token,
}) => {

  useEffect(() => {
    getCategoryList(token);
  }, []);

  return (
    <LeftNavLayout
      //alertMessage = {message}
      //showAlert={message ? true : false}
      //onCloseAlert={closeAlert}
      breadCrumbLink={links}
    //alertType={error ? 'error' : 'success'}
    >

      <div>
        <BuyerPersonalViewProfile />
        <BuyerBusinessViewProfile />
      </div>

    </LeftNavLayout>
  );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  getCategoryList: (token) => dispatch(getCategoryList(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellerViewProfile);