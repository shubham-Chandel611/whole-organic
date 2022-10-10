import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Grid, Typography, makeStyles, Select, MenuItem } from "@material-ui/core";
import FullWidth from "../../layout/FullWidth";
import styles from "../../assets/css/productDetail/productDetail.style";
import RoundButton from "../../components/button/RoundButton";
import ProductCard from "../../components/common/productCard.js";
import MainLogo from "../../assets/images/logo-icon.png";
import Product from "../../assets/images/static/product.png";
import ProfileHeader from '../../components/common/ProfileHeader';
import { ShoppingCart } from '@material-ui/icons';
import { getProductDetail } from '../../store/product/actions';
import history from "../../history/index";
import { imageUrls } from '../../constants/ImageUrl';
import { resetData } from '../../store/product/actions';
import SellerImage from "../../assets/images/static/userAvatar.png";
import Formsy from "formsy-react";
import * as productAction from '../../store/product/actions'
import EnquiryModal from "../../modals/enquiryModal";

const quantitys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const useStyles = makeStyles(styles);

const ProductDetail = ({
  getProductDetail,
  match,
  productDetail,
  setRecommendation,
  addToCart,
  userData,
  resetData
}) => {
  const classes = useStyles();
  const form = useRef(null);
  const [event, setEvent] = useState({ quantity: 0 });
  const [currentData, setCurrentData] = useState(null)
  const [selectedImage, setListItem] = useState(null)
  const [modalState, setModalState] = useState(false)

  useEffect(() => {
    setListItem(null);
    getProductDetail(match.params.id)
    if (userData && userData.id && userData.type === 'buyer') {
      setRecommendation(match.params.id, userData.id)
    }
  }, [match.params.id]);

  const handleChange = e => {
    event[e.target.name] = e.target.value;
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const onSetImage = (image) => {
    setListItem(image)
  }
  const onAddItem = (e) => {
    productDetail.quantity = (quantity === 0) ? 1 : quantity
    let data = {
      productDetail,
    }
    addToCart(data)
    history.push('/myCart')
  }


  const loadProductDefaultImage = () => {
    let pimage = '';
    if (productDetail && productDetail.photos && productDetail.photos.length && !selectedImage) {
      pimage = imageUrls + productDetail.photos[0].image;
    } else if (selectedImage) {
      pimage = selectedImage;
    } else {
      pimage = null;
    }
    return <img src={pimage} alt="Product" className={classes.productImage} />
  };

  const  enquiryClick = (data) => {
    if(userData && userData.id){
     data.quantity = 1
     data.quantityArr = [1,2,3,4,5,6,7,8,9,10]
      setCurrentData(data)
      setModalState(true)
    }else{
      history.push('/login')
    }
    
  }

  const {
    quantity
  } = event;

  return (
    <FullWidth>
      {(productDetail && productDetail !== null) && <div className={classes.mainContainer}>
        <ProfileHeader
          leftButtonName='View Profile'
          handleLeftButton={() => history.push(`/supplierPage/${productDetail.seller_id}`)}
          sellerName={`${productDetail.first_name}  ${productDetail.last_name}`}
          ratingCount={productDetail.average_rating}
          sellerLocation={productDetail.seller_location}
          sellerNumber={9987567843}
          handleRightButton={()=> enquiryClick(productDetail) }
          sellerImage={(productDetail && productDetail.profile_picture !== null) ? imageUrls + productDetail.profile_picture : SellerImage}
        />
        <EnquiryModal
          openState={modalState}
          data={currentData}
          handleClose={() => { setModalState(false) }}
        />
        <div className={classes.container}>
          <div className={classes.leftContainer}>
            {loadProductDefaultImage()}
            <div style={{ width: '25%' }}>
              {productDetail && productDetail.photos && productDetail.photos.length ? productDetail.photos.map((item, index) =>
                <img
                  key={`slider-image-${index}`}
                  onClick={() => onSetImage(imageUrls + item.image)}
                  src={imageUrls + item.image}
                  alt="Product"
                  className={selectedImage === (imageUrls + item.image) ? [classes.rightImage, classes.activeImage].join(' ') : classes.rightImage}
                />
              ) :
                null
              }
            </div>
          </div>

          <div className={classes.divisionLine}></div>
          <div className={classes.rightOuter}>
            <Typography className={classes.rightLabel}>{productDetail.name}</Typography>
            <Typography className={classes.subHead}>{`${productDetail.sub_category_name} / ${productDetail.category_name}`}</Typography>
            <Typography className={classes.sellerName}>{productDetail.seller_location},<u>{`${productDetail.first_name}  ${productDetail.last_name}`}</u> </Typography>
            <div className={classes.roundOuter}>
              <div className={classes.roundIcon}></div>
              <Typography className={classes.iconText}>Organic</Typography>
            </div>

            <div className={classes.desOuter}>
              <Typography className={classes.iconText}>{productDetail.description}</Typography>
            </div>

            <div className={classes.priceContainer}>
              <div className={classes.priceTextOuter}>
                <Typography className={classes.dollarSign} >$</Typography>
                <Typography className={classes.priceUnti} >{`${parseFloat(productDetail.price).toFixed(2)} / ${productDetail.price_unit_type}`}</Typography>
              </div>
              <div className={classes.selectOuterWidth}>
                <Select
                  className={classes.selectTextField}
                  name='quantity'
                  value={(quantity === 0) ? 1 : quantity}
                  onChange={handleChange}
                  defaultValue="Select..."
                  placeholder='Select...'
                >
                  <MenuItem value={0}>Select...</MenuItem>
                  {(quantitys && quantitys.length > 0) ? quantitys.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  )) : null}
                </Select>
              </div>
            </div>
            <Formsy
              id="addToCart"
              onValidSubmit={(e) => onAddItem(e)}
              ref={form}
            >
              <div className={classes.cartOuter}>
                <RoundButton
                  title='ADD TO CART'
                  type="submit"
                  containerStyle={classes.cartContiner}
                  inputStartIcon={<ShoppingCart className={classes.iconCart} />}
                />
              </div>
            </Formsy>
          </div>
        </div>

        <div className={classes.listContainer}>
          <div className={classes.labelTextOuter}>
            <img src={MainLogo} alt="user" className={classes.imageStyle} />
            <Typography className={classes.labelText}>You might also like</Typography>
          </div>
          <Grid
            className={classes.itemContainer}
            container
            spacing={6}
          >
            {(productDetail && productDetail.you_may_like && productDetail.you_may_like.length > 0) ? productDetail.you_may_like.map((item) => {
              return <Grid item xs={4}>
                <ProductCard
                  data={item}
                  isEdit={false}
                />
              </Grid>
            }) : null}
          </Grid>
        </div>

      </div>}
    </FullWidth>
  );
};

const mapStateToProps = state => ({
  productDetail: state.product.productDetail,
  userData: state.login.userData,
});

const mapDispatchToProps = dispatch => ({
  getProductDetail: (id) => dispatch(getProductDetail(id)),
  resetData: () => dispatch(resetData()),
  addToCart: (data) => dispatch(productAction.addToCart(data)),
  setRecommendation: (adId, userId) => dispatch(productAction.setRecommendation(adId, userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);