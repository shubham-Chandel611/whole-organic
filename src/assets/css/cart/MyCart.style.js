
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
      paddingLeft: 20,
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
    borderBottom: '0px solid #000',
    paddinBottom: 0
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
  itemsView:{
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    marginBottom: 130,
   
  },
  itemCardView:{
    width: '100%',
  },
  outer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  leftOute: {
    width: '100%',
    display: 'flex',
    marginBottom: 20,
  },
  imageStyle: {
    height: 265,
    width: '35%',
  },
  imageRIghtOuter: {
    width: '80%',
    border: '1px solid #EFEFEF',
    paddingLeft: '3%',
    display: 'flex',
    paddingRight: '4%',
    maxHeight: 265,
    justifyContent: 'space-between',
    paddingTop: 90,
  },
  labelName: {
    color: '#125451',
    fontSize: 18,
    fontFamily: 'Nexa',
    fontWeight: 'bold',
  },
  locationText: {
    color: '#7C7B7B',
    fontSize: 13,
    fontFamily: 'Nexa',
  },
  bottomButtonOuter: {
    display: 'flex',
    paddingTop: 70,
    justifyContent: 'space-between',
  },
  removeText: {
    color: '#4CBB75',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    fontSize: 13,
    borderBottom: 'solid 1px #4CBB75',
    cursor: 'pointer',
  },
  priceSelectOuter: {
    display: 'flex',
    width: '55%',
  },
  priceTextOuter: {
    display: 'flex',
    backgroundColor: '#4CBB75',
    height: 50,
    alignItems: 'center',
    width: '60%',
    justifyContent: 'center',
  },
  dollarSign: {
    fontSize: 14,
    fontFamily: 'Nexa',
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -5,
    marginRight: 5,
  },
  priceUnti: {
    fontSize: 21,
    fontFamily: 'Nexa',
    fontWeight: 'bold',
    color: '#fff',
  },
  selectOuterWidth: {
    width: '50%',
  },
  leftTextOuter: {
    width: '40%',
  },
  emptyCartText: {
    lineHeight: 0.9,
    fontSize: 55,
    width:'100%',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    color: 'black',
    marginTop:20
  },
  emptyCartDesc: {
    lineHeight: 0.9,
    fontSize: 20,
    width:'100%',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    color: 'black',
    marginTop:20
  },
})

export default styles;