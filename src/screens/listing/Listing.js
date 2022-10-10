/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from "react";
import clsx from 'clsx';
import { connect } from "react-redux";
import queryString from 'query-string'
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import Slider from '@material-ui/core/Slider';
import { Search } from '@material-ui/icons';
import { TablePagination, Grid, Checkbox, makeStyles, Select, MenuItem, CardMedia, Card, FormControlLabel, Typography, Button } from "@material-ui/core";
import BreadCrumb from '../../components/common/BreadCrumbs';
import Header from "../../components/common/Header";
import Banner from "../../assets/images/filterBackround.png";
import logo from "../../assets/images/logo-icon.png";
import InputField from '../../components/common/InputField';
import Formsy from "formsy-react";
import styles from '../../assets/css/listing/Listing.style';
import Footer from "../../components/common/Footer";
import { getCategoryList, getSubCategoryList, resetData } from '../../store/product/actions';
import ProductCard from "../../components/common/productCard";
import { getFilterProducts } from "../../store/home/actions";
import history from "../../history";
import AddressAutoComplete from "../../components/common/AddressAutoComplete";
import RoundButton from '../../components/button/RoundButton';

let ratingStar = ''
const useStyles = makeStyles(styles);
const links = [{
  link: "#",
  name: "Listing"
}]

const options = [
  'Name', 'Price'
];

const sellerData = ['5', '4', '3', '2', '1']

const Listing = ({
  getCategoryList,
  getSubCategoryList,
  categories,
  filterProducts,
  getFilterProducts,
  subCategories,
  resetData,
  match,
  token,
  location
}) => {
  const classes = useStyles();
  const form = useRef(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(9);
  const values = queryString.parse(location.search)
  const [formIsValid, setFormIsValid] = useState(false);
  const [firstTime, setFirstTime] = useState(false);
  const [rating, setRating] = useState([]);
  const [price, setPrice] = useState([0, 5000]);
  const [allPrice, setPriceEvent] = useState([]);
  const [allStart, setAllStar] = useState(true);
  const [event, setEvent] = useState(
    {
      product: (values && values.name && values.name !== '') ? values.name : '',
      category: (values && values.catId && values.catId !== null) ? values.catId : 0,
      subCategory: (values && values.subId && values.subId !== null) ? values.subId : 0,
      unit: 0
    }
  )

  const [locate, setLocation] = useState(
    {
      address: '',
      latitude: "",
      longitude: "",
      allLoca: false
    }
  );

  const ratingClicked = (e,rate) => {
    console.log("e11111",e);
    console.log("item1111",rate);
    
    let arr = rating
    let ind = null
    let val = arr.filter((item, index) => {
      if (item === e.target.value) {
        ind = index
        return true
      }
    })
    if (val && val.length > 0) {
      arr.splice(ind, 1)
    } else {
      arr.push(e.target.value)
    }
    let values = {
      rating: arr.join()
    }
    if (category !== 0) {
      values.catId = category
    }
    if (subCategory !== 0) {
      values.subId = subCategory
    }
    if (product !== '') {
      values.name = product
    }
    if (address !== '') {
      values.location = address
    }
    if (unit !== 0) {
      values.sort = unit
    }
    if (price && price.length > 0) {
      values.price = price.join()
    }
    let data = sellerData.filter((res) => {
      if (res.item == rate) {
        return true
      }

    })
    if (data && data.length > 0) {
      setAllStar(false);
    } else {
      setAllStar(false);
    }
    //values.page = page;
    getFilterProducts(values)
    setRating(arr)

  };

  const allPriceChange = e => {
    if (category !== 0) {
      values.catId = category
    }
    if (subCategory !== 0) {
      values.subId = subCategory
    }
    if (product !== '') {
      values.name = product
    }
    if (unit !== 0) {
      values.sort = unit
    }
    if (rating && rating.length > 0) {
      values.rating = rating.join()
    }
    if (address !== '') {
      values.location = address
    }
    if (price && price.length > 0) {
      values.price = price.join()
      setPriceEvent([0, 5000])
      setPrice([0, 5000])
      values.price = [0, 5000].join()
    }
    getFilterProducts(values);
  }

  const allLocation = e => {
    if (category !== 0) {
      values.catId = category
    }
    if (subCategory !== 0) {
      values.subId = subCategory
    }
    if (product !== '') {
      values.name = product
    }
    if (unit !== 0) {
      values.sort = unit
    }
    if (rating && rating.length > 0) {
      values.rating = rating.join()
    }
    if (price && price.length > 0) {
      values.price = price.join()
    }
    if (address !== '') {
      values.location = address

      locate["allLoca"] = '';
      locate["address"] = '';
      locate["latitude"] = '';
      locate["longitude"] = '';
      setLocation({ ...locate });
      values.location = ''
    }
    getFilterProducts(values)
  }

  const handleChange = e => {

    event[e.target.name] = e.target.value;
    if (e.target.name === 'category') {
      getSubCategoryList(e.target.value)
    }
    //if (e.target.name === 'unit') {
    let values = {
      sort: e.target.value
    }
    if (category !== 0) {
      values.catId = category
    }
    if (subCategory !== 0) {
      values.subId = subCategory
    }
    if (product !== '') {
      values.name = product
    }
    if (address !== '') {
      values.location = address
    }
    if (rating && rating.length > 0) {
      values.rating = rating.join()
    }
    if (price && price.length > 0) {
      values.price = price.join()
    }
    //values.page = page;
    console.log('values', values)
    getFilterProducts(values)
    //}
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const onSubmit = (modal) => {
    let val = {}
    val.name = modal.product
    val.catId = category
    val.subId = subCategory
    if (address !== '') {
      values.location = address
    }
    if (rating && rating.length > 0) {
      values.rating = rating.join()
    }
    if (price && price.length > 0) {
      values.price = price.join()
    }
    values.page = page;
    getFilterProducts(val)
  }

  const enableButton = () => {
    setFormIsValid(true)
  };

  const disableButton = () => {
    setFormIsValid(false)
  };
  const allRating = () => {
    if (category !== 0) {
      values.catId = category
    }
    if (subCategory !== 0) {
      values.subId = subCategory
    }
    if (product !== '') {
      values.name = product
    }
    if (unit !== 0) {
      values.sort = unit
    }
    if (address !== '') {
      values.location = address
    }
    if (price && price.length > 0) {
      values.price = price.join()
    }
    if (rating && rating.length > 0) {
      setRating([])
      values.rating = [].join()
      setAllStar(true);
    }
    getFilterProducts(values);
  };

  useEffect(() => {
    getCategoryList();
    if (!firstTime) {
      setFirstTime(true)
      getFilterProducts(values);
    }
  }, [filterProducts]);

  const {
    product,
    category,
    subCategory,
    unit
  } = event;

  const handlePlaceSelect = selected => {
    var cityName;
    let name = selected.split(',')

    if (name.length > 0) {
      cityName = name[name.length - 2]
    }
    locate['address'] = cityName;

    geocodeByAddress(selected)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        locate["latitude"] = lat;
        locate["longitude"] = lng;
        locate["allLocation"] = false;
        setLocation({ ...locate });
      })
    let values = {}
    values.location = cityName
    if (category !== 0) {
      values.catId = category
    }
    if (subCategory !== 0) {
      values.subId = subCategory
    }
    if (product !== '') {
      values.name = product
    }
    if (rating && rating.length > 0) {
      values.rating = rating.join()
    }
    if (unit !== 0) {
      values.sort = unit
    }
    if (price && price.length > 0) {
      values.price = price.join()
    }
    //values.page = page;
    getFilterProducts(values);
  }

  const {
    address,
    longitude,
    latitude,
    allLoca
  } = locate;


  const handlePlaceChange = address => {
    locate['address'] = address;
    locate['latitude'] = null;
    locate['longitude'] = null;
    setLocation({ ...locate });
  }

  const priceApiCall = () => {
    let values = {
      price: price.join()
    }
    if (category !== 0) {
      values.catId = category
    }
    if (subCategory !== 0) {
      values.subId = subCategory
    }
    if (product !== '') {
      values.name = product
    }
    if (rating && rating.length > 0) {
      values.rating = rating.join()
    }
    if (unit !== 0) {
      values.sort = unit
    }
    if (address !== '') {
      values.location = address
    }
    //values.page = page

    getFilterProducts(values);
  }

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
    console.log('page', page)
    if (category !== 0) {
      values.catId = category
    }
    if (subCategory !== 0) {
      values.subId = subCategory
    }
    if (product !== '') {
      values.name = product
    }
    if (address !== '') {
      values.location = address
    }
    if (unit !== 0) {
      values.sort = unit
    }
    if (price && price.length > 0) {
      values.price = price.join()
    }
    values.page = page

    getFilterProducts(values);
  };
  console.log("rating", rating);
  sellerData.map((ress)=>{
    ratingStar = ress
  })
  return (
    <Grid container className={classes.firstSectionRoot}>
      <Header />
      <Formsy
        id="postAdsFirstStep"
        onValidSubmit={(e) => onSubmit(e)}
        onValid={() => enableButton()}
        onInvalid={() => disableButton()}
        ref={form}
      >

        <Card className={classes.container}>
          <div className={classes.imageStyle}>
            <CardMedia
              className={classes.imageStyle}
              image={Banner}
            >

              <div className={classes.imageContainer}>
                <div className={classes.headerCard}>
                  <div className={classes.txtset}>
                    <Typography className={classes.productSearch}>Search a Product</Typography>
                  </div>

                  <div className={classes.categoryOuter}>
                    <Select
                      name='category'
                      required
                      onChange={handleChange}
                      className={classes.selectTextField}
                      value={category}
                      defaultValue="Select"
                      placeholder='Select'

                    >
                      <MenuItem value={0}>Select Category</MenuItem>
                      {(categories && categories.length > 0) ? categories.map((item) => (
                        <MenuItem key={item.name} value={item.id}>
                          {item.name}
                        </MenuItem>
                      )) : null}
                    </Select>
                  </div>

                  <div className={classes.categoryOuter}>
                    <Select
                      name='subCategory'
                      required
                      onChange={handleChange}
                      className={classes.selectTextField}
                      value={subCategory}
                      defaultValue="Select"
                      placeholder='Select'

                    >
                      <MenuItem value={0}>Select sub-category</MenuItem>
                      {(subCategories && subCategories.length > 0) ? subCategories.map((item) => (
                        <MenuItem key={item.name} value={item.id}>
                          {item.name}
                        </MenuItem>
                      )) : null}
                    </Select>
                  </div>

                  <div className={classes.emailOuter}>
                    <InputField
                      required
                      placeholder="Or type product name here…"
                      inputName="Type"
                      name="product"
                      inputValue={product}
                      handleChange={handleChange}
                      inputStyle={classes.productInput}
                    />
                  </div>

                  <div className={classes.roundOuter}>
                    <RoundButton
                      title='Search'
                      type="submit"
                      inputStartIcon={<Search className={classes.searchIcon} />}
                      containerStyle={classes.roundContainer}
                      disabled={!formIsValid || category === 0 || subCategory === 0}
                      textStyle={classes.buttonText}
                    />
                  </div>
                </div>
              </div>

            </CardMedia>
          </div>
        </Card>
      </Formsy>


      <div className={classes.filterContainer}>
        <BreadCrumb
          breadCrumbLink={links}
        />
        <div className={classes.headerContainer}>
          <div className={classes.logoContainer}>
            <img src={logo} className={classes.logoStyle} />
            <Typography className={classes.subHeader}>Filter Products</Typography>
          </div>
          <div className={classes.sortContainer}>
            <Typography className={classes.sortText}>Sort By: </Typography>
            <Select
              name='unit'
              disableUnderline
              onChange={handleChange}
              className={classes.msgshort}
              value={unit}
              defaultValue="Select"
              placeholder='Select'

            >
              <MenuItem value={0}>Select Unit</MenuItem>
              {options.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>


        <div className={classes.containerLeft}>
          <div className={classes.leftContainerOuter}>
            <div className={classes.leftListOuter}>
              <Typography className={classes.labelStyle}>Price ($)</Typography>
              <div>
                <FormControlLabel value={allPrice} control={
                  <Checkbox
                    className={classes.root}
                    checked={(price.includes(0) && price.includes(5000)) ? true : false}
                    onClick={() => allPriceChange()}
                    checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                    icon={<span className={classes.icon} />}
                  />
                } label={'All'} />
              </div>
              <Slider
                value={price}
                onChangeCommitted={priceApiCall}
                className={classes.slider}
                onChange={handlePriceChange}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
                max={5000}
                min={0}
                step={10}
                style={{
                  color: '#0CB69B'
                }}
              // getAriaValueText={valuetext}
              />
              <Typography className={classes.labelStyle}>Shipped from</Typography>
              <div className={classes.locationOuter}>
                <div>
                  <FormControlLabel value={allLoca} control={
                    <Checkbox
                      className={classes.root}
                      checked={(address == '') ? true : false}
                      onClick={() => allLocation()}
                      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                      icon={<span className={classes.icon} />}
                    />
                  } label={'All'} />
                </div>
                <AddressAutoComplete
                  required
                  handlePlaceChange={handlePlaceChange}
                  handlePlaceSelect={handlePlaceSelect}
                  address={address}
                  containerStyle={classes.addressContainer}
                  mapOuter={classes.addressMapOuter}
                />
              </div>
              <Typography className={classes.labelStyle}>Seller Rating</Typography>
              <div>
                <FormControlLabel value={allStart} control={
                  <Checkbox
                    className={classes.root}
                    checked={(allStart) ? true : false}
                    onClick={() => allRating()}
                    checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                    icon={<span className={classes.icon} />}
                  />
                } label={'All stars'} />
              </div>
              {sellerData.map((item, index) =>
                <div>
                  <FormControlLabel value={item} control={
                    <Checkbox
                      className={classes.root}
                      // checked={(allStart) && true}
                      onClick={(e) => ratingClicked(e,item)}
                      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                      icon={<span className={classes.icon} />}
                    />
                  } label={`${item} stars`} />
                </div>
              )}
            </div>
          </div>

          <div className={classes.rightOuter}>
            <Grid
              container
              spacing={6}
            >
              {(filterProducts && filterProducts.data && filterProducts.data.length > 0) ? filterProducts.data.map((item) => {
                return <Grid item xs={4} className={classes.pcard}>
                  <ProductCard
                    data={item}
                    isEdit={false}
                  />
                </Grid>
              }) :
                <Grid item xs={4} className={classes.pcard}>
                  <Typography> No result found</Typography>
                </Grid>
              }
            </Grid>
          </div>
        </div>

        {filterProducts && filterProducts.data && filterProducts.data.length && (
          <TablePagination
            component="div"
            count={filterProducts.total}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page'
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page'
            }}
            onChangePage={handleChangePage}
            classes={{
              selectRoot: classes.pagination
            }}
            labelRowsPerPage={''}
          //onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        )}

      </div>
      <Footer />
    </Grid>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  categories: state.product.categories,
  subCategories: state.product.subCategories,
  filterProducts: state.home.filterProducts,
  userData: state.login.userData,
  error: state.product.error,
  success: state.product.success,
  message: state.product.message,
});

const mapDispatchToProps = dispatch => ({
  getCategoryList: () => dispatch(getCategoryList()),
  getSubCategoryList: (id) => dispatch(getSubCategoryList(id)),
  resetData: () => dispatch(resetData()),
  getFilterProducts: (values) => dispatch(getFilterProducts(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing);