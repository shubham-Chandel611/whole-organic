const styles = theme => ({
    mainContainer: {
      height: '90%',
      width: '70%',
      marginLeft: '13%',
      marginTop: '5%',
      backgroundColor: 'white'
    },
    headingContainer: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      height: '9.4%',
      width: '100%'
    },
    text: {
        color: '#125451',
        fontWeight: 'bold',
        fontSize: 21,
        fontFamily: 'Nexa',
    },
    border: {
      width: '100%',
      height: 1,
      backgroundColor: '#f4f4f4',
    },
    detailContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '5%'
    },
    imageStyle: {
      width: '29%',
      height: '23.1%',
    },
    detailSubContainer: {
        marginLeft: 50
    },
    priceTextOuter: {
        marginTop: 20,
        display: 'flex',
        backgroundColor: '#4CBB75',
        height: '5.5%',
        alignItems: 'center',
        width: '30%',
        justifyContent: 'center',
      },
      dollarSign: {
        fontSize: 8,
        fontFamily: 'Nexa',
        fontWeight: 'bold',
        color: '#fff',
        marginTop: -5,
        marginRight: 5,
      },
      priceUnit: {
        fontSize: 12,
        fontFamily: 'Nexa',
        fontWeight: 'bold',
        color: '#fff',
      },
    pricebox: {
      width: '18%',
      height: 40,
      backgroundColor: 'green',
      marginTop: 20,
      display: 'flex',
      flexDirection: 'row',
    },
    doller: {
      fontSize: 10,
      color: 'white',
      marginLeft: '10%',
      marginTop: 10,
    },
    price: {
      fontSize: 15,
      color: 'white',
      marginLeft: 5,
      marginTop: 10,
    },
    unit: {
      fontSize: 15,
      color: 'white',
      marginLeft: 5,
      marginTop: 10,
    },
    selectOuterWidth: {
        width: '50%',
    },
    selectTextField: {
        width: '50%',
        backgroundColor: '#F4F4F4',
        height: 30,
        "& fieldset": {
          border: '0px',
          height: 30,
        },
        "& div": {
          fontSize: 10,
          color: '#000',
          paddingLeft: 20,
          fontFamily: 'Nexa',
          lineHeight: 1.27,
        },
        "& input": {
          border: '0px',
          backgroundColor: '#F4F4F4',
          padding: '0 30px',
          height: 30,
        },
      },
      locationOuter: {
        width: '100%',
        marginTop: 5,
      },
      productDescText: {
        marginTop: 20,
        fontSize: 10,
        color: '#125451',
        fontWeight: 'bold',
        fontFamily: 'Nexa',
        marginBottom: 5,
      },
      buttonOuter: {
        height: 50,
        width: '50%'
      },
      proDesc:{
        width:'100%',
        backgroundColor: '#F4F4F4',
        border: 0,
        padding: '1%',
      },
      rightName: {
        fontSize: 15,
        color: '#125451',
        fontWeight: 'bold',
        fontFamily: 'Nexa',
      },
      rightloc: {
        marginTop: 5,
        fontSize: 10,
        color: '#125451',
        fontWeight: 'bold',
        fontFamily: 'Nexa',
      },
      rightdesc: {
        marginTop: 10,
        fontSize: 10,
        color: '#125451',
        fontWeight: 'light',
        fontFamily: 'Nexa',
      },
      quantityText: {
        marginTop: 10,
        fontSize: 10,
        color: '#125451',
        fontWeight: 'bold',
        fontFamily: 'Nexa',
      }
  });
  
  export default styles;
  