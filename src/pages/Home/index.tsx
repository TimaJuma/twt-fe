import Tweet from "../../components/Tweet";
import SideMenu from "../../components/SideMenu";

import classNames from "classnames";
import {
  Avatar,
  Container,
  Grid,
  Paper,
  Typography,
  withStyles,
  createStyles,
  InputBase,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RetweetIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplySharp";

import { colors, makeStyles, Theme } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

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
  tweet: {
    cursor: "pointer",
    paddingTop: 10,

    "&:hover": {
      backgroundColor: "rgb(245, 248, 250)",
    },
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
}));

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: "#71C9F8",
    },
  })
)(InputBase);

const Home = () => {
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
            <Tweet
              text="This is another tweet"
              user={{
                fullname: "John",
                username: "GafiraZhur",
                avatarUrl:
                  "https://luxurylaunches.com/wp-content/uploads/2019/09/Businessman-fashion.jpeg",
              }}
              classes={classes}
            />
            {}
            <Paper
              className={classNames(classes.tweet, classes.tweetHeader)}
              variant="outlined"
            >
              <Grid container spacing={3}>
                <Grid item xs={2}>
                  <Avatar
                    alt="User Avatar"
                    src="data:image/jpeg;base64,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"
                  />
                </Grid>
                <Grid item xs={10}>
                  <Typography>
                    <b>Main Page</b>
                    <span className={classes.tweetUserName}>@someone</span>
                  </Typography>
                  <Typography variant="body1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus dignissimos nostrum distinctio obcaecati
                    consequuntur quibusdam cumque aut at hic sed vitae
                    molestiae, nesciunt qui tempora voluptates autem impedit rem
                    quo?
                  </Typography>
                  <div className={classes.tweetFooter}>
                    <div>
                      <IconButton>
                        <CommentIcon className={classes.tweetIcons} />
                      </IconButton>
                      <span>1</span>
                    </div>
                    <div>
                      <IconButton>
                        <RetweetIcon className={classes.tweetIcons} />
                      </IconButton>
                    </div>
                    <div>
                      <IconButton>
                        <LikeIcon className={classes.tweetIcons} />
                      </IconButton>
                    </div>
                    <div>
                      <IconButton>
                        <ShareIcon className={classes.tweetIcons} />
                      </IconButton>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField fullWidth placeholder="Search in tweets" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
