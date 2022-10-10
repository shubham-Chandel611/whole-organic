const styles = theme => ({
  headingText: {
    fontFamily: 'Nexa',
    fontSize: 32,
    color: '#125451',
    fontWeight: 'bold',
  },
  midLine: {
    width: '100%',
    height: 1,
    marginTop: 20,
    marginBottom: 30,
    background: '#EBEBEB',
  },
  generalInfo: {
    fontFamily: 'Nexa',
    fontSize: 21,
    color: '#125451',
    fontWeight: 'bold',
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
  },
  inputTextField: {
    "& div": {
      color: '#030F0E',
    },
  },
  textFieldOuter: {
    width: '100%',
    display: 'flex',
    marginTop: 30,
  },
  multiTextField: {
    width: '100%',
    backgroundColor: '#F4F4F4',
    padding: '0px 5px',
    "& div": {
      color: '#030F0E',
    },
  },
  businessFieldOuter: {
    width: '100%',
    display: 'flex',
    marginTop: 40,
  },
  selectBusinessType: {
    width: '43%',
  },
  businessName: {
    width: '42%',
    marginLeft: 10,
  },
  typeHere: {
    width: '80%',
    marginTop: 30,
  },
  myAddressText: {
    marginTop: 90,
    fontFamily: 'Nexa',
    fontSize: 21,
    color: '#125451',
    fontWeight: 'bold',
  },
  addressOuterc: {
    width: '88%',
    marginLeft: '3%',
  },
  addressName: {
    fontFamily: 'Nexa',
    fontSize: 16,
    color: '#383838',
    fontWeight: 'bold',
  },
  rightOuter: {
    display: 'flex',
    flexDirection: 'row',
    width: '12%',
    justifyContent: 'space-between',
  },
  editText: {
    fontFamily: 'Nexa',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#0FB8AD',
    cursor: 'pointer',
  },
  label: {
    fontSize: 13,
    color: '#0F4542',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    marginBottom: 5,
  },
  locationOuter: {
    width: '82%',
    marginTop: 30,
  },
  inputFieldRightOuter: {
    width: '40%',
    marginLeft: 10,
  },
  inputFieldLeftOuter: {
    width: '40%'
  },
  addressContainer: {
    width: '51%',
  }
});


export default styles;