import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Modal from "@material-ui/core/Modal/Modal";

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleOpen = () => {
    this.setState({isOpen: true});
  };

  handleClose = () => {
    this.setState({isOpen: false});
  };

  render() {
    const {classes, card} = this.props;
    return (
        <Grid item sm={6} md={4} lg={3}>
          <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={card.display_url}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h4" component="h2">
                {card.text}
              </Typography>

            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button onClick={this.handleOpen} variant="contained" color="primary">
                View
              </Button>

              <Typography gutterBottom variant="subtitle1" component="h2">
                {card.created_at}
              </Typography>
            </CardActions>
          </Card>
          <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.isOpen}
              onClose={this.handleClose}
          >
            <div style={{backgroundImage: `url(${card.display_url})`}} className={classes.cardModal}>
            </div>
          </Modal>
        </Grid>
    );
  }
}

export default PostCard;