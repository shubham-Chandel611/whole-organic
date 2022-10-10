const styles = theme => ({
  headingText: {
    borderBottom: 'solid 0px #EBEBEB',
    paddingBottom: 0,
  },
  searchListOuter: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    margin:'20px 0px 15px'
  },
  listContainer: {
    marginTop: 36,
  },
  listLeftIcon: {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -6,
    marginTop: -20,
  },
  iconOuter: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    background: '#0CB69B',
    width: 28,
    height: 28,
    borderRadius: '50%',
  },
  listOuter: {
    width: '94%',
    height: 87,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#F2F2F2',
    padding: '0px 3%',
    marginTop: -20,
    marginRight: -10
  },
  listLeftOuter: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  imageStyle: {
    width: 62,
    height: 62,
    borderRadius: '50%',
    //border: 'solid 1px #707070',
  },
  nameOuter: {
    marginLeft: '2%',
    alignItems: 'center',
  },
  userName: {
    fontFamily: 'Nexa',
    color: '#383838',
    fontSize: 15,
    fontWeight: 'bold',
  },
  userDetails: {
    fontFamily: 'Nexa',
    color: '##000000',
    fontSize: 11,
  },
  dateText: {
    color: '383838',
    fontSize: 11,
    fontFamily: 'Nexa',
  },
  searchOrgField: {
    marginBottom: 10,
    minHeight: 40,
    backgroundColor: '#F4F4F4',
    "& fieldset": {
      minHeight: 40,
      border: '0px',
    },
    "& input": {
      border: '0px',
      backgroundColor: '#F4F4F4',
      padding: '0 15px',
      height: 50
    },
    "& div": {
      "&:before": {
        borderBottomWidth: 0,
      },
      fontSize: 13,
      color: '#0F4542',
      lineHeight: 1.27,
      fontWeight: 'bold',
      fontFamily: 'Nexa',
    },
  },
  searchOrgIcon: {
    fontSize: 19,
    color: "#205374",
  },
  searchOuter: {
    width: '75%',
    height: 50,
  },
  formControl: {
    width: "100%"
  },
  outSort: {
    backgroundColor: '#fff',
    marginBottom: 10,
    height: 50,
    "& fieldset": {
      border: "solid 1px #0F4542",
      height: 50,
    },
    "& div": {
      fontSize: 13,
      color: '#0F4542',
      fontWeight: 'bold',
      fontFamily: 'Nexa',
      lineHeight: 1.27,
    },
    "& svg": {
      color: "#0F4542",
      marginRight: 5
    }
  },
  sortOuter: {
    width: '23%',
    height: 50,
  },
  selectTextField: {
    "& input": {
      border: '0px',
      backgroundColor: '#F4F4F4',
      padding: '0 30px',
      height: 64
    },
  },
  inputTextField: {
    "& div": {
      color: '#030F0E',
    },
  },
});


export default styles;