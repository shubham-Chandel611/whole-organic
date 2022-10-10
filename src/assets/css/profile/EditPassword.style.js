const styles = theme => ({
  userInfo: {
    width: '100%',
    display: 'flex',
    marginTop: 35,
  },
  inputLeftOuter: {
    width: "40%",
  },
  inputRightOuter :{
    width:'40%',
    marginLeft:'2%'
  },
  label: {
    fontSize: 13,
    color: '#0F4542',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    marginBottom: 5,
  },
  inputTextField: {
    "& div": {
      color: '#030F0E',
    },
  },
  container: {
    margin: '70px 8% 130px',
    width: '100%',
    display: 'flex',
  },
  leftContainer: {
    width: '15%',
  },
  rightContainer: {
    width: '65%',
    paddingLeft: '5%',
  },
  userBottomInfo:{
    width: '100%',
    display: 'flex',
    marginTop: 25,
  }
});


export default styles;