import React from "react";
import classNames from "classnames";
import { useHomeStyles } from "../pages/Home";

import { Avatar, Grid, Paper, Typography } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RetweetIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplySharp";

interface TweetProps {
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
  classes: ReturnType<typeof useHomeStyles>;
}

const Tweet: React.FC<TweetProps> = ({
  text,
  user,
  classes,
}: TweetProps): React.ReactElement => {
  return (
    <Paper
      className={classNames(classes.tweet, classes.tweetHeader)}
      variant="outlined"
    >
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Avatar alt={`Avatar of ${user.fullname}`} src={user.avatarUrl} />
        </Grid>
        <Grid item xs={10}>
          <Typography>
            <b>{user.username}</b>
            <span className={classes.tweetUserName}>@{user.fullname}</span>
            <span className={classes.tweetUserName}> . 1h</span>
          </Typography>
          <Typography variant="body1">{text}</Typography>
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
  );
};

export default Tweet;
