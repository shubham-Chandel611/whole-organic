import React, { useState , useEffect} from "react";
import { connect } from "react-redux";
import FullWidth from "../../layout/FullWidth";
import { makeStyles, Typography, Select, MenuItem } from "@material-ui/core";
import styles from '../../assets/css/cart/MyCart.style';
import TopHeading from '../../components/common/TopHeading';
import MainLogo from "../../assets/images/logo.png";
import RoundButton from '../../components/button/RoundButton';
import { imageUrls } from '../../constants/ImageUrl';
import * as productAction from '../../store/product/actions'
import EnquiryModal from "../../modals/enquiryModal";
import history from "../../history";

const links = [{
  link: "#",
  name: "My Cart"
}]
const useStyles = makeStyles(styles);

const MyCart = ({
  removeProduct,
  cartList,
  updateItem,
  userData,
  itemCount
}) => {
  const classes = useStyles();
  const [modalState, setModalState] = useState(false)
  const [currentData, setCurrentData] = useState(null)
  const [event, setEvent] = useState(
    {
      quantity: 0
    }
  )
  let totalPrice = 0
  let cartItem = 0
  cartList.map((res) => {
    totalPrice = +totalPrice + +(res.quantity * parseFloat(res.price).toFixed(2))
    cartItem = +cartItem + +res.quantity
  })

  const handleChange = (e,id) => {
    let data ={
      count : e.target.value,
      itemId : id
    }
        itemCount(data)
    }


  const removeCartProduct = (id) => {
    removeProduct(id)
  }
  useEffect(() => {

}, [updateItem]);



  const  enquiryClick = (data) => {
    if(userData && userData.id){
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
    <FullWidth
      breadCrumbLink={links}
    >
      <EnquiryModal
        openState={modalState}
        data={currentData}
        handleClose={()=>{setModalState(false)}}
      />
      <div className={classes.container}>
        <TopHeading
          heading={`My cart (${cartList && cartList.length})`}
          headingStyle={classes.headingStyle}
        />
        <div className={classes.itemsView}>
          <div>
            {
              (cartList && cartList.length > 0) && cartList.map((item) => {
                return (
                  <div className={classes.itemCardView}>
                    <div className={classes.leftOute}>
                      <img src={(item && item.photos && item.photos !== 0) ? imageUrls + item.photos[0].image : MainLogo} alt="Vome" className={classes.imageStyle} />
                      <div className={classes.imageRIghtOuter}>
                        <div className={classes.leftTextOuter}>
                          <Typography className={classes.labelName}>{item.name}</Typography>
                          <Typography className={classes.locationText} >{item.seller_location},<u> {`${item.first_name} ${item.last_name}`}</u></Typography>
                          <div className={classes.bottomButtonOuter}>
                            <Typography onClick={()=> enquiryClick(item)} className={classes.removeText} >Make an enquiry</Typography>
                            <Typography onClick={() => removeCartProduct(item.id)} className={classes.removeText} >Remove</Typography>
                          </div>
                        </div>

                        <div className={classes.priceSelectOuter}>
                          <div className={classes.priceTextOuter}>
                            <Typography className={classes.dollarSign} >$</Typography>
                            <Typography className={classes.priceUnti} >{parseFloat(item.price).toFixed(2)} / {item.price_unit_type}</Typography>
                          </div>
                          <div className={classes.selectOuterWidth}>
                            <Select
                              className={classes.selectTextField}
                              name={item.quantity}
                              value={item.quantity}
                              onChange={(e)=>handleChange(e,item.id)}
                              defaultValue="Select..."
                              placeholder='Select...'
                            >
                              <MenuItem value={0}>Select...</MenuItem>
                              {(item.quantityArr &&item.quantityArr .length > 0) ? item.quantityArr .map((item) => (
                                <MenuItem key={item} value={item}>
                                  {item}
                                </MenuItem>
                              )) : null}
                            </Select>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )
              })
            }
          </div>



          <div style={{ width: '73%',}}>
            {(cartList && cartList.length > 0) ?
              <div style={{ width: '63%', marginLeft:100 }}>
                <RoundButton
                  onClick={()=>{history.push('/cart-checkout')}}
                  title='Go to checkout'
                  containerStyle={classes.buttonOuter}
                  textStyle={classes.checkOutText}
                />

                <div className={classes.marginContainer}>
                  <Typography className={classes.priceText}>items({cartItem})</Typography>
                  <Typography className={classes.priceText}>{`$${parseFloat(totalPrice).toFixed(2)}`}</Typography>
                </div>

                <div className={classes.marginContainer}>
                  <Typography className={classes.priceText}>Shipping</Typography>
                  <Typography className={classes.priceText}>Free</Typography>
                </div>

                <div className={classes.rightMidLine}></div>

                <div className={classes.marginContainer}>
                  <Typography className={classes.totalText}>Total</Typography>
                  <Typography className={classes.totalText}>{`$${parseFloat(totalPrice).toFixed(2)}`}</Typography>
                </div>
              </div>
              :
              <div>
                <Typography className={classes.emptyCartText}>Shopping Cart</Typography>
                <Typography className={classes.emptyCartText}>Your Shopping Cart is empty.</Typography>
                <Typography className={classes.emptyCartDesc}>You have items saved to buy later. To buy one or more now, click "Move to cart" next to the item.</Typography>
              </div>

            }

          </div>

        </div>

      </div>
    </FullWidth>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  userData: state.login.userData,
  cartList: state.product.cartList,
  updateItem: state.product.updateItem,

});

const mapDispatchToProps = dispatch => ({
  removeProduct: (id) => dispatch(productAction.removeProduct(id)),
  itemCount: (data) => dispatch(productAction.itemCount(data)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCart);
