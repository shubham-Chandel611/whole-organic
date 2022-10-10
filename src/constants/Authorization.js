import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "../screens/home";

const Authorization = (WrappedComponent, allowedRoles) => {
  class WithAuthorization extends Component {
    render() {
      const userType = this.props.userType;

      if (allowedRoles.includes(userType)) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <Home />;
      }
    }
  }
  const mapStateToProps = state => ({ userType: state.login.userType });
  return connect(mapStateToProps)(WithAuthorization);
};
export default Authorization;
