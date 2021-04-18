import React from "react";
import { Grid, Paper, Hidden, Typography } from "@material-ui/core";
import { List, ListItem, ListItemIcon } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsOutlined";
import MessageIcon from "@material-ui/icons/Message";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListOutlined";
import UserIcon from "@material-ui/icons/PermIdentityOutlined";

const Home = () => {
  return (
    <section>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <ul>
            <li>
              <IconButton color="primary" aria-label="delete">
                <TwitterIcon color="primary" />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary" aria-label="delete">
                <SearchIcon color="primary" />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary" aria-label="delete">
                <NotificationIcon color="primary" />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary" aria-label="delete">
                <MessageIcon color="primary" />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary" aria-label="delete">
                <BookmarkIcon color="primary" />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary" aria-label="delete">
                <ListIcon color="primary" />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary" aria-label="delete">
                <UserIcon color="primary" />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary" aria-label="delete">
                <UserIcon color="primary" />
              </IconButton>
            </li>
          </ul>
          <List dense={true}>
            <ListItem component={IconButton}>
              <TwitterIcon color="primary" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={7}>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>xs</Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Home;
