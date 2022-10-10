import React, { useState } from "react";
import { Typography, makeStyles, } from "@material-ui/core";
import styles from '../../assets/css/components/common/LeftNavBar.style'
import { ArrowRight } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { logOut } from '../../store/login/actions';


const useStyles = makeStyles(styles);

const LeftNavBar = ({
  userType,
  token,
  logOut
}) => {
  const classes = useStyles();
  const [activeSteps, setActiveSteps] = useState('My profile');

  const sellerNav = [
    {
      title: 'My profile',
      activeSteps: 'My profile',
      link: 'seller-profile'
    },
    {
      title: 'My ads',
      activeSteps: '',
      link: '/my-ads'
    },
    {
      title: 'Recently viewed',
      activeSteps: 'Recently viewed',
      link: '/recent-view'
    },
    {
      title: 'Messages',
      activeSteps: ''
    },
    {
      title: 'Edit Password',
      activeSteps: '',
      link: "/edit-password"
    },
    {
      title: 'Logout',
      action: 'logout'
    },
  ];
  
  const buyerNav = [
    {
      title: 'My profile',
      activeSteps: 'My profile',
      link: 'buyer-profile'
    },
    {
      title: 'Favourites',
      activeSteps: 'Favourites',
      link:'/favourites',
    },
    {
      title: 'Recently viewed',
      activeSteps: 'Recently viewed',
      link: '/recent-view'
    },
    {
      title: 'Messages',
      activeSteps: ''
    },
    {
      title: 'Edit Password',
      activeSteps: '',
      link: "/edit-password"
    },
    {
      title: 'Logout',
      action: 'logout'
    },
  ];

  const handleClick = (item) => {
    setActiveSteps(item.title)
  }

  const handleLogOut = () => {
    logOut(token)
  }

  const navOption = userType === 1 ? buyerNav : sellerNav ;

  return (
    <div className={classes.container} >
      {navOption.map((item, index) => {
        return (
          <div onClick={() => handleClick(item)} className={classes.linkContainer} key={`left-name-${index}`}>
             { item.link  ? <Link 
                className={classes.profileOuter} 
                to={item.link ? item.link : ''} 
                style={{ textDecoration: 'none' }} 
              >
                <Typography className={[classes.labelText, activeSteps === item.title && classes.labelTextActive].join(' ')} >{item.title} </Typography>
                {activeSteps === item.title && <ArrowRight className={classes.arrowRight} /> }
              </Link>
            :
              <div 
                className={classes.profileOuter} 
                onClick={item.action === 'logout' ? () => handleLogOut() : null}
                style={{ textDecoration: 'none' }} 
              >
                <Typography className={[classes.labelText, activeSteps === item.title && classes.labelTextActive].join(' ')} >{item.title} </Typography>
                {activeSteps === item.title && <ArrowRight className={classes.arrowRight} /> }
              </div>
             }
          </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = state => ({
  userType: state.login.userType,
  token: state.login.token,
});

const mapDispatchToProps = dispatch => ({
  logOut: (token) => dispatch(logOut(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftNavBar);

