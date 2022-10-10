
const styles = theme => ({
    headingStyle: {
      borderBottom: '0px solid #000',
      paddinBottom: 0
    },
    itemContainer: {
      paddingBottom: 70,
      paddingTop: 50,
    }, 
    pcard: {
      
    },
    bottomButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
      },
      backButton: {
        textDecoration: 'none',
        width: '15%'
      },
      backButton: {
        width: '100%',
        marginLeft: 30,
        background: '#fff',
        boxShadow: "0px 0px 1px 1px #12BABD",
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
      dropDownContainer: {
        width: '66%',
        display: 'flex',
        justifyContent: 'space-between',
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
      inputFieldOuter: {
        width: 250
      },
      container: {
        width: '100%',
        paddingBottom: 130
      },
      productDescText: {
        marginTop: 50,
        fontSize: 13,
        color: '#125451',
        fontWeight: 'bold',
        fontFamily: 'Nexa',
        marginBottom: 5,
      },
      proDesc:{
        width:'78%',
        backgroundColor: '#F4F4F4',
        border: 0,
        padding: '1%',
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
      unCheckedIconStyle: {
        color: '#1FC5CB',
      },
      checkedIconStyle: {
        color: '#0CB69B',
      },
      locationOuter: {
        width: '80%',
        marginTop: 15,
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
      priceView:{
        display: 'flex',
    
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
      unitView:{
        width: '30%'
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
      addressContainer: {
        width: '50%'
      }
  });
  
  export default styles;
  