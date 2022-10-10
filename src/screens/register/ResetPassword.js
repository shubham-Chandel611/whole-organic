/**
 * This is reset password screen
 * This layout included FullWidth layout, 
 * All content rendered in FullWidth layout
 */

import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { Typography, makeStyles, } from "@material-ui/core";
import RoundButton from '../../components/button/RoundButton';
import styles from '../../assets/css/register/ResetPassword.style';
import InputField from '../../components/common/InputField';
import { resetPasswordAction, resetRegData } from "../../store/register/actions";
import Formsy from "formsy-react";
import FullWidth from "../../layout/FullWidth";

const useStyles = makeStyles(styles);

const links = [{
  link: "#",
  name: "Create a new password"
}]

const ResetPassword = ({
  resetPasswordAction,
  reset_password_error,
  reset_password_success,
  resetRegData,
  match
}) => {
  
  const form = useRef(null);
  const classes = useStyles();
  const [formIsValid, setFormIsValid] = useState(false);
  const [event, setEvent] = useState(
    {
      createPassword: '',
      confirmPassword: '',
    }
  )

  {/* Call funtion on submit button click */}
  const onSubmit = (modal) => {
    if (modal.password === modal.confirmPassword) {
      let id = match.params.id;
      let data = { 'new_password': modal.password }
      resetPasswordAction(data, id);
    } else {
      alert(`Password doesn't match`)
    }
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

  const {
    createPassword,
    confirmPassword,
  } = event;

  return (
    <FullWidth
      alertMessage={reset_password_success ?
        "Your password has been changed"
        : reset_password_error}
      showAlert={reset_password_success || reset_password_error ? true : false}
      onCloseAlert={closeAlert}
      breadCrumbLink={links}
      alertType={reset_password_error ? 'error' : 'success'}
    >
      <div className={classes.passwordContainer}>

        <Typography className={classes.passwordLabel}>Create a new password</Typography>
        <Typography className={classes.passwordSubHeading}>Enter your new password</Typography>
        <Formsy
          id="FORGOT_PASSWORDForm"
          onValidSubmit={(e) => onSubmit(e)}
          onValid={() => enableButton()}
          onInvalid={() => disableButton()}
          ref={form}
        >
          <div className={classes.textFieldOuter}>
            <div className={classes.inputFieldOuter}>
              <InputField
                name="password"
                placeholder="Create new password"
                type='password'
                inputName="createPassword"
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
                inputValue={createPassword}
              />
            </div>
            <div className={classes.inputFieldOuter}>
              <InputField
                name="confirmPassword"
                type='password'
                placeholder="Confirm new password"
                validations="equalsField:password"
                inputProps={{
                  maxLength: 20,
                }}
                validationErrors={{
                  equalsField: 'Passwords do not match'
                }}
                security={true}
                required
                inputName="confirmPassword"
                inputValue={confirmPassword}
                inputStyle={classes.textFieldStyle}
              />
            </div>
          </div>

          <RoundButton
            title={'Save password'}
            type='submit'
            disabled={!formIsValid}
          />
        </Formsy>
      </div>
    </FullWidth>
  );
};

const mapStateToProps = state => ({
  reset_password_error: state.register.reset_password_error,
  reset_password_success: state.register.reset_password_success,
});

const mapDispatchToProps = dispatch => ({
  resetPasswordAction: (data, token) => dispatch(resetPasswordAction(data, token)),
  resetRegData: () => dispatch(resetRegData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);