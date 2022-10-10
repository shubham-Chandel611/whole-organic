import React, { useState } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Switch from "react-switch";
import styles from '../../assets/css/components/common/Switch.style';
const useStyles = makeStyles(styles);

const CustomSwitch = ({
  item,
  handleSwitchChange,
  checked
}) => {
  const [checkedValue, setcheckedValue] = useState(checked ? checked : false);
  const handleSwitchChangeOption = (e) => {
    setcheckedValue(e);
    handleSwitchChange(e, item);
  };

  const classes = useStyles();
  return (
    <div className={classes.switchContainer}>
      <div className={classes.switchOuter} >
        <Switch
          className={classes.reqSwitchOff}
          onChange={(e) => handleSwitchChangeOption(e)}
          checked={checkedValue}
          offColor="#EDEBEB"
          onColor="#EDEBEB"
          onHandleColor='#0CB69B'
          offHandleColor='#AAAAAA'
          checkedIcon={
            <div> </div>
          }
          uncheckedIcon={
            <div> </div>
          }
          width={65}
        />
        <Typography className={classes.switchRightText}>{item.title}</Typography>
      </div>
    </div>
  )
};

export default CustomSwitch;