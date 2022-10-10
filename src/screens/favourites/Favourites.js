import React, { useState, useRef, useEffect } from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import LeftNavLayout from '../../layout/LeftNavLayout';
import ProductCard from "../../components/common/productCard.js";
import { getFavouritesList } from '../../store/favourites/actions';


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
  noListFound: {
    width: '100%',
    display: 'flex',
    //justifyContent: 'center',
    marginTop: '10%',
    //color: '#fff',
    //background: 'linear-gradient(to right, #67B241, #51AE60)',
  },
});

const links = [{
  link: "#",
  name: "My account "
},
{
  link: "#",
  name: "Favourites "
}
];

const useStyles = makeStyles(styles);

const EditPassword = ({
  token,
  userData,
  favouritesList,
  getFavouritesList,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getFavouritesList(userData.id, token);
  }, []);

  console.log('favouritesList', favouritesList)
  return (

    <LeftNavLayout
      // alertMessage={message}
      // showAlert={message ? true : false}
      // onCloseAlert={closeAlert}
      breadCrumbLink={links}
    //alertType={error ? 'error' : 'success'}
    >
      <div>
        <Typography className={classes.label}>Favourites</Typography>
        <Grid
          className={classes.itemContainer}
          container
          spacing={6}
        >
          {favouritesList && favouritesList.length ? favouritesList.map((item) => {
            return <Grid item xs={6}>
              <ProductCard 
                data={item}
                isEdit={false}
                isFavourite={true}
              />
            </Grid>
          })
            :
            <Grid item xs={6}><Typography> No record found</Typography></Grid>
          }
        </Grid>
      </div>
    </LeftNavLayout>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
  userData: state.login.userData,
  favouritesList: state.favourite.favouritesList
});

const mapDispatchToProps = dispatch => ({
  getFavouritesList: (id, token) => dispatch(getFavouritesList(id, token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPassword);