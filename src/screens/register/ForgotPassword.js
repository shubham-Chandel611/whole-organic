/**
 * This is forgot password screen
 * This layout included FullWidth layout, 
 * All content rendered in FullWidth layout
 */

import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Typography, makeStyles, } from "@material-ui/core";
import RoundButton from '../../components/button/RoundButton';
import styles from '../../assets/css/register/ForgotPassword.style';
import InputField from '../../components/common/InputField';
import Formsy from "formsy-react";
import { forgotPasswordAction, resetRegData } from "../../store/register/actions";
import FullWidth from "../../layout/FullWidth";

const useStyles = makeStyles(styles);

const links = [{
  link: "#",
  name: "Forgot password"
}]

const ForgotPassword = ({
  forgotPasswordAction,
  forgot_success,
  forgot_error,
  resetRegData
}) => {
  const form = useRef(null);
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [formIsValid, setFormIsValid] = useState(false);

  
  useEffect(() => {
    resetRegData();
  }, []);

  {/* Call funtion on submit button click */}
  const onSubmit = (modal) => {
    forgotPasswordAction(modal);
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
    resetRegData();
  }

  return (
    <FullWidth
      alertMessage={forgot_success ?
        "Reset password link sent on your email, Please check your email"
        : forgot_error}
      showAlert={forgot_success || forgot_error ? true : false}
      onCloseAlert={closeAlert}
      breadCrumbLink={links}
      alertType={forgot_error ? 'error' : 'success'}
    >
      <div className={classes.passwordContainer}>
        <Typography className={classes.forgotLabel}>Forgot your password?</Typography>
        <Typography className={classes.forgotSubHeading}>Enter your email address and we will send you an email to reset your password</Typography>
        <Formsy
          id="ForgotPasswordForm"
          onValidSubmit={(e) => onSubmit(e)}
          onValid={() => enableButton()}
          onInvalid={() => disableButton()}
          ref={form}
        >
          <div className={classes.emailOuter}>
            <div className={classes.inputFieldOuter}>
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
            <div style={{ width: '20%' }}>
              <RoundButton
                title={'Send'}
                type='submit'
                containerStyle={classes.loginButtonContainer}
                disabled={!formIsValid}
              />
            </div>
          </div>
        </Formsy>
      </div>
    </FullWidth>
  );
};


const mapStateToProps = state => ({
  forgot_success: state.register.forgot_success,
  forgot_error: state.register.forgot_error,
});

const mapDispatchToProps = dispatch => ({
  forgotPasswordAction: (data) => dispatch(forgotPasswordAction(data)),
  resetRegData: () => dispatch(resetRegData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);