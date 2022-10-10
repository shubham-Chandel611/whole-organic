const styles = theme => ({
  selectTextField: {
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#F4F4F4',
    height: 50,
    "& fieldset": {
      border: '0px',
      height: 50,
    },
    "& div": {
      fontSize: 14,
      color: '#000',
      fontFamily: 'Nexa',
      lineHeight: 1.27,
    },
    "& input": {
      border: '0px',
      backgroundColor: '#F4F4F4',
      padding: '0 30px',
      height: 50,
    },
  },
  headingStyle: {
    width: "72%",
    borderBottomColor: '#DBDBDB',
  },
  rightOuter: {
    width: '23%',
  },
  buttonOuter: {
    marginBottom: 4,
    width: '100%',
    height: 68,
    marginTop: 0,
  },
  checkOutText: {
    fontSize: 18,
  },
  marginContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  rightMidLine: {
    margin: '25px 0px 4px',
    height: 1,
    width: '100%',
    backgroundColor: '#DBDBDB',
  },
  priceText: {
    color: '#656464',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    fontSize: 13,
  },
  totalText: {
    color: '#0F4542',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    fontSize: 22,
  },
  container: {
    marginBottom: 130,
  },
  outer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  labelHead: {
    fontFamily: 'Nexa',
    color: '#0F4542',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  leftMidLine: {
    height: 1,
    width: '100%',
    margin: '30px 0px 60px 0px',
    backgroundColor: '#DBDBDB',
  },
  addressButton: {
    width: '22%',
  },
  sendToOuter: {
    paddingBottom: 30,
  },
  inputTextField: {
    height: 69,
    "& fieldset": {
      height: 69
    },
    "& input": {
      height: 69
    },
  },
  applyButton: {
    width: '100%',
    marginTop: 0,
    height: 69,
  },
  applyOuter: {
    width: '28%',
  },
  inputOuter: {
    width: "72%",
  },
  cardOuter: {
    display: 'flex',
    width: '50%',
  },
  borderOuter: {
    height: 38,
    width: 38,
    borderRadius: 19,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
    border: '1px solid #D1D1D1',
    marginRight: 20,
    cursor: 'pointer',
  },
  activeRound: {
    height: 22,
    width: 22,
    borderRadius: 11,
    background: '#33BCC1',
  },
  paymentOption: {
    display: 'flex',
    alignItems: 'center',
  },
  inActive: {
    backgroundColor: '#fff',
  },
  addressOuter: {
    width: '100%',
    height: 230,
    backgroundColor: '#FAFAFA',
    border: '1px solid #EFEFEF',
  },
  editText: {
    color: '#33BCC1',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    marginLeft: '4%',
    marginTop: 25,
  },
  addressText: {
    color: '#656464',
    fontSize: 16,
    fontFamily: 'Nexa',
    fontWeight: 'bold',
  },
  addressContainer: {
    marginTop: 35,
    marginLeft: '4%',
  },
})

export default styles;