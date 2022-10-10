/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { connect } from "react-redux"
import LeftNavLayout from '../../layout/LeftNavLayout'
import { Typography, makeStyles, TextField, InputAdornment, MenuItem, Select, FormControl, OutlinedInput } from "@material-ui/core";
import TopHeading from '../../components/common/TopHeading';
import styles from '../../assets/css/chat/Message.style';
import MainLogo from "../../assets/images/static/userAvatar.png";
import { Search } from "@material-ui/icons";

const links = [{
  link: "#",
  name: "My account "
},
{
  link: "#",
  name: "Message "
}
];

const useStyles = makeStyles(styles);

const Message = () => {
  const classes = useStyles();

  return (
    <LeftNavLayout
      //alertMessage = {message}
      //showAlert={message ? true : false}
      //onCloseAlert={closeAlert}
      breadCrumbLink={links}
    //alertType={error ? 'error' : 'success'}
    >
      <TopHeading
        heading='Message'
        headingStyle={classes.headingText}
      />

      <div className={classes.searchListOuter}>
        <div className={classes.searchOuter}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Search for a message"
            className={classes.searchOrgField}
            //onChange={handleSearch}
            //search={searchString}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search className={classes.searchOrgIcon} />
                </InputAdornment>
              )
            }}
          />
        </div>

        <div className={classes.sortOuter}>
          <FormControl className={classes.formControl}>
            <Select
              //value={sorting}
              name="sorting"
              // onChange={handleChange}
              className={classes.outSort}
              fullWidth
              input={
                <OutlinedInput
                  labelWidth={0}
                  name="sorting"
                  id="outlined-sor-simple"
                />
              }
            >
              <MenuItem value={0}>Sort by : most recent</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>


      <div className={classes.listContainer}>

        <div className={classes.listLeftIcon}>
          <div className={classes.iconOuter}>
            <div className={classes.iconStyle}></div>
          </div>
        </div>

        <div className={classes.listOuter}>
          <div className={classes.listLeftOuter}>
            <img src={MainLogo} className={classes.imageStyle} />
            <div className={classes.nameOuter}>
              <Typography className={classes.userName}>Name of seller</Typography>
              <Typography className={classes.userDetails}>Name</Typography>
            </div>
          </div>

          <div>
            <Typography className={classes.dateText}>Mar 1</Typography>
          </div>
        </div>

      </div>


      <div className={classes.listContainer}>

        <div className={classes.listOuter}>
          <div className={classes.listLeftOuter}>
            <img src={MainLogo} className={classes.imageStyle} />
            <div className={classes.nameOuter}>
              <Typography className={classes.userName}>Name of seller</Typography>
              <Typography className={classes.userDetails}>Name</Typography>
            </div>
          </div>

          <div>
            <Typography className={classes.dateText}>Mar 1</Typography>
          </div>
        </div>

      </div>

    </LeftNavLayout>
  );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);