import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { makeStyles, Typography, MenuItem, Select, Checkbox, FormGroup, FormControlLabel } from "@material-ui/core";
import styles from '../../assets/css/ads/EditAds.style'
import ImageUploader from '../../components/common/ImageUploader';
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import LeftNavLayout from '../../layout/LeftNavLayout'
import TopHeading from '../../components/common/TopHeading';
import { CheckBoxOutlineBlank, CheckBox } from "@material-ui/icons";
import AddressAutoComplete from '../../components/common/AddressAutoComplete';
import InputField from '../../components/common/InputField';
import RoundButton from "../../components/button/RoundButton";
import { pauseAdAction, deleteAdAction, getCategoryList, getSubCategoryList, resetData, editAdAction, } from '../../store/product/actions';
import Formsy from "formsy-react";
import { productImageBaseUrl } from "../../constants/constant";

const options = [
  'per unit', 'per kg'
];

const links = [{
  link: "#",
  name: "Post an ad"
}]
const useStyles = makeStyles(styles);

const EditAds = ({
  match,
  myAdsList,
  token,
  pauseAdAction,
  deleteAdAction,
  editAdAction,
  user_id,
  getCategoryList,
  getSubCategoryList,
  categories,
  subCategories,
  resetData,
}) => {
  const item = myAdsList.filter((item)=>{
    if(item.id == match.params.id){
      return item
    }else{
      return null
    }
  })

  console.log('item', item)
  const form = useRef(null);
  const classes = useStyles();
  const [event, setEvent] = useState(
    {
      name: (item && item.length>0) ? item[0].name : '',
      category: (item && item.length>0) ? 26 : 0,
      subCategory: (item && item.length>0) ? item[0].sub_category_id : 0,
      price: (item && item.length>0)? item[0].price : 0,
      unit: (item && item.length > 0  && item[0].price_unit_type == 'kg') ?  'per kg' : (item && item.length > 0 && item[0].price_unit_type == 'unit') ? 'per unit' : 'per unit',
      desc: (item && item.length>0) ? item[0].description : ''
    }
  )
  const [pickupCheck, setpickupCheck] = useState((item && item.length>0 && item[0].is_available_for_shipping == 1) ? false : true);
  const [image1, setImgData1] = useState('');
  const [image2, setImgData2] = useState('');
  const [image3, setImgData3] = useState('');
  const [image4, setImgData4] = useState('');
  const [image5, setImgData5] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [type, typeSelect] = useState('shipping');
  const [shippingCheck, setshippingCheck] = useState((item && item.length>0 && item[0].is_available_for_shipping == 1) ? true : false);


  const handleChange = e => {
    event[e.target.name] = e.target.value;
    if (e.target.name === 'category' && !item) {
      getSubCategoryList(e.target.value)
    }
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const onPauseClicked = () =>{
    let data = item[0]
    let adId = data.id
    pauseAdAction(data.seller_id, token, adId)
  }

  const [location, setLocation] = useState(
    {
      address: (item && item.length>0 && item[0].shipped_from != '') ? item[0].shipped_from : '',
      latitude: "",
      longitude: "",
    }
  );

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

  const onDeleteClicked = () =>{
    let data = item[0]
    let adId = data.id
    deleteAdAction(data.seller_id, token, adId)
  }
  const {
    name,
    category,
    subCategory,
    price,
    unit,
    desc,
  } = event;

  const {
    address,
    longitude,
    latitude
  } = location;

  useEffect(() => {
    resetData();
    if(item && item.length>0){
      getSubCategoryList(26)
    }
    getCategoryList();
  }, []);

  const onSubmit = (modal) => {
    let arr = []
    if (image1 !== "" || image2 !== "" || image3 !== "" || image4 !== "" || image5 !== "") {
      arr.push(image1, image2, image3, image4, image5)
    } else {
      arr = []
    }

    var formData = new FormData();
    formData.append('sub_category_id', subCategory);
    formData.append('name', modal.name);
    formData.append('description', desc);
    if(pickupCheck){
      formData.append('shipped_from', address);
      formData.append('shipped_from_long', longitude)
      formData.append('shipped_from_lat', latitude)
    }
    formData.append('is_available_for_shipping', (shippingCheck) ? 1 : 0);
    formData.append('is_only_pickup', (pickupCheck) ? 1 : 0);
    formData.append('price', parseInt(modal.price));
    formData.append('price_unit_type', (unit === 'per kg') ? 'kg' : 'unit');
    formData.append('max_quantity_to_ship', 50);
    formData.append('publish_date', '');
    formData.append('product_certification', 'organic_certified');
    if(image1 !== '' && image1){
      formData.append('product_images[]', image1);
    }
    if(image2 !== '' && image2){
      formData.append('product_images[]', image2);
    }
    if(image3 !== '' && image3){
      formData.append('product_images[]', image3);
    }
    if(image4 !== '' && image4){
    formData.append('product_images[]', image4);
    }
    if(image5 !== '' && image5){
      formData.append('product_images[]', image5);
    }
    editAdAction(item.user_id, formData, token, item[0].id)
  }

  const shippingClicked = () => {
    setshippingCheck(!shippingCheck)
    setpickupCheck(!pickupCheck)
    typeSelect('shipping')
  }

  const pickupClicked = () => {
    setshippingCheck(!shippingCheck)
    setpickupCheck(!pickupCheck)
    typeSelect('pickup')
  }

  const handlePlaceChange = address => {
    location['address'] = address;
    location['latitude'] = null;
    location['longitude'] = null;
    setLocation({ ...location });
  }

  const enableButton = () => {
    setFormIsValid(true)
  };

  const disableButton = () => {
    setFormIsValid(false)
  };

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

  return (
    <LeftNavLayout
      //alertMessage = {message}
      //showAlert={message ? true : false}
      //onCloseAlert={closeAlert}
      breadCrumbLink={links}
    //alertType={error ? 'error' : 'success'}
    >

      <TopHeading
        heading='Edit ad'
        headingStyle={classes.headingStyle}
      />
      <div className={classes.bottomButtonContainer}>
          <div className={classes.buttonOuter} >
            <RoundButton
              title={'Pause Ad'}
              onClick={()=>{onPauseClicked()}}
              containerStyle={classes.postButton}
              textStyle={classes.buttonText}
            />
          </div>
          <div className={classes.buttonOuter}>
            <RoundButton
              onClick={()=>{onDeleteClicked()}}
              title={'Remove Ad'}
              containerStyle={classes.backButton}
              textStyle={classes.buttonText}
            />
          </div>
        </div>
      <Formsy
        id="postAdsSecondStep"
        onValidSubmit={(e) => onSubmit(e)}
        onValid={() => enableButton()}
        onInvalid={() => disableButton()}
        ref={form}
      >
        <div className={classes.editConatiner}>
        <Typography className={classes.editDesc}>{'Define your product'}</Typography> 
        
        <div className={classes.dropDownContainer}>
          <Select
            name='category'
            onChange={handleChange}
            className={classes.selectTextField}
            value={category}
            defaultValue="Select"
            placeholder='Select'
          >
            <MenuItem value={0} disabled>Select Category</MenuItem>
            {(categories && categories.length > 0) ? categories.map((item) => (
              <MenuItem key={item.name} value={item.id}>
                {item.name}
              </MenuItem>
            )) : null}
          </Select>
          <Select
            name='subCategory'
            onChange={handleChange}
            className={classes.selectTextField}
            value={subCategory}
            defaultValue="Select"
            placeholder='Select'
          >
            <MenuItem value={0} disabled>Select Sub Category</MenuItem>
            {(subCategories && subCategories.length > 0) ? subCategories.map((item) => (
              <MenuItem key={item.name} value={item.id}>
                {item.name}
              </MenuItem>
            )) : null}
          </Select>
          <div className={classes.nameOuter}>
            <div className={classes.inputFieldOuter}>
              <InputField
                placeholder="Type product name here…"
                inputName="Type"
                required
                name="name"
                value={name}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.container}>
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
            oldImage={(item && item.length && item[0].photos && item[0].photos.length > 0 && item[0].photos[0].image) ? productImageBaseUrl + item[0].photos[0].image : null}
            required
            name='image1'
            bgStyle={classes.imageBg}
            imageStyles={classes.imageback}
            onChange={(event) => handleImageChange(event, 'id1')}
          />
          <ImageUploader
            id='image2'
            name='image2'
            oldImage={(item && item.length && item[0].photos && item[0].photos.length>1 && item[0].photos[1].image) ? productImageBaseUrl + item[0].photos[1].image : null}
            bgStyle={classes.imageBg}
            imageStyles={classes.imageback}
            onChange={(event) => handleImageChange(event, 'id2')}
          />
          <ImageUploader
            id='image3'
            name='image3'
            oldImage={(item && item.length && item[0].photos && item[0].photos.length>2 && item[0].photos[2].image) ? productImageBaseUrl + item[0].photos[2].image : null}
            bgStyle={classes.imageBg}
            imageStyles={classes.imageback}
            onChange={(event) => handleImageChange(event, 'id3')}
          />
          <ImageUploader
            id='image4'
            name='image4'
            oldImage={(item && item.length && item[0].photos && item[0].photos.length>3 && item[0].photos[3].image) ? productImageBaseUrl + item[0].photos[3].image : null}
            bgStyle={classes.imageBg}
            imageStyles={classes.imageback}
            onChange={(event) => handleImageChange(event, 'id4')}
          />
          <ImageUploader
            id='image5'
            name='image5'
            oldImage={(item && item.length && item[0].photos && item[0].photos.length>4 && item[0].photos[4].image) ? productImageBaseUrl + item[0].photos[4].image : null}
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
              // validations={{
              //   minLength: 1,
              //   maxLength: 9
              // }}
              // validationErrors={{
              //   minLength: 'Min character length is 1',
              //   maxLength: 'Max character length is 9'
              // }}
              inputProps={{
                maxLength: 9,
              }}
              required
              value={price}
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
              title={'Save Changes'}
              type="submit"
              disabled={!formIsValid  || !unit}
              containerStyle={classes.doneButton}
            />
          </div>
        </div>
      </div>
      </Formsy>
    </LeftNavLayout>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  user_id: state.login.user_id,
  categories: state.product.categories,
  subCategories: state.product.subCategories,
  userData: state.login.userData,
  error: state.product.error,
  success: state.product.success,
  message: state.product.message,
  myAdsList: state.product.myAdsList
});

const mapDispatchToProps = dispatch => ({
  editAdAction: (id, data, token, adId) => dispatch(editAdAction(id, data, token, adId)),
  getCategoryList: () => dispatch(getCategoryList()),
  getSubCategoryList: (id) => dispatch(getSubCategoryList(id)),
  resetData: () => dispatch(resetData()),
  pauseAdAction: (id, token, adId) => dispatch(pauseAdAction(id, token, adId)),
  deleteAdAction: (id, token, adId) => dispatch(deleteAdAction(id, token, adId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAds);

