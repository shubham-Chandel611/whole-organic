/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useRef } from "react";
import { Typography, makeStyles, FormControl, MenuItem, Select } from "@material-ui/core";
import Formsy from 'formsy-react';
import { connect } from "react-redux";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import RoundButton from '../../../components/button/RoundButton';
import styles from '../../../assets/css/profile/SetUpSellerProfile.style';
import InputField from '../../../components/common/InputField';
import AddressAutoComplete from '../../../components/common/AddressAutoComplete';
import ImageUploader from '../../../components/common/ImageUploader';
import { getBusinessTypeList, sellerProfileAction, resetData } from '../../../store/product/actions';
import _ from 'lodash';
import FullWidth from "../../../layout/FullWidth";
import LabelInput from '../../../components/common/LabelInput';

const links = [{
  link: "#",
  name: "Sign up to add post"
}];

const useStyles = makeStyles(styles);

const SetUpSellerProfile = ({
  getBusinessTypeList,
  businessTypeList,
  token,
  sellerProfileAction,
  userData,
  message,
  error,
  resetData
}) => {
  const classes = useStyles();
  const form = useRef(null);
  const [imgData, setImgData] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [event, setEvent] = useState(
    {
      businessName: '',
      businessEmail: '',
      businessClass: '',
      description: '',
      businessType: 0,
    }
  )
  const [location, setLocation] = useState(
    {
      address: "",
      latitude: "",
      longitude: "",
    }
  );

  useEffect(() => {
    resetData();
    getBusinessTypeList(token);
  }, []);

  const handlePlaceChange = address => {
    location['address'] = address;
    location['latitude'] = null;
    location['longitude'] = null;
    setLocation({ ...location });
  }

  const handlePlaceSelect = selected => {
    location['address'] = selected;
    geocodeByAddress(selected)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        location["latitude"] = lat;
        location["longitude"] = lng;
        setLocation({ ...location });
      })
  }

  const handleChange = e => {
    event[e.target.name] = e.target.value;
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const disableButton = () => {
    setFormIsValid(false);
  };

  const enableButton = () => {
    setFormIsValid(true);
  };

  const onSubmit = (model) => {
    var formdata = new FormData();
    formdata.append("first_name", userData.first_name);
    formdata.append("last_name", userData.last_name);
    formdata.append("email", userData.email);
    formdata.append("business_email", model.businessEmail);
    formdata.append("location", location.address);
    formdata.append("lat", location.latitude);
    formdata.append("lng", location.longitude);
    formdata.append("business_type_id", event.businessType);
    formdata.append("business_name", model.businessName);
    formdata.append("business_description", model.description);
    formdata.append("business_number", model.businessClass);
    formdata.append("business_account_type", "personal");
    imgData && formdata.append("image", imgData, "file");
    sellerProfileAction(formdata, userData.id, token)
  }

  const handleDocUpload = (e, type) => {
    var file = e.target.files[0];
    setImgData(file)
  }

  const closeAlert = () => {
    resetData();
  }

  const {
    businessName,
    businessEmail,
    businessClass,
    description,
    businessType,
  } = event;

  const {
    address,
  } = location;

  return (
    <FullWidth
      alertMessage={message}
      showAlert={message ? true : false}
      onCloseAlert={closeAlert}
      breadCrumbLink={links}
      alertType={error ? 'error' : 'success'}
    >
      <div className={classes.container}>
        <Formsy
          id="SetUpSellerProfile"
          onValid={() => enableButton()}
          onInvalid={() => disableButton()}
          onValidSubmit={(e) => onSubmit(e)}
          ref={form}
        >
          <Typography className={classes.profileLabel}>Set-up your profile</Typography>
          <Typography className={classes.completeRegistration}>Complete registration</Typography>
          <div className={classes.profileImageOuter}>
            <ImageUploader
              onChange={(event) => handleDocUpload(event, 'Id')}
            />
          </div>
          <div className={classes.businessFieldOuter}>
            <div className={classes.inputFieldLeftOuter}>
              <LabelInput label='Select business type' required />
              <FormControl variant="outlined" fullWidth>
                <Select
                  name='businessType'
                  onChange={handleChange}
                  className={classes.selectTextField}
                  value={businessType}
                  defaultValue="Select"
                  placeholder='Select'
                >
                  <MenuItem value={0}>Select...</MenuItem>
                  {businessTypeList && businessTypeList.length ? businessTypeList[1].map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.type}
                    </MenuItem>
                  )) : null}
                </Select>
              </FormControl>
            </div>

            <div className={classes.inputFieldRightOuter}>
              <LabelInput label='Add business email address' required />
              <InputField
                variant="outlined"
                type="text"
                name="businessEmail"
                placeholder="Email address"
                required
                inputValue={businessEmail}
                validations="isEmail"
                validationErrors={{
                  isEmail: 'Please enter a valid email'
                }}
                inputProps={{
                  maxLength: 50,
                }}
                inputStyle={classes.inputTextField}
              />
            </div>
          </div>

          <div className={classes.textFieldOuter}>
            <div className={classes.inputFieldLeftOuter}>
              <LabelInput label='Add business Name' required />
              <InputField
                variant="outlined"
                type="text"
                name="businessName"
                placeholder="Business Name"
                required
                inputValue={businessName}
                maxLength="50"
                validations={{
                  minLength: 2
                }}
                validationErrors={{
                  minLength: 'Min character length is 2'
                }}
                inputProps={{
                  maxLength: 50,
                }}
                inputStyle={classes.inputTextField}
              />
            </div>

            <div className={classes.inputFieldRightOuter}>
              <LabelInput label='Add business ABN or ACN' required />
              <InputField
                variant="outlined"
                type="text"
                name="businessClass"
                placeholder="ABN or ACN"
                required
                inputValue={businessClass}
                maxLength="20"
                validations={{
                  minLength: 9
                }}
                validationErrors={{
                  minLength: 'Min character length is 9'
                }}
                inputProps={{
                  maxLength: 11,
                }}
                inputStyle={classes.inputTextField}
              />
            </div>
          </div>

          <div className={classes.typeHere}>
            <LabelInput label='Add description about your business' required />
            <InputField
              variant="outlined"
              type="text"
              name='description'
              placeholder="Type here..."
              required
              inputValue={description}
              maxLength="100"
              validations={{
                minLength: 2
              }}
              validationErrors={{
                minLength: 'Min character length is 2'
              }}
              inputProps={{
                maxLength: 100,
              }}
              inputStyle={classes.multiTextField}
              rows={4}
              multiline
            />
          </div>

          <div className={classes.locationOuter}>
            <LabelInput title='Enter your location' />
            <AddressAutoComplete
              handlePlaceChange={handlePlaceChange}
              handlePlaceSelect={handlePlaceSelect}
              address={address}
            />
          </div>

          <div className={classes.bottomButtonContainer}>
            <div className={classes.buttonOuter}>
              <RoundButton
                title={'Done'}
                type="submit"
                disabled={!formIsValid}
                containerStyle={classes.doneButton}
              />
            </div>
            <div className={classes.buttonOuter}>
              <RoundButton
                title={'Post an Ad'}
                containerStyle={classes.postButton}
                textStyle={classes.buttonText}
              />
            </div>
          </div>
        </Formsy>
      </div>
    </FullWidth>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  businessTypeList: state.product.businessTypeList,
  userData: state.login.userData,
  error: state.product.error,
  success: state.product.success,
  message: state.product.message,
});

const mapDispatchToProps = dispatch => ({
  getBusinessTypeList: (token) => dispatch(getBusinessTypeList(token)),
  sellerProfileAction: (data, id, token) => dispatch(sellerProfileAction(data, id, token)),
  resetData: () => dispatch(resetData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetUpSellerProfile);
