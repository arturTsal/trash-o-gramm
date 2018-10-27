import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import PostCardsList from "../PostCardsList/PostCardsList";
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    textAlign: 'center',
    wordBreak: 'break-all',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  preLoader: {
    display: 'grid',
    margin: '200px auto',
  },
  cardModal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: theme.spacing.unit * 70,
    height: theme.spacing.unit * 100,
    boxShadow: theme.shadows[5],
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  closeModalBtn: {
    position: 'absolute',
    top: '5px',
    right: '5px',
  },
  trashLink: {
    fontWeight: 700,
    fontSize: '1.5em',
    display: 'grid',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

class Album extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      cards: [],
      creds: {
        username: '',
        link: '',
      },
    }
  }

  componentDidMount = () => {
    axios.get('https://ztracker-be.herokuapp.com/public/index.php')
      .then(response => {
        this.setState({
          cards: response.data['posts'],
          creds: response.data['creds'],
        })
      });
  };

  render = () => {
    const {classes} = this.props;
    const {cards, creds} = this.state;
    return (
        <React.Fragment>
          <CssBaseline/>
          <Header/>
          {
            this.state.cards.length > 0
                ? <PostCardsList postCards={cards} creds={creds} classes={classes}/>
                : <CircularProgress size={100} className={classes.preLoader}>
                  </CircularProgress>
          }

          <Footer className={classes.footer}/>
        </React.Fragment>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
