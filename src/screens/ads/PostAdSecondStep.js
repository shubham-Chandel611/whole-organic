import React, { useState, useRef } from "react";
import { Typography, makeStyles, MenuItem, Select } from "@material-ui/core";
import { Checkbox, FormGroup, FormControlLabel } from "@material-ui/core";
import ImageUploader from '../../components/common/ImageUploader';
import { connect } from "react-redux";
import styles from "../../assets/css/ads/PostAdStepSecond.style";
import AddressAutoComplete from '../../components/common/AddressAutoComplete';
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import Formsy from "formsy-react";
import InputField from '../../components/common/InputField';
import { CheckBoxOutlineBlank, CheckBox } from "@material-ui/icons";
import { postAdAction, editAdAction } from '../../store/product/actions';
import RoundButton from "../../components/button/RoundButton";

const options = [
  'per unit', 'per kg'
];

const useStyles = makeStyles(styles);

const PostAdsSecondStep = ({
  postAdAction,
  productSubCategoryId,
  productName,
  productCategoryId,
  postcallback,
  token,
  userId,
  edit,
  editAdAction,
  adId,
  item
}) => {
  const classes = useStyles();
  const form = useRef(null);
  const [pickupCheck, setpickupCheck] = useState((item && item.length>0 && item[0].is_available_for_shipping == 1) ? false : true);
  const [image1, setImgData1] = useState('');
  const [image2, setImgData2] = useState('');
  const [image3, setImgData3] = useState('');
  const [image4, setImgData4] = useState('');
  
  const [image5, setImgData5] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [type, typeSelect] = useState('shipping');
  const [shippingCheck, setshippingCheck] = useState((item && item.length>0 && item[0].is_available_for_shipping == 1) ? true : false);
  const [event, setEvent] = useState(
    {
      price: (item && item.length>0)? item[0].price : 0,
      unit: (item && item.length > 0 && item[0].price_unit_type == 'kg') ?  'per kg' : (item && item.length > 0 && item[0].price_unit_type == 'unit') ? 'per unit' : 0,
      desc: (item && item.length>0) ? item[0].description : ''
    }
  )



  const handleImageChange = (event, type) => {
    var file = event.target.files[0];
    if (type === 'id1') {
      setImgData1(file)
    } else if (type === 'id2') {
      setImgData2(file)
    } else if (type === 'id3') {
      setImgData3(file)
    } else if (type === 'id4') {
      setImgData4(file)
    } else if (type === 'id5') {
      setImgData5(file)
    }
  }

  const handleChange = e => {
    event[e.target.name] = e.target.value;
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const pickupClicked = () => {
    setshippingCheck(!shippingCheck)
    setpickupCheck(!pickupCheck)
    typeSelect('pickup')
  }

  const [location, setLocation] = useState(
    {
      address: (item && item.length>0 && item[0].shipped_from != '') ? item[0].shipped_from : '',
      latitude: "",
      longitude: "",
    }
  );

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

  const shippingClicked = () => {
    setshippingCheck(!shippingCheck)
    setpickupCheck(!pickupCheck)
    typeSelect('shipping')
  }

  const {
    address,
    longitude,
    latitude
  } = location;


  const {
    price,
    unit,
    desc,
  } = event;


  const onSubmit = (modal) => {
    console.log('onSubmit', onSubmit)
    let arr = []
    if (image1 !== "" || image2 !== "" || image3 !== "" || image4 !== "" || image5 !== "") {
      arr.push(image1, image2, image3, image4, image5)
    } else {
      arr = []
    }

    var formData = new FormData();
    formData.append('sub_category_id', productSubCategoryId);
    formData.append('name', productName);
    formData.append('description', desc);
    if(pickupCheck){
      formData.append('shipped_from', address);
      formData.append('shipped_from_long', longitude)
      formData.append('shipped_from_lat', latitude)
    }
    formData.append('is_available_for_shipping', (shippingCheck) ? 1 : 0);
    formData.append('is_only_pickup', (pickupCheck) ? 1 : 0);
    formData.append('price', parseInt(modal.price));
    formData.append('price_unit_type', (unit == 'per kg') ? 'kg' : 'unit');
    formData.append('max_quantity_to_ship', 50);
    formData.append('publish_date', '');
    formData.append('product_certification', 'organic_certified');
    formData.append('product_images[]', image1);
    if(image2 != '' && image2){
      formData.append('product_images[]', image2);
    }
    if(image3 != '' && image3){
      formData.append('product_images[]', image3);
    }
    if(image4 != '' && image4){
    formData.append('product_images[]', image4);
    }
    if(image5 != '' && image5){
      formData.append('product_images[]', image5);
    }
    if(edit){
      editAdAction(item[0].user_id, formData, token, item[0].id)
    }else{
      postAdAction(userId, formData, token)
    }
    
  }

  const enableButton = () => {
    setFormIsValid(true)
  };

  const disableButton = () => {
    setFormIsValid(false)
  };

  console.log('formIsValid', formIsValid)
  return (
    <Formsy
      id="postAdsSecondStep"
      onValidSubmit={(e) => onSubmit(e)}
      onValid={() => enableButton()}
      onInvalid={() => disableButton()}
      ref={form}
    >
      <div className={classes.container}>
        {(!edit) && <Typography className={classes.productDesc}>Add product details and gallery</Typography>}
        <Typography className={classes.productDescText}>Product description</Typography>
        <div className={classes.proDescText}>
          <textarea id="story" required className={classes.proDesc} placeholder="Type here…" name="desc"
            rows="5" cols="33" value={desc} onChange={handleChange} />
        </div>
        <div className={classes.dropDownContainer1}>
          <Typography className={classes.productShipText}>Product shipping</Typography>
          <FormGroup
            row
            value={type}
          >
            <FormControlLabel
              label="Available for shipping"
              classes={{
                label: classes.labelText
              }}
              control={
                <Checkbox
                  checked={shippingCheck}
                  icon={<CheckBoxOutlineBlank className={classes.unCheckedIconStyle} />}
                  checkedIcon={<CheckBox className={classes.checkedIconStyle} />}
                  value={'shipping'}
                  onClick={() => shippingClicked()}
                />
              }
            />

            <FormControlLabel
              label="Only pickup"
              classes={{
                label: classes.labelText
              }}
              control={
                <Checkbox
                  checked={pickupCheck}
                  icon={<CheckBoxOutlineBlank className={classes.unCheckedIconStyle} />}
                  checkedIcon={<CheckBox className={classes.checkedIconStyle} />}
                  value={'pickup'}
                  onClick={() => pickupClicked()}
                />
              }
            />

          </FormGroup>
        </div>
       {(pickupCheck) && <div className={classes.locationOuter}>
          {/* <Typography className={classes.label}>Enter your location</Typography> */}
          <AddressAutoComplete
            required
            handlePlaceChange={handlePlaceChange}
            handlePlaceSelect={handlePlaceSelect}
            address={address}
            containerStyle={classes.addressContainer}
          />
        </div>}
        <Typography className={classes.productDescText}>Product image gallery (max 5)</Typography>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: 'flexStar', }}>
          <ImageUploader
            id='image1'
            oldImage={(item && item[0].photos && item[0].photos.length>0 && item[0].photos[0].image) ? item[0].photos[0].image : null}
            required
            name='image1'
            bgStyle={classes.imageBg}
            imageStyles={classes.imageback}
            onChange={(event) => handleImageChange(event, 'id1')}
          />
          <ImageUploader
            id='image2'
            name='image2'
            oldImage={(item && item[0].photos && item[0].photos.length>1 && item[0].photos[1].image) ? item[0].photos[1].image : null}
            bgStyle={classes.imageBg}
            imageStyles={classes.imageback}
            onChange={(event) => handleImageChange(event, 'id2')}
          />
          <ImageUploader
            id='image3'
            name='image3'
            oldImage={(item && item[0].photos && item[0].photos.length>2 && item[0].photos[2].image) ? item[0].photos[2].image : null}
            bgStyle={classes.imageBg}
            imageStyles={classes.imageback}
            onChange={(event) => handleImageChange(event, 'id3')}
          />
          <ImageUploader
            id='image4'
            name='image4'
            oldImage={(item && item[0].photos && item[0].photos.length>3 && item[0].photos[3].image) ? item[0].photos[3].image : null}
            bgStyle={classes.imageBg}
            imageStyles={classes.imageback}
            onChange={(event) => handleImageChange(event, 'id4')}
          />
          <ImageUploader
            id='image5'
            name='image5'
            oldImage={(item && item[0].photos && item[0].photos.length>4 && item[0].photos[4].image) ? item[0].photos[4].image : null}
            bgStyle={classes.imageBg}
            imageStyles={classes.imageback}
            onChange={(event) => handleImageChange(event, 'id5')}
          />
        </div>
        <Typography className={classes.productDescText}>Pricing</Typography>
        <div className={classes.priceView}>
          <Typography className={classes.dollar}>$</Typography>
          <div className={classes.dollorTextView}>
            <InputField
              placeholder="Price"
              inputName="price"
              name="price"
              validations={{
                minLength: 1,
                maxLength: 9
              }}
              validationErrors={{
                minLength: 'Min character length is 1',
                maxLength: 'Max character length is 9'
              }}
              inputProps={{
                maxLength: 9,
              }}
              required
              inputValue={price}
              inputStyle={classes.dollorInputView}
            // handleChange={handleChange}
            />
          </div>
          <div className={classes.unitView}>
          <Select
            name='unit'
            onChange={handleChange}
            className={classes.unitSelector}
            value={unit}
            defaultValue={unit}
            placeholder='Select'
          >
            <MenuItem value={0} disabled>Select Unit</MenuItem>
            {options.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          </div>
        </div>
        <div className={classes.bottomButtonContainer}>
          <div className={classes.buttonOuter}>
            <RoundButton
              title={(!item) ? 'Done' : 'Save Changes'}
              type="submit"
              // onClick={() => { buttonClicked() }}
              disabled={edit ? false : (!formIsValid || image1 === '' || !unit)}
              containerStyle={classes.doneButton}
            />
          </div>
          {(!item) && <div className={classes.buttonOuter}>
            <RoundButton
              title={'Back'}
              onClick={() => { postcallback() }}
              containerStyle={classes.postButton}
              textStyle={classes.buttonText}
            />
          </div>}
        </div>
      </div>
    </Formsy>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  userId: state.login.userId,
  categories: state.product.categories,
  subCategories: state.product.subCategories,
  userData: state.login.userData,
  error: state.product.error,
  success: state.product.success,
  message: state.product.message,
});

const mapDispatchToProps = dispatch => ({
  postAdAction: (id, data, token) => dispatch(postAdAction(id, data, token)),
  editAdAction: (id, data, token, adId) => dispatch(editAdAction(id, data, token, adId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostAdsSecondStep);

