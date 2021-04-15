import React from 'react';
import {makeStyles, Button, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter"
import SearchIcon from "@material-ui/icons/Search"
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined"
import MessageIcon from "@material-ui/icons/ChatBubbleOutlineOutlined"


const useStyles = makeStyles((theme) => ({
    wrapper : {
        display: 'flex',
        height: 'calc(100vh - 84px)',
    },
    blueSide : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#71C9F8",
        flex: "0 0 50%",
        overflow: 'hidden',
        position: 'relative',
    },
    blueSideBigIcon : {
        position: "absolute",
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '350%',
        height: '350%',
    },
    blueSideListInfo : {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6' : {
            display: 'flex',
            alignItems: 'center',
            color: "white",
            fontWeight: 700,
            fontSize: 20,
        }
    },
    blueSideListInfoItem : {
        marginBottom: 40,
    },
    blueSideListInfoIcon : {
        fontSize: 32,
        marginRight: 15,
    },
    loginSide : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: "0 0 50%",
        overflow: 'hidden',
    },
    loginTwitterIcon : {
        fontSize: 50,
    },
    loginSideWrapper : {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 20,
    },
}))

const SignIn = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
            <TwitterIcon className={classes.blueSideBigIcon} color="primary"/>
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}> <Typography variant="h6"><SearchIcon className={classes.blueSideListInfoIcon} />Read what is interesting to you</Typography></li>
                    <li className={classes.blueSideListInfoItem}><Typography variant="h6"><PeopleAltOutlinedIcon className={classes.blueSideListInfoIcon} />Learn what is happening around the world</Typography></li>
                    <li className={classes.blueSideListInfoItem}><Typography variant="h6"><MessageIcon className={classes.blueSideListInfoIcon} />Join the community</Typography></li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon className={classes.loginTwitterIcon} color="primary"/>
                    <Typography className={classes.loginSideTitle} variant="h3">Learn what is happening around the world</Typography>
                    <Typography><b>Join the twitter today</b></Typography>
                    <br/>
                    <Button style={{marginBottom: 20}} variant="contained" color="primary" fullWidth>Register</Button>
                    <Button variant="outlined" color="primary" fullWidth>Log In</Button>
                </div>

            </section>
        </div>
    );
};

export default SignIn;