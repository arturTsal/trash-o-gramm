import React from 'react';
import PostCard from "../PostCard/PostCard";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button";

function PostCardsList({postCards, classes, creds}) {
  return (
      <React.Fragment>
        <Button className={classes.trashLink} href={creds.link} target='_blank'>
          @{creds.username}
        </Button>
        <Grid container spacing={40} className={classNames(classes.layout, classes.cardGrid)}>
          {postCards.map(card => (
              <PostCard classes={classes} key={card.id} card={card}/>
          ))}
        </Grid>
      </React.Fragment>
  );
}

export default PostCardsList;
