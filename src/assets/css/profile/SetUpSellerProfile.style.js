const styles = theme => ({
  container: {
    width: '55%',
    margin: '70px 0px 130px',
    //paddingLeft: '8%',
  },
  profileLabel: {
    color: '#125451',
    fontSize: 31,
    fontWeight: 'bold',
    fontFamily: 'Nexa',
  },
  doneButton: {
    width: '100%'
  },
  postButton: {
    width: '100%',
    marginLeft: 10,
    background: '#fff',
    boxShadow: "0px 0px 1px 1px #12BABD",
  },
  buttonText: {
    color: '#0DB69F',
  },
  bottomButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  businessFieldOuter: {
    width: '100%',
    display: 'flex',
    marginTop: 40,
  },
  textFieldOuter: {
    width: '100%',
    display: 'flex',
    marginTop: 30,
  },
  profileImageOuter: {
    width: 140,
    height: 140,
    borderRadius: 70,
    border: '2px solid #1FC5CB',
    marginTop: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 65,
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
  inputFieldRightOuter: {
    width: '40%',
    marginLeft: 10,
  },
  inputFieldLeftOuter: {
    width: '40%'
  },
  inputTextField: {
    "& div": {
      color: '#030F0E',
    },
  },
  typeHere: {
    width: '80%',
    marginTop: 30,
  },
  locationOuter: {
    width: '82%',
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
  completeRegistration: {
    color: '#17D6C2',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Nexa',
  },
  buttonOuter: {
    width: '20%'
  },
  label: {
    fontSize: 13,
    color: '#0F4542',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    marginBottom: 5,
  },
});

export default styles;