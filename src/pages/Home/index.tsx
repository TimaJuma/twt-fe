import React from "react";

import AddTweetForm from "../../components/AddTweetForm";
import SearchTextField from "../../components/SearchTextField";
import SideMenu from "../../components/SideMenu";
import Tweet from "../../components/Tweet";

import { useHomeStyles } from "../theme";

import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import { PersonPinCircleOutlined } from "@material-ui/icons";

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
              <div className={classes.addForm}>
                <AddTweetForm classes={classes} maxRows={15} />
              </div>
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
