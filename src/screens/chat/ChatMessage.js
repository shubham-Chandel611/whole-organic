import React from "react";
import { connect } from "react-redux"
import LeftNavLayout from '../../layout/LeftNavLayout'
import { Typography, makeStyles } from "@material-ui/core";
import styles from '../../assets/css/chat/ChatMessage.style';
import MainLogo from "../../assets/images/static/userAvatar.png";
import InputField from '../../components/common/InputField';
import Formsy from 'formsy-react';
import { GrAttachment } from "react-icons/gr";
import RoundButton from '../../components/button/RoundButton';

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

const ChatMessage = () => {
  const classes = useStyles();

  return (
    <LeftNavLayout
      //alertMessage = {message}
      //showAlert={message ? true : false}
      //onCloseAlert={closeAlert}
      breadCrumbLink={links}
    //alertType={error ? 'error' : 'success'}
    >
      <Formsy
        id="personalAccount"
      >
        <div className={classes.topSection}>
          <div className={classes.topLeftOuter}>
            <img src={MainLogo} className={classes.imageStyle} />
            <Typography className={classes.userName}>Name of seller</Typography>
          </div>
          <Typography className={classes.backButton}>Back</Typography>
        </div>

        <div className={classes.midContainer}>

          <div className={classes.chatContainer}>
            <div></div>
            <div className={classes.chatOuter}>

              <div className={classes.receiverOuter}>
                <div className={classes.receiverTextOuter}>
                  <Typography className={classes.receiveMessage}>hiiiii</Typography>
                </div>
              </div>

              <div className={classes.senderOuter}>
                <div className={classes.senderTextOuter}>
                  <Typography className={classes.sentMessage}>hi good Morning</Typography>
                </div>
                <img src={MainLogo} className={classes.imageStyle} />
              </div>

            </div>


          </div>

          <div className={classes.bottomOuter}>
            <div className={classes.bottomLeft}>
              <InputField
                variant="outlined"
                type="text"
                placeholder="Type your message..."
                name='typeMessage'
                inputStyle={classes.inputTextField}
              />
            </div>

            <div className={classes.bottomRightOuter}>

              <div className={classes.attachmentOuter}>
                <GrAttachment className={classes.attachmentIcon} />
              </div>
              <div style={{ width: '60%' }}>
                <RoundButton
                  title={'Send'}
                  containerStyle={classes.roundContainer}
                />
              </div>

            </div>
          </div>

        </div>
      </Formsy>
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
)(ChatMessage);