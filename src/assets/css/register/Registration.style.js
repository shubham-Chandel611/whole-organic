const styles = theme => ({
  container: {
    width: '100%',
    display: 'flex',
    margin: '70px 0px 130px',
  },
  firstNameTextField: {
    width: '40%',
    marginBottom: 10,
    backgroundColor: '#F4F4F4',
    minHeight: 40,
    "& fieldset": {
      minHeight: 40,
      border: '0px'
    },
    "& div": {
      fontSize: 13,
      color: '#6A6A6A',
      lineHeight: 1.27,
      padding: '15px',
      fontWeight: 'bold',
      fontFamily: 'Nexa',
    },
  },
  lastNameTextField: {
    width: '40%',
    margin: '0px 0px 10px 10px',
    backgroundColor: '#F4F4F4',
    minHeight: 40,
    "& fieldset": {
      minHeight: 40,
      border: '0px'
    },
    "& div": {
      fontSize: 13,
      color: '#6A6A6A',
      lineHeight: 1.27,
      padding: '15px',
      fontWeight: 'bold',
      fontFamily: 'Nexa'
    },
  },
  eventLabel: {
    color: '#b5b5b5',
    marginTop: -10,
  },
  helperTextError: {
    color: '#fa935b'
  },
  labelText: {
    fontSize: 14,
    color: '#121212',
    fontFamily: 'Nexa',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Nexa'
  },
  createAccount: {
    fontSize: 31,
    color: '#125451',
    fontWeight: 'bold',
    fontFamily: 'Nexa',
    marginBottom: 25,
  },
  textFieldOuter: {
    width: '100%',
    display: 'flex',
  },
  captcheText: {
    marginTop: 40,
    fontSize: 14,
    color: '#121212',
    fontFamily: 'Nexa',
    marginBottom: 10,
  },
  alreadyText: {
    marginTop: 20,
    fontSize: 16,
    color: '#0F4542',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontFamily: 'Nexa'
  },
  divisionLine: {
    width: 1,
    background: '#707070',
    opacity: 0.24,
    height: 425
  },
  leftOuter: {
    width: '55%',
  },
  rightOuter: {
    width: '45%',
    paddingLeft: '5%',
  },
  checkBoxOuter: {
    marginTop: 20,
    paddingRight: '25%',
  },
  choiceOuter: {
    marginTop: 15,
  },
  fbOuter: {
    marginTop: 25,
    width: '50%',
  },
  googleOuter: {
    marginTop: 10,
    width: '50%'
  },
  iamText: {
    fontSize: 16,
    color: '#0F4542',
    fontWeight: 'bold',
    fontFamily: 'Nexa'
  },
  textFieldStyle: {
    marginLeft: 10
  },
  inputFieldOuter: {
    width: '40%'
  },
  checkedTrue: {
    marginTop: -5,
    color: '#0CB69B',
  },
  checkedIconStyle: {
    color: '#0CB69B',
  },
  unCheckedIconStyle: {
    color: '#1FC5CB',
  },
  link: {
    color: 'inherit'
  },
});

export default styles;