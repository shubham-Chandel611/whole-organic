import React, { useState } from "react";
import { Typography, makeStyles, FormControl, MenuItem, Select } from "@material-ui/core";
import Formsy from 'formsy-react';
import { connect } from "react-redux";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import RoundButton from '../../../components/button/RoundButton';
import styles from '../../../assets/css/profile/BusinessAccount.style'
import InputField from '../../../components/common/InputField';
import TopHeading from '../../../components/common/TopHeading';
import AddressAutoComplete from '../../../components/common/AddressAutoComplete';
import ImageUploader from '../../../components/common/ImageUploader';
import { getBusinessTypeList, resetData } from '../../../store/product/actions';
import LabelInput from '../../../components/common/LabelInput';


const useStyles = makeStyles(styles);


const BuyerBusinessViewProfile = ({
  businessTypeList,
  token,
  resetData,
  getBusinessTypeList
}) => {
  const classes = useStyles();
  const [imgData, setImgData] = useState(false);
  const [event, setEvent] = useState(
    {
      addBusiness: '',
      typeHere: '',
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

  console.log('businessTypeList', businessTypeList)
  const {
    businessType,
  } = event;

  const {
    address,
  } = location;

  return (
    <div>
      <Formsy
        id="businessAccount"
      >

        <TopHeading
          heading='My business account'
          subHeading='General info'
        />

        <div>

          <div className={classes.profileImageOuter}>
            <ImageUploader
              onChange={(event) => handleDocUpload(event, 'Id')}
            />
          </div>


          <div className={classes.businessOuter}>

            <div className={classes.selectBusinessType}>
              <FormControl variant="outlined" fullWidth>
                <LabelInput label='Select business type' required />
                <Select
                  value={businessType}
                  className={classes.selectTextField}
                  name='businessType'
                  onChange={handleChange}
                >
                  <MenuItem value={0}><em>Select...</em></MenuItem>
                  {businessTypeList && businessTypeList.length ? businessTypeList[1].map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.type}
                    </MenuItem>
                  )) : null}
                </Select>
              </FormControl>
            </div>
            <div className={classes.businessName}>
              <LabelInput label='Add businesss Name' />
              <InputField
                variant="outlined"
                type="text"
                name='addBusiness'
                inputStyle={classes.inputTextField}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className={classes.typeHere}>
            <LabelInput label='Add description about your business' />
            <InputField
              variant="outlined"
              type="text"
              name='typeHere'
              placeholder="Type here..."
              inputStyle={classes.multiTextField}
              onChange={handleChange}
              rows={4}
              multiline
            />
          </div>

          <div className={classes.locationOuter}>
            <Typography className={classes.label}>Enter your location</Typography>
            <AddressAutoComplete
              handlePlaceChange={handlePlaceChange}
              handlePlaceSelect={handlePlaceSelect}
              address={address}
            />
          </div>

          <RoundButton
            title={'Save changes'}
          />

        </div>

      </Formsy>
    </div>

  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  businessTypeList: state.product.businessTypeList,
});

const mapDispatchToProps = dispatch => ({
  getBusinessTypeList: (token) => dispatch(getBusinessTypeList(token)),
  resetData: () => dispatch(resetData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyerBusinessViewProfile);
