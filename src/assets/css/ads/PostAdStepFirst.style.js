const styles = theme => ({
  title: {
    fontSize: 31,
    color: '#125451',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
  },
  container: {
    width: '100%',
    paddingBottom: 130
  },
  editConatiner: {
    width: '100%',
    paddingBottom: 0
  },
  editDesc:{
    fontSize: 13,
    marginTop: 51,
    marginBottom: 10,
    color: '#125451',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
  },
  desc: {
    fontSize: 18,
    color: '#17D6C2',
    fontWeight: 'light',
    fontFamily: 'Nexa',
    marginBottom: 30,
  },
  dropDownContainer: {
    width: '66%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#0DB69F',
  },
  postButton: {
    width: '100%',
    marginLeft: 10,
    background: '#fff',
    boxShadow: "0px 0px 1px 1px #12BABD",
  },
  buttonOuter: {
    textDecoration: 'none',
    width: '15%'
  },
  doneButton: {
    width: '100%'
  },
  bottomButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  selectTextField: {
    width: '100%',
    marginBottom: 10,
    paddingLeft: 20, 
    paddingRight: 20,
    marginRight: 5,
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
      color: '#b8b8b8',
      fontWeight: 'bold',
      fontFamily: 'Nexa',
      lineHeight: 1.27,
    },
    "& input": {
      border: '0px',
      backgroundColor: '#F4F4F4',
      padding: '0 30px',
      height: 64,
    },
  },
  inputTextField: {
    "& div": {
      fontSize: 13,
      color: '#030F0E',
      fontWeight: 'bold',
      fontFamily: 'Nexa',
      lineHeight: 1.27,
      
    },
  },
  inputFieldOuter: {
    width: 250
  },
  subHeadingStyle: {
    color: '#17D6C2',
  }
});

export default styles;
