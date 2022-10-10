import React, { useState, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import styles from '../assets/css/enquiryModal/enquiryModal.style';
import Modal from '@material-ui/core/Modal';
import AddressAutoComplete from '../components/common/AddressAutoComplete';
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { imageUrls } from '../constants/ImageUrl';
import CardImg from "../assets/images/static/banner.jpg";
import * as productAction from '../store/product/actions'
import MenuItem from '@material-ui/core/MenuItem';
import RoundButton from "../components/button/RoundButton";
import Select from '@material-ui/core/Select';
import Formsy from "formsy-react";


const useStyles = makeStyles(styles);
const options = [
    '100', '200', '300'
];

const EnquiryModal = ({
    openState,
    handleClose,
    postEnquiry,
    token,
    userData,
    data
}) => {
    const classes = useStyles();
    const form = useRef(null);
    const [formIsValid, setFormIsValid] = useState(false);
    const [event, setEvent] = useState(
        {
            unit: 0,
            additionalInfo: ''

        }
    )

    const [location, setLocation] = useState(
        {
            address: '',
            latitude: "",
            longitude: "",
        }
    );

    const handleChange = e => {
        event[e.target.name] = e.target.value;
        setEvent({ ...event, [e.target.name]: e.target.value });
    };

    const handlePlaceChange = address => {
        location['address'] = address;
        location['latitude'] = null;
        location['longitude'] = null;
        setLocation({ ...location });
    }

    const handlePlaceSelect = selected => {
        location['address'] = selected;
        geocodeByAddress(selected)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                location["latitude"] = lat;
                location["longitude"] = lng;
                setLocation({ ...location });
            })
    }

    const onSubmit = (modal) => {
        let dataInfo= {
            ad_id: data.id,
            ship_to: address,
            additional_info: additionalInfo,
            quantity: (unit == 0) ? data.quantity : unit
        }
        postEnquiry(userData.id, dataInfo, token)
        .then((resp)=>{
            handleClose()
        })
    }

    const enableButton = () => {
        setFormIsValid(true)
      };
    
      const disableButton = () => {
        setFormIsValid(false)
      };

    const {
        unit,
        additionalInfo
    } = event;

    const {
        address,
        longitude,
        latitude
    } = location;

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openState}
            onClose={() => handleClose()}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openState}>
                <div className={classes.mainContainer}>
                    <div className={classes.headingContainer}>
                        <Typography className={classes.text}>Make an enquiry</Typography>

                    </div>
                    <div className={classes.border} />
                    {(data) && <div className={classes.detailContainer}>
                        <img
                            src={(data && data.photos && data.photos.length > 0) && imageUrls + data.photos[0].image}
                            className={classes.imageStyle}
                        />
                        <div className={classes.detailSubContainer}>
                            <Typography className={classes.rightName}>{data.name}</Typography>
                            <Typography className={classes.rightloc}>{`From ${data.seller_location}  `}<u>{`${data.first_name} ${data.last_name}`}</u></Typography>
                            <div className={classes.priceTextOuter}>
                                <Typography className={classes.dollarSign} >$</Typography>
                                <Typography className={classes.priceUnit} >{parseFloat(data.price).toFixed(2)} / {data.price_unit_type}</Typography>
                            </div>
                            <Typography className={classes.rightdesc}>{data.description}</Typography>
                            <Formsy
                                id="enquiryModal"
                                onValidSubmit={(e) => onSubmit(e)}
                                onValid={() => enableButton()}
                                onInvalid={() => disableButton()}
                                ref={form}
                            >
                                <Typography className={classes.quantityText}>Quantity</Typography>
                                <div className={classes.selectOuterWidth}>
                                    <Select
                                        className={classes.selectTextField}
                                        name={'unit'}
                                        disableUnderline
                                        value={(unit == 0) ? data.quantity : unit}
                                        onChange={(e) => handleChange(e, data.id)}
                                        defaultValue="Select..."
                                        placeholder='Select...'
                                    >
                                        <MenuItem value={0}>Select...</MenuItem>
                                        {(data.quantityArr && data.quantityArr.length > 0) ? data.quantityArr.map((item) => (
                                            <MenuItem key={item} value={item}>
                                                {item}
                                            </MenuItem>
                                        )) : null}
                                    </Select>
                                </div>
                                <Typography className={classes.productDescText}>Where will the product be shipped to?</Typography>
                                <div className={classes.locationOuter}>
                                    <AddressAutoComplete
                                        required
                                        handlePlaceChange={handlePlaceChange}
                                        handlePlaceSelect={handlePlaceSelect}
                                        address={address}
                                        containerStyle={classes.addressContainer}
                                    />
                                </div>
                                <Typography className={classes.productDescText}>Addintional info</Typography>
                                <div className={classes.proDescText}>
                                    <textarea 
                                        id="story" 
                                        required 
                                        className={classes.proDesc} 
                                        placeholder="Type here…" 
                                        name="additionalInfo"
                                        rows="5" 
                                        cols="33" 
                                        value={additionalInfo} 
                                        onChange={handleChange} />
                                </div>
                                <RoundButton
                                    title='Send Enquiry'
                                    type="submit"
                                    disabled={!formIsValid && !unit }
                                    containerStyle={classes.buttonOuter}
                                    textStyle={classes.checkOutText}
                                />
                            </Formsy>
                        </div>
                    </div>}
                </div>
            </Fade>
        </Modal>
    );
}

const mapStateToProps = state => ({
    token: state.login.token,
    userData: state.login.userData,
    cartList: state.product.cartList,
    updateItem: state.product.updateItem,
  
  });
  
  const mapDispatchToProps = dispatch => ({
    postEnquiry: (id, data, token) => productAction.postEnquiry(id, data, token),
  
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EnquiryModal);