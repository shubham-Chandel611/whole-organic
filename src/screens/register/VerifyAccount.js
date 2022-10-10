/**
 * This is verify account screen
 * This layout included FullWidth layout, 
 * All content rendered in FullWidth layout
 */


import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Typography, makeStyles, Paper } from "@material-ui/core";
import RoundButton from '../../components/button/RoundButton';
import styles from '../../assets/css/register/Verify.style';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { verifyAccount } from '../../store/register/actions';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(styles);
const Verify = ({
  match,
  verifyAccount
}) => {
  let userUid = match.params.id;
  const classes = useStyles();

  useEffect(() => {
    verifyAccount(userUid);
  }, [])

  return (
    <div>
      <Header />
      <div className={classes.container}>
        <Paper elevation={3} className={classes.content}>
          <Typography variant="h5">
            Your account is successfully Verified
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Click here to
          </Typography>
          <Link to='/login'>
            <RoundButton
              title={'Login'}
              disabled={false}
            />
          </Link>
        </Paper>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  token: state.login.token,
});

const mapDispatchToProps = dispatch => ({
  verifyAccount: (id) => dispatch(verifyAccount(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Verify);