const styles = theme => ({
  container: {
    marginBottom: 0,
  },
  midLine: {
    width: '100%',
    height: 1,
    marginTop: 20,
    marginBottom: 30,
    background: '#EBEBEB',
  },
  profileImageOuter: {
    width: 140,
    height: 140,
    borderRadius: 70,
    border: '2px solid #1FC5CB',
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 65,
    border: 'solid 1px #707070',
  },
  eventLabel: {
    color: '#b5b5b5',
    marginTop: -5,
  },
  userInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 35
  },
  inputOuter: {
    width: "32%",
  },
  changePassword: {
    margin: '35px 0px',
    fontSize: 13,
    color: '#0F4542',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    cursor:'pointer'
  },
  selectProduct: {
    marginTop: 90,
    fontFamily: 'Nexa',
    fontSize: 21,
    color: '#125451',
    fontWeight: 'bold',
  },
  selectEventLabel: {
    color: '#030F0E',
  },
  selectTextField: {
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#F4F4F4',
    height: 64,
    "& fieldset": {
      border: '0px',
      height: 64
    },
    "& div": {
      fontSize: 13,
      color: '#6A6A6A',
      fontWeight: 'bold',
      fontFamily: 'Nexa',
      lineHeight: 1.27,
    },
    "& input": {
      border: '0px',
      backgroundColor: '#F4F4F4',
      padding: '0 30px',
      height: 64
    },
  },
  selectOuter: {
    width: '38%',
  },
  selectRightOuter:{
    width: '38%',
    marginLeft:'1%',
  },
  inputTextField: {
    "& div": {
      color: '#030F0E',
    },
  },
  roundContainer: {
    marginTop: 0,
    height: 64,
  },
  leftProductOuter: {
    width: '37%',
    display: 'flex',
    flexDirection: 'row',
  },
  addButttonOuter: {
    width: '23%',
  },
  addListOuter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginRight: 25,
  },
  listName: {
    color: '#0F4542',
    fontSize: 13,
    fontFamily: 'Nexa',
    fontWeight: 'bold',
  },
  closeIcon: {
    fontSize: 10,
    color: '#0F4542',
    marginLeft: 10,
  },
  reqSwitchOff: {
    border: '1px solid #EDEBEB',
    "& div": {
      borderRadius: 14,
      height: 28
    },
  },
  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 30,
  },
  switchOuter: {
    display: 'flex',
    alignItems: 'center',
    marginRight:30
  },
  switchRightText: {
    marginLeft: 10,
    color: '#030F0E',
    fontFamily: 'Nexa',
    fontSize: 17,
  },
  displayFlex: {
    display: 'flex',
  },
  productNameOuetr: {
    width: '80%',
  },
  label: {
    fontSize: 13,
    color: '#0F4542',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    marginBottom: 5,
  },
  addressContainer: {
    width: '51%',
  },
});


export default styles;