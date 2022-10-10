import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import LeftNavLayout from '../../layout/LeftNavLayout'
import TopHeading from '../../components/common/TopHeading';
import styles from '../../assets/css/ads/MyAds.style'
import ProductCard from '../../components/common/productCard'
import { getAdsListData, resetData } from '../../store/product/actions';
import history from "../../history/index";

const links = [{
  link: "#",
  name: "My account "
},
{
  link: "#",
  name: "My Ads "
}
];
const useStyles = makeStyles(styles);

const MyAds = ({
  token,
  userId,
  getAdsListData,
  resetData,
  myAdsList,
}) => {
  const classes = useStyles();

  useEffect(() => {
    resetData();
    getAdsListData(userId, token);
  }, []);

  return (
    <LeftNavLayout
      breadCrumbLink={links}
    >
      <TopHeading
        heading='My Ads'
        headingStyle={classes.headingStyle}
      />
      <Grid
        className={classes.itemContainer}
        container
        spacing={6}
      >
        {myAdsList && myAdsList.length ? myAdsList.map((item) => {
          return <Grid item xs={6} className={classes.pcard}>
            <ProductCard 
              data={item}
              isEdit={true}
            />
          </Grid>
        }) : 
          <Grid item xs={6} className={classes.pcard}>
            <Typography>No product added by you</Typography>
          </Grid>
        }
      </Grid>
    </LeftNavLayout>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  userId: state.login.userId,
  myAdsList: state.product.myAdsList
});

const mapDispatchToProps = dispatch => ({
  getAdsListData: (id, token) => dispatch(getAdsListData(id, token)),
  resetData: () => dispatch(resetData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAds);