import React from "react";
import classNames from "classnames";
import { useHomeStyles } from "../pages/theme";

import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";

// import { TagsState } from "../store/ducks/tags/contracts/state";
// import { useSelector } from "react-redux";
// import {
//   selectTagsItems,
//   selectIsTagsLoaded,
// } from "../store/ducks/tags/selectors";
import { TagsAPI } from "../services/api/tagsApi";
import { Link } from "react-router-dom";

interface TagsProps {
  classes: ReturnType<typeof useHomeStyles>;
  //   items: TagsState["items"];
}

const Tags: React.FC<TagsProps> = ({
  classes,
}: TagsProps): React.ReactElement | null => {
  const items = TagsAPI.fetchTags();
  console.log({ items });
  // const items = useSelector(selectTagsItems);
  // const isLoaded = useSelector(selectIsTagsLoaded);

  // console.log("TAGS renderEDDD", items, isLoaded);

  //   if (!isLoaded) {
  //     return null;
  //   }

  return (
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
        {/* {items.map((item) => (
          <ListItem key={item._id} className={classes.rightSideBlockItem}>
            <Link to={`/home/search?=${item.name}`}>
              <ListItemText
                primary={item.name}
                secondary={
                  <Typography component="span" variant="body2">
                    Tweets: {item.count}
                  </Typography>
                }
              />
            </Link>
          </ListItem>
        ))} */}
      </List>
    </Paper>
  );
};

export default Tags;
