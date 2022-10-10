const styles = theme => ({
  textField: {
    width: '100%',
    marginBottom: 10,
    minHeight: 40,
    "& fieldset": {
      minHeight: 40,
      border: '0px',
    },
    "& input": {
      border: '0px',
      backgroundColor: '#F4F4F4',
      padding: '0 30px',
      height: 64
    },
    "& div": {
      "&:before": {
        borderBottomWidth: 0,
      },
      fontSize: 13,
      color: '#6A6A6A',
      lineHeight: 1.27,
      fontWeight: 'bold',
      fontFamily: 'Nexa',
    },
  },
  eventLabel: {
    color: '#b5b5b5',
    marginTop: -10,
  },
  helperTextError: {
    color: '#fa935b'
  },
});

export default styles;