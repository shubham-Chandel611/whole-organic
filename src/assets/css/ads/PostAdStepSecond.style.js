const styles = theme => ({
  container: {
    width: '100%',
    paddingBottom: 130
  },
  labelHeading: {
    marginTop: 70,
    fontFamily: 'Nexa',
    fontWeight: 'bold',
    fontSize: 31,
    color: '#125451'
  },
  proDesc:{
    width:'78%',
    backgroundColor: '#F4F4F4',
    border: 0,
    padding: '1%',
  },
  labelSubHeading: {
    fontSize: 18,
    color: '#17D6C2',
    fontFamily: 'Nexa',
  },
  typeHere: {
    width: '80%',
    marginTop: 40,
  },
  label: {
    fontSize: 13,
    color: '#125451',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    marginBottom: 5,
  },
  multiTextField: {
    width: '100%',
    backgroundColor: '#F4F4F4',
    padding: '0px 5px',
    "& div": {
      color: '#0F4542',
    },
  },
  dropDownContainer1: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 50
  },
  productShipText: {
    fontSize: 13,
    marginRight: '2%',
    color: '#125451',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
  },
  labelText: {
    fontSize: 13,
    color: '#121212',
    fontFamily: 'Nexa',
  },
  locationOuter: {
    width: '80%',
    marginTop: 15,
  },
  productDescText: {
    marginTop: 50,
    fontSize: 13,
    color: '#125451',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    marginBottom: 5,
  },
  imageUploaderOuter: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  unitSelector: {
    width: '100%',
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20, 
    backgroundColor: '#F4F4F4',
    height: 64,
    "&:before": {
      borderBottomWidth: '0px !important' ,
    },
    "& fieldset": {
      border: '0px',
      height: 64
    },
    "& div": {
      fontSize: 13,
      color: '#0F4542',
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
  buttonOuter: {
    textDecoration: 'none',
    width: '15%'
  },
  doneButton: {
    width: '100%',
  },
  postButton: {
    width: '100%',
    marginLeft: 10,
    background: '#fff',
    boxShadow: "0px 0px 1px 1px #12BABD",
  },
  priceSignOuter: {
    width: '5%',
    height: 64,
    background: '#EFECEC',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '1%'
  },
  buttonText: {
    color: '#0DB69F',
  },
  dollarText: {
    fontSize: 15,
    fontFamily: 'Nexa',
    color: '#0F4542',
  },
  imageStyle: {
    height: 200
  },
  dropDownContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flexStar',
  },
  imageBg: {
    width: 152,
    height: 100,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    background: '#F4F4F4',
    marginRight: 10,
    cursor: 'pointer',
  },
  imageback: {
    width: '100%',
    height: '100%'
  },
  checkedIconStyle: {
    color: '#0CB69B',
  },
  unCheckedIconStyle: {
    color: '#1FC5CB',
  },
  bottomButtonContainer:{
    display: 'flex'
  },
  priceView:{
    display: 'flex',

  },
  unitView:{
    width: '30%'
  },
  dollar:{
    // width: '100%',
    fontSize: 11,
    fontFamily: 'Nexa',
    color: '#6A6A6A',
    backgroundColor: '#EDEBEB',
    paddingTop: 25,
    paddingLeft: 20,
    height: 39,
  },
  dollorTextView: {
    width: '10%'
  },
  dollorInputView: {
    "& div": {
      "& input": {
        backgroundColor: '#EDEBEB'
      }
    },
  },
  addressContainer: {
    width: '67%'
  }
});

export default styles;