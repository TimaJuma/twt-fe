import AddTweetForm from "../../components/AddTweetForm";
import SideMenu from "../../components/SideMenu";
import Tweet from "../../components/Tweet";

import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  withStyles,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RetweetIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplySharp";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/EmojiEmotions";
import SearchIcon from "@material-ui/icons/SearchOutlined";

import { colors, makeStyles, Theme } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import React from "react";
import { PersonPinCircleOutlined } from "@material-ui/icons";

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: "100vh",
  },
  logoIcon: {
    fontSize: 36,
    margin: "15px",
  },
  sideMenuList: {
    listStyle: "none",
    padding: 0,
  },
  sideMenuListItem: {
    "& a": {
      color: "inherit",
      textDecoration: "none",
    },
    cursor: "pointer",
    "&:hover": {
      "& div": {
        backgroundColor: "rgba(29, 161, 242, 0.1)",
        "& h6": {
          color: theme.palette.primary.main,
        },
        "& svg path": {
          fill: theme.palette.primary.main,
        },
      },
    },

    "& div": {
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
      padding: "0 25px 0 20px",
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: "background-color 0.1s ease-in-out",
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 18,
    marginLeft: 20,
  },
  sideMenuListItemIcon: {
    fontSize: 27,
  },
  rightSide: {
    paddingTop: 20,
    position: "sticky",
    top: 0,
  },
  rightSideBlock: {
    backgroundColor: "#F5F8FA",
    borderRadius: 15,
    marginTop: 20,
    "& .MuiList-root": {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: "transparent",
    padding: "13px 18px",
    "& b": {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: "pointer",
    "& .MuiTypography-body1": {
      fontWeight: 700,
    },
    "& .MuiListItemAvatar-root": {
      minWidth: 50,
    },
    "& .MuiListItemText-root": {
      margin: 0,
    },
    "&:hover": {
      backgroundColor: "#edf3f6",
    },
    "& a": {
      color: "inherit",
      textDecoration: "none",
    },
  },
  tweet: {
    cursor: "pointer",
    paddingTop: 10,

    "&:hover": {
      backgroundColor: "rgb(245, 248, 250)",
    },
  },
  tweetAvatar: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    marginRight: 15,
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: "100%",
  },
  tweetHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: "10px 15px",
    "& h6": {
      fontWeight: 800,
    },
  },
  tweetFooter: {
    display: "flex",
    justifyContent: "space-between",
    width: "450",
  },
  tweetUserName: {
    color: grey[500],
  },
  tweetIcons: {
    fontSize: 22,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2),
  },
  addForm: {
    padding: 20,
  },
  addFormBody: {
    display: "flex",
    width: "100%",
  },
  addFormBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addFormBottomActions: {
    marginTop: 10,
    paddingLeft: 70,
  },
  addFormTextarea: {
    width: "100%",
    border: 0,
    fontSize: 20,
    outline: "none",
    fontFamily: "inherit",
    resize: "none",
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: "#E6ECF0",
  },
  addFormCircleProgress: {
    position: "relative",
    width: 20,
    height: 20,
    margin: "0 10px",
    "& .MuiCircularProgress-root": {
      position: "absolute",
    },
  },
  addFormBottomRight: {
    display: "flex",
    alignItems: "center",
  },
  sideProfile: {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    bottom: 30,
    padding: "10px 15px",
    width: 260,
    borderRadius: 50,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: colors.lightBlue[50],
    },
  },
  sideProfileInfo: {
    flex: 1,
    marginLeft: 10,
    "& b": {
      fontSize: 16,
    },
  },
  imagesList: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    flexWrap: "wrap",
  },
  imagesListItem: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginBottom: 10,
    position: "relative",
    "& img": {
      width: "100%",
      height: "100%",
      "object-fit": "cover",
      borderRadius: 6,
    },
    "& svg path": {
      fill: "white",
    },
  },
  profileMenu: {
    top: "auto !important",
    left: "17.5% !important",
    width: "250px !important",
    bottom: "110px !important",
    "box-shadow": "1px 1px 10px rgba(0, 0, 0, 0.08)",
    "border-radius": "20px",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    "& a": {
      color: "black",
      textDecoration: "none",
    },
  },
  imagesListItemRemove: {
    position: "absolute",
    top: -8,
    right: -6,
    padding: "0 !important",
    backgroundColor: "#ff4d4d !important",
  },
}));

const SearchTextField = withStyles((theme: Theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 30,
      backgroundColor: "#E6ECF0",
      padding: 0,
      paddingLeft: 15,
      "& .Mui-focused": {
        backgroundColor: "#fff",
        "& fieldset": {
          borderWidth: 1,
          borderColor: theme.palette.primary.main,
        },
        "& svg path": { fill: theme.palette.primary.main },
      },
    },
    "&:hover": {
      "& fieldset": { borderColor: "transparent" },
    },
    "& fieldset": { borderColor: "transparent", borderWidth: 1 },
    "& .MuiOutlinedInput-input": {
      padding: "12px 14px 14px 5px",
    },
  },
}))(TextField);

const Home = (): React.ReactElement => {
  const classes = useHomeStyles();

  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetHeader} variant="outlined">
              <Typography variant="h6">Main Page</Typography>
            </Paper>
            <Paper>
              <AddTweetForm classes={classes} />
              <div className={classes.addFormBottomLine} />
            </Paper>

            {[
              ...new Array(20).fill(
                <Tweet
                  text="This is another tweet. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus dignissimos nostrum distinctio obcaecati
                  consequuntur quibusdam cumque aut at hic sed vitae
                  molestiae, nesciunt qui tempora voluptates autem impedit rem
                  quo?"
                  user={{
                    fullname: "John",
                    username: "GafiraZhur",
                    avatarUrl:
                      "https://luxurylaunches.com/wp-content/uploads/2019/09/Businessman-fashion.jpeg",
                  }}
                  classes={classes}
                />
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <div className={classes.rightSide}>
            <SearchTextField
              fullWidth
              placeholder="Search in tweets"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader}>
                <b>Trending topics</b>
              </Paper>
              <List>
                <ListItem>
                  <ListItemText
                    primary="New York"
                    secondary={
                      <Typography component="span" variant="body2">
                        Tweets: 1444
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText
                    primary="Covid-19"
                    secondary={
                      <Typography component="span" variant="body2">
                        Tweets: 23 345
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText
                    primary="SUPER LEAGUE"
                    secondary={
                      <Typography component="span" variant="body2">
                        Tweets: 147 568
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
            <Paper className={classes.rightSideBlock}>
              <Paper
                className={classes.rightSideBlockHeader}
                variant="outlined"
              >
                <b>Who to follow</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://luxurylaunches.com/wp-content/uploads/2019/09/Businessman-fashion.jpeg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dock of Shame"
                    secondary={
                      <Typography component="span" variant="body2">
                        @FavDocks
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonPinCircleOutlined />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
