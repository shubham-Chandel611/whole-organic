/**
 * This is login screen
 * This layout included FullWidth layout, 
 * All content rendered in FullWidth layout
 */

import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Typography, makeStyles } from "@material-ui/core";
import RoundButton from '../../components/button/RoundButton';
import styles from '../../assets/css/login/Login.style';
import InputField from '../../components/common/InputField';
import {loginUser, resetLogin } from '../../store/login/actions'
import Formsy from 'formsy-react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../components/socialLogin/SocialLogin';
import FullWidth from "../../layout/FullWidth";

const links = [{
  link: "#",
  name: "Login"
}]

const useStyles = makeStyles(styles);
const Login = ({
    loginUser,
    loginError,
    resetLogin
}) => {
  const classes = useStyles();
  const [formIsValid, setFormIsValid] = useState(false);
  const form = useRef(null);

  useEffect(()=>{
    resetLogin();
  },[]);

  {/* Call funtion on submit button click */}
  const onSubmit = (modal) => {
    loginUser(modal);
  }

  {/* This function check the all form validation */}
  const disableButton = () => {
    setFormIsValid(false)
  };

  {/* This function enable the Submit button when all validations are validate */}
  const enableButton = () => {
    setFormIsValid(true)
  };

  {/* This function close the alert message */}
  const closeAlert = () => {
    resetLogin();
  } 
  
  return (
    <FullWidth
      alertMessage = {loginError ? loginError : ''}
      showAlert={loginError ? true : false}
      onCloseAlert={closeAlert}
      breadCrumbLink={links}
      alertType={loginError ? 'error' : 'success'}
    >
      <div className={classes.container}>
        <div className={classes.leftOuter}>
          <Formsy
            id="loginForm"
            onValidSubmit={(e) => onSubmit(e)}
            onValid={() => enableButton()}
            onInvalid={() => disableButton()}
            ref={form}
          >
            <Typography className={classes.createAccount}>Welcome back</Typography>
            <div className={classes.textFieldOuter}>
              <div style={{ width: '70%' }}>
                <InputField
                  type="email"
                  name="email"
                  placeholder="Email address"
                  validations="isEmail"
                  validationErrors={{
                    isEmail: 'Please enter a valid email'
                  }}
                  inputProps={{
                    maxLength: 50,
                  }}
                  required
                />
              </div>
            </div>
            <div className={classes.textFieldOuter}>
              <div style={{ width: '70%' }}>
                <InputField
                  type="password"
                  name="password"
                  validations={{
                    minLength: 8,
                    maxLength: 20
                  }}
                  validationErrors={{
                    minLength: 'Min character length is 8',
                    maxLength: 'Max character length is 20'
                  }}
                  inputProps={{
                    maxLength: 20,
                  }}
                  security={true}
                  required
                  placeholder="Password"
                />
              </div>
            </div>
            <Link to="/forgot-password" className={classes.captcheText}>Forgot your Password?</Link>
            <RoundButton
              title={'Login'}
              type="submit"
              containerStyle={classes.roundButtonContainer}
              disabled={!formIsValid}
            />
            <Typography className={classes.rgisterText}>Don't you have account? Please
              <Link to="/registration" className={classes.link}><u> register </u></Link>
            </Typography>
          </Formsy>
        </div>
        <div className={classes.divisionLine}></div>
        <SocialLogin section="login" />
      </div>
    </FullWidth>
  );
};

const mapStateToProps = state => ({
  loginError: state.login.loginError
});

const mapDispatchToProps = dispatch => ({
  loginUser: (token, id, data) => dispatch(loginUser(token, id, data)),
  resetLogin: () => dispatch(resetLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);