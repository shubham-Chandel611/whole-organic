import React, { useEffect } from "react";
import { connect } from "react-redux";
import PersonalAccount from './SellerPersonalViewProfile';
import BusinessAccount from './SellerBusinessViewProfile';
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
        <PersonalAccount />
        <BusinessAccount />
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