import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import Formsy from 'formsy-react';
import { connect } from "react-redux";
import RoundButton from '../../components/button/RoundButton';
import styles from '../../assets/css/profile/EditPassword.style'
import InputField from '../../components/common/InputField';
import TopHeading from '../../components/common/TopHeading';
import LeftNavLayout from '../../layout/LeftNavLayout';
import { buyerChangePassword, resetData } from '../../store/product/actions'
import LabelInput from '../../components/common/LabelInput';

const links = [{
  link: "#",
  name: "My account "
},
{
  link: "#",
  name: "Settings "
}
];

const useStyles = makeStyles(styles);

const EditPassword = ({
  token,
  buyerChangePassword,
  userData,
  resetData,
  message,
  error,
}) => {
  const classes = useStyles();
  const form = useRef(null);
  const [formIsValid, setFormIsValid] = useState(false);
  const closeAlert = () => {
    resetData();
  }

  const onSubmit = (model) => {
    var data = {
      'old_password': model.confirmOldPassword,
      'new_password': model.confirmNewPassword
    };
    buyerChangePassword(data, userData.uuid, token);
  }

  const disableButton = () => {
    setFormIsValid(false);
  };

  const enableButton = () => {
    setFormIsValid(true);
  };


  return (

    <LeftNavLayout
      alertMessage={message}
      showAlert={message ? true : false}
      onCloseAlert={closeAlert}
      breadCrumbLink={links}
      alertType={error ? 'error' : 'success'}
    >
      <Formsy
        id="editPassword"
        onValid={() => enableButton()}
        onInvalid={() => disableButton()}
        onValidSubmit={(e) => onSubmit(e)}
        ref={form}
      >

        <TopHeading
          heading='Settings'
          subHeading='Edit password'
        />

        <div className={classes.userInfo}>
          <div className={classes.inputLeftOuter}>
            <LabelInput label='old password' required />
            <InputField
              variant="outlined"
              type="password"
              placeholder="Enter"
              name="oldPassword"
              required
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
              inputStyle={classes.inputTextField}
            />
          </div>
          <div className={classes.inputRightOuter}>
            <LabelInput label='Confirm old password' required />
            <InputField
              variant="outlined"
              type="password"
              placeholder="Enter"
              name="confirmOldPassword"
              required
              validations="equalsField:oldPassword"
              validationErrors={{
                equalsField: 'Passwords do not match'
              }}
              inputStyle={classes.inputTextField}
            />

          </div>
        </div>

        <div className={classes.userBottomInfo}>
          <div className={classes.inputLeftOuter}>
            <LabelInput label='Create new password' required />
            <InputField
              variant="outlined"
              type="password"
              placeholder="Enter"
              name="newPassword"
              required
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
              inputStyle={classes.inputTextField}
            />
          </div>
          <div className={classes.inputRightOuter}>
            <LabelInput label='Confirm new password' required />
            <InputField
              variant="outlined"
              type="password"
              placeholder="Enter"
              name="confirmNewPassword"
              required
              validations="equalsField:newPassword"
              validationErrors={{
                equalsField: 'Passwords do not match'
              }}
              inputStyle={classes.inputTextField}
            />
          </div>
        </div>

        <RoundButton
          title={'Save changes'}
          type="submit"
          disabled={!formIsValid}
        />

      </Formsy>
    </LeftNavLayout>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  error: state.product.error,
  success: state.product.success,
  message: state.product.message,
  userData: state.login.userData,
});

const mapDispatchToProps = dispatch => ({
  buyerChangePassword: (data, id, token) => dispatch(buyerChangePassword(data, id, token)),
  resetData: () => dispatch(resetData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPassword);