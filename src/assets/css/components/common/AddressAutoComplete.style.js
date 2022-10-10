const styles = theme => ({
  mapInDist: {
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#F4F4F4',
    border: '0px',
    "& fieldset": {
      minHeight: 40,
      border: '0px',
    },
    "& input": {
      border: '0px',
      backgroundColor: '#F4F4F4',
      height: 27,
    },
    "& div": {
      fontSize: 13,
      color: '#6A6A6A',
      lineHeight: 1.27,
      fontWeight: 'bold',
      fontFamily: 'Nexa',
    }
  },
  locateIcon: {
    color: "#0F4542",
    fontSize: "24px"
  },
  addressContainer: {
    backgroundColor: "#fff",
    padding: 10,
    position: 'absolute',
    zIndex: 99,
    fontSize: 13,
    width: '38%',
    marginTop: '-10px',
  },
  addressItem : {
    cursor: "pointer", lineHeight: '20px' 
  }
});

export default styles;


