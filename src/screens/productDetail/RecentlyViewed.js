import React, { useState, useEffect, useRef } from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import LeftNavLayout from '../../layout/LeftNavLayout';
import ProductCard from "../../components/common/productCard.js";
import { getRecentlyViewed } from '../../store/product/actions';

const data = ['1', '2', '3', '4', '5', '6']

const styles = theme => ({
  label: {
    fontSize: 32,
    color: '#125451',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
  },
  itemContainer: {
    paddingBottom: 20,
    paddingTop: 25,
  },
});


const links = [{
  link: "#",
  name: "My account "
},
{
  link: "#",
  name: "Recently viewed "
}
];


const useStyles = makeStyles(styles);

const RecentlyViewed = ({
  token,
  userData,
  recentlyData,
  getRecentlyViewed
}) => {


  useEffect(() => {
    getRecentlyViewed(userData.id)
  }, []);
  const classes = useStyles();
  console.log('recentlyData', recentlyData)
  return (

    <LeftNavLayout
      // alertMessage={message}
      // showAlert={message ? true : false}
      // onCloseAlert={closeAlert}
      breadCrumbLink={links}
    //alertType={error ? 'error' : 'success'}
    >
      <div>
        <Typography className={classes.label}>Recently viewed</Typography>
        <Grid
          className={classes.itemContainer}
          container
          spacing={6}
        >
          {recentlyData && recentlyData.data.map((item) => {
            return <Grid item xs={4}>
              <ProductCard 
                data={item}
                isEdit={false}
              />
            </Grid>
          })}
        </Grid>
      </div>
    </LeftNavLayout>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  userData: state.login.userData,
  recentlyData: state.product.recentlyData
});

const mapDispatchToProps = dispatch => ({
  getRecentlyViewed: (id) => dispatch(getRecentlyViewed(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentlyViewed);