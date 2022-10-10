import React, { useState, useRef, useEffect } from "react";
import { Typography, makeStyles, FormControl, MenuItem, Select } from "@material-ui/core";
import { connect } from "react-redux";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import Formsy from 'formsy-react';
import LeftNavLayout from '../../../layout/LeftNavLayout';
import styles from '../../../assets/css/profile/SellerProfile.style'
import { getBusinessTypeList, resetData, sellerProfileAction } from '../../../store/product/actions';
import RoundButton from '../../../components/button/RoundButton';
import InputField from '../../../components/common/InputField';
import TopHeading from '../../../components/common/TopHeading';
import ImageUploader from '../../../components/common/ImageUploader';
import AddressAutoComplete from '../../../components/common/AddressAutoComplete';
import { getProfileData } from '../../../store/register/actions';
import { profileImageBaseUrl } from '../../../constants/constant';
import LabelInput from '../../../components/common/LabelInput';


const links = [{
  link: "#",
  name: "My account "
},
{
  link: "#",
  name: "My profile "
}
];

const useStyles = makeStyles(styles);

const SellerProfile = ({
  getBusinessTypeList,
  businessTypeList,
  token,
  resetData,
  sellerProfileAction,
  userData,
  message,
  error,
  getProfileData,
  profiledata
}) => {
  const classes = useStyles();
  const form = useRef(null);
  const { first_name, last_name, email, id, business_email, business_type_id, business_name, business_number, business_description, location: business_location, lat, lng } = profiledata ? userData : ''
  const [formIsValid, setFormIsValid] = useState(false);
  const [imgData, setImgData] = useState(false);
  const [event, setEvent] = useState(
    {
      businessName: business_name ? business_name : '',
      businessEmail: business_email ? business_email : '',
      businessClass: business_number ? business_number : '',
      description: business_description ? business_description : '',
      businessType: business_type_id ? business_type_id : 0,
    }
  )
  const [location, setLocation] = useState(
    {
      address: business_location ? business_location : "",
      latitude: lat ? lat : "",
      longitude: lng ? lng : "",
    }
  );


  const handleDocUpload = (e, type) => {
    var file = e.target.files[0];
    setImgData(file)
  }

  const handleChange = e => {
    event[e.target.name] = e.target.value;
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

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

  const disableButton = () => {
    setFormIsValid(false);
  };

  const enableButton = () => {
    setFormIsValid(true);
  };

  const closeAlert = () => {
    resetData();
  }

  const onSubmit = (model) => {
    console.log('model', model)
    console.log('event', event)
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
    console.log('formData', formdata.values());
    sellerProfileAction(formdata, userData.id, token)
  }


  useEffect(() => {
    resetData();
    getBusinessTypeList(token);
    getProfileData(id, token)
  }, []);


  const {
    businessType,
  } = event;

  const {
    address,
  } = location;

  console.log('userData', first_name)

  return (
    <LeftNavLayout
      alertMessage={message}
      showAlert={message ? true : false}
      onCloseAlert={closeAlert}
      breadCrumbLink={links}
      alertType={error ? 'error' : 'success'}
    >
      <div>
        <Formsy
          id="businessAccount"
          onValid={() => enableButton()}
          onInvalid={() => disableButton()}
          onValidSubmit={(e) => onSubmit(e)}
          ref={form}
        >

          <TopHeading
            heading='My business account'
            subHeading='General info'
          />

          <div className={classes.profileImageOuter}>
            <ImageUploader
              onChange={(event) => handleDocUpload(event, 'Id')}
              oldImage={profiledata.profile_picture ? profileImageBaseUrl + profiledata.profile_picture : ''}
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
                  defaultValue="Select"
                  placeholder='Select'
                  value={business_type_id ? business_type_id : businessType}
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
                validations="isEmail"
                validationErrors={{
                  isEmail: 'Please enter a valid email'
                }}
                inputProps={{
                  maxLength: 50,
                }}
                inputStyle={classes.inputTextField}
                value={business_email}
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
                value={business_name}
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
                value={business_number}
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
              value={business_description}
            />
          </div>

          <div className={classes.locationOuter}>
            <LabelInput label='Enter your location' />
            <AddressAutoComplete
              handlePlaceChange={handlePlaceChange}
              handlePlaceSelect={handlePlaceSelect}
              address={business_location ? business_location : address}
              containerStyle={classes.addressContainer}
            />
          </div>

          <RoundButton
            title={'Save changes'}
            type="submit"
            disabled={!formIsValid}
          />

        </Formsy>
      </div>

    </LeftNavLayout>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  businessTypeList: state.product.businessTypeList,
  userData: state.login.userData,
  error: state.product.error,
  success: state.product.success,
  message: state.product.message,
  profiledata: state.register.profiledata,
});

const mapDispatchToProps = dispatch => ({
  getBusinessTypeList: (token) => dispatch(getBusinessTypeList(token)),
  sellerProfileAction: (data, id, token) => dispatch(sellerProfileAction(data, id, token)),
  resetData: () => dispatch(resetData()),
  getProfileData: (id, token) => dispatch(getProfileData(id, token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellerProfile);