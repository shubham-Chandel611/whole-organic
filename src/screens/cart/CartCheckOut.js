import React, { useState } from "react";
import { connect } from "react-redux";
import Formsy from 'formsy-react';
import FullWidth from "../../layout/FullWidth";
import { makeStyles, Typography } from "@material-ui/core";
import styles from '../../assets/css/cart/CartCheckOut.style';
import TopHeading from '../../components/common/TopHeading';
import Paypal from "../../assets/images/static/paypal.png";
import RoundButton from '../../components/button/RoundButton';
import InputField from '../../components/common/InputField';

const links = [{
  link: "#",
  name: "My Cart"
},
{
  link: "#",
  name: "Checkout"
}]
const useStyles = makeStyles(styles);

const CartCheckout = ({
  token,
  cartList,
  userData
}) => {
  const classes = useStyles();
  const [payment, setPayment] = useState(false)

  let totalPrice = 0
  let cartItem = 0
  cartList.map((res) => {
    totalPrice = +totalPrice + +(res.quantity * parseFloat(res.price).toFixed(2))
    cartItem = +cartItem + +res.quantity
  })


  return (
    <FullWidth
      //alertMessage = {message}
      //showAlert={message ? true : false}
      //onCloseAlert={closeAlert}
      breadCrumbLink={links}
    //alertType={error ? 'error' : 'success'}
    >
      <Formsy
        id="personalAccount"
      >
        <div className={classes.container}>
          <TopHeading
            heading='My cart (4)'
            headingStyle={classes.headingStyle}
          />
          <div className={classes.outer}>
            <div style={{ width: '72%' }}>

              <Typography className={classes.labelHead}>Pay with</Typography>
              <div className={classes.paymentOption}>
                <div className={classes.borderOuter} onClick={() => setPayment(!payment)}>
                  <div className={payment ? classes.activeRound : [classes.activeRound, classes.inActive].join(' ')}></div>
                </div>
                <img src={Paypal} alt="Visa" />
              </div>

              <div className={classes.leftMidLine}></div>

              <div className={classes.sendToOuter}>
                <Typography className={classes.labelHead}>Send to</Typography>
                <div className={classes.addressOuter}>
                  <div className={classes.addressContainer}>
                    <Typography className={classes.addressText}>Plot No</Typography>
                    <Typography className={classes.addressText}> Street address</Typography>
                    <Typography className={classes.addressText}>State</Typography>
                    <Typography className={classes.addressText}>Country</Typography>
                    <Typography className={classes.addressText}>Number</Typography>
                  </div>
                  <Typography className={classes.editText}><u> Edit</u></Typography>
                </div>

                <RoundButton
                  title='Add new address'
                  containerStyle={classes.addressButton}
                  textStyle={classes.checkOutText}
                />
              </div>

              <div className={classes.leftMidLine}></div>

              <Typography className={classes.labelHead}>Add coupons</Typography>
              <div className={classes.cardOuter}>
                <div className={classes.inputOuter}>
                  <InputField
                    variant="outlined"
                    type="text"
                    placeholder="Enter code"
                    name="code"
                    inputStyle={classes.inputTextField}
                  />
                </div>
                <div className={classes.applyOuter}>
                  <RoundButton
                    title='Apply'
                    containerStyle={classes.applyButton}
                    textStyle={classes.checkOutText}
                  />
                </div>
              </div>

            </div>


            <div className={classes.rightOuter}>

              <RoundButton
                title='Checkout'
                containerStyle={classes.buttonOuter}
                textStyle={classes.checkOutText}
              />

              <div className={classes.marginContainer}>
                <Typography className={classes.priceText}>{`items(${cartItem})`}</Typography>
                <Typography className={classes.priceText}>{`$${totalPrice}`}</Typography>
              </div>

              <div className={classes.marginContainer}>
                <Typography className={classes.priceText}>Shipping</Typography>
                <Typography className={classes.priceText}>Free</Typography>
              </div>

              <div className={classes.rightMidLine}></div>

              <div className={classes.marginContainer}>
                <Typography className={classes.totalText}>Total</Typography>
                <Typography className={classes.totalText}>{`$${totalPrice}`}</Typography>
              </div>
            </div>

          </div>

        </div>
      </Formsy>
    </FullWidth >
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  cartList: state.product.cartList,
  userData: state.login.userData,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartCheckout);
