/**
 * This is registration screen
 * This layout included FullWidth layout, 
 * All content rendered in FullWidth layout
 */

import React, { useState, useRef, useEffect } from "react";
import { Typography, makeStyles, FormControlLabel, Checkbox, FormGroup } from "@material-ui/core";
import { CheckBoxOutlineBlank, CheckBox } from "@material-ui/icons";
import { connect } from "react-redux";
import RoundButton from '../../components/button/RoundButton';
import styles from '../../assets/css/register/Registration.style';
import InputField from '../../components/common/InputField';
import { registrationAction, resetRegData } from '../../store/register/actions';
import Formsy from 'formsy-react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../components/socialLogin/SocialLogin';
import GoogleRecaptcha from '../../services/googleService/googleReCaptcha';

import FullWidth from "../../layout/FullWidth";

const links = [{
  link: "#",
  name: "Register"
}]

const useStyles = makeStyles(styles);

const Registration = ({
  registrationAction,
  registration_error,
  registration_success,
  resetRegData
}) => {
  const classes = useStyles();
  const form = useRef(null);
  const [termsCheck, setTermsCheck] = useState(true);
  const [buyerCheck, setBuyerCheck] = useState(true);
  const [sellerCheck, setSellerCheck] = useState(false);
  const [type, typeSelect] = useState('buyer');
  const [formIsValid, setFormIsValid] = useState(false);
  const [captchaChecked, setCaptcha] = useState(false);

  useEffect(()=>{
    resetRegData();
  },[]);

  {/* Call funtion on submit button click */}
  const onSubmit= (modal) =>{
    modal.type = buyerCheck ? "buyer" : "seller";
    registrationAction(modal);
  }

  {/* active buyer type */}
  const buyerClicked = () => {
    setSellerCheck(!sellerCheck)
    setBuyerCheck(!buyerCheck)
    typeSelect('buyer')
  }

  {/* active seller type */}
  const sellerClicked = () => {
    setSellerCheck(!sellerCheck)
    setBuyerCheck(!buyerCheck)
    typeSelect('seller')
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

  {/* set captcha checked or not */}
  const checkRecaptcha = (event) => {
    setCaptcha(event)
  }

  return (
    <FullWidth
      alertMessage = {registration_error ? registration_error : registration_success ? 'Your account is successfully create, please verify your account.' : ''}
      showAlert={(registration_error || registration_success) ? true : false}
      onCloseAlert={closeAlert}
      breadCrumbLink={links}
      alertType={registration_error  ? 'error' : 'success'}
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
            <Typography className={classes.createAccount}>Create an account</Typography>
            <div className={classes.textFieldOuter}>
              <div className={classes.inputFieldOuter}>
                <InputField
                  name="first_name"
                  placeholder="First name"
                  inputName="first_name"
                  required
                  maxLength="20"
                  validations={{
                    minLength: 2
                  }}
                  validationErrors={{
                    minLength: 'Min character length is 2'
                  }}
                  inputProps={{
                    maxLength: 20,
                  }}
                />
              </div>
              <div className={classes.inputFieldOuter}>
                <InputField
                  name="last_name"
                  placeholder="Last name"
                  inputName="last_name"
                  required
                  validations={{
                    minLength: 2
                  }}
                  validationErrors={{
                    minLength: 'Min character length is 2'
                  }}
                  inputProps={{
                    maxLength: 20,
                  }}
                  inputStyle={classes.textFieldStyle}
                />
              </div>
            </div>

            <div className={classes.textFieldOuter}>
              <div className={classes.inputFieldOuter}>
                <InputField
                  name="email"
                  placeholder="Email address"
                  inputName="email"
                  required
                  validations="isEmail"
                  validationErrors={{
                    isEmail: 'Please enter a valid email'
                  }}
                  inputProps={{
                    maxLength: 50,
                  }}
                />
              </div>
              <div className={classes.inputFieldOuter}>
                <InputField
                  type="password"
                  name="password"
                  placeholder="Create password"
                  inputName="password"
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
                  inputStyle={classes.textFieldStyle}
                  minValue={2}
                />
              </div>
            </div>

            <div className={classes.choiceOuter}>
              <Typography className={classes.iamText}>I am </Typography>

              <FormGroup
                row
                value={type}
              >
                <FormControlLabel
                  label="A supplier"
                  classes={{
                    label: classes.labelText
                  }}
                  control={
                    <Checkbox
                      checked={sellerCheck}
                      icon={<CheckBoxOutlineBlank className={classes.unCheckedIconStyle} />}
                      checkedIcon={<CheckBox className={classes.checkedIconStyle} />}
                      value={'seller'}
                      onClick={() => sellerClicked()}
                    />
                  }
                />
                <FormControlLabel
                  label="A buyer "
                  classes={{
                    label: classes.labelText
                  }}

                  control={
                    <Checkbox
                      checked={buyerCheck}
                      icon={<CheckBoxOutlineBlank className={classes.unCheckedIconStyle} />}
                      checkedIcon={<CheckBox className={classes.checkedIconStyle} />}
                      value={'buyer'}
                      onClick={() => buyerClicked()}
                    />
                  }
                />
              </FormGroup>
            </div>

            <div>
              <Typography className={classes.captcheText}>Before you proceed please complete the captche below</Typography>
              <GoogleRecaptcha onClick={checkRecaptcha} />
            </div>

            <RoundButton
              title={'Register'}
              type="submit"
              disabled={!formIsValid || !captchaChecked || !termsCheck}
            />

            <div className={classes.checkBoxOuter}>
              <FormControlLabel
                label=" By Registering. you agree that you've read and accepted our User Agreement, you're at least 18 years old,
                  and you consent to our Privacy Notice and receiving marketing communications from us."
                classes={{
                  label: classes.labelText
                }}
                style={{ alignItems: 'flex-start', }}
                control={
                  <Checkbox
                    checked={termsCheck}
                    icon={<CheckBoxOutlineBlank style={{ marginTop: -5, color: '#1FC5CB' }} />}
                    checkedIcon={<CheckBox className={classes.checkedTrue} />}
                    onClick={() => setTermsCheck(!termsCheck)}
                  />
                }
              />
            </div>
          </Formsy>

          <Typography className={classes.alreadyText}>Already a member ? Please
            <Link to="/login" className={classes.link}><u> login </u></Link>
          </Typography>
        </div>

        <div className={classes.divisionLine}></div>
        <SocialLogin section="register" />
      </div>
    </FullWidth>
  );
};

const mapStateToProps = state => ({
  registration_error: state.register.registration_error,
  registration_success: state.register.registration_success,
});

const mapDispatchToProps = dispatch => ({
  registrationAction: (data) => dispatch(registrationAction(data)),
  resetRegData: () => dispatch(resetRegData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);