import React from 'react';


//Styles
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite'
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import CancelIcon from '@material-ui/icons/Cancel';


//Axios
import { axiosWithAuth } from '../utils/axiosWithAuth';


//Components
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { id } = useParams()


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deleteBid = () => {
    axiosWithAuth()
    .delete(`/api/watching/${id}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {console.log("error when deleting: ",err)})
  }

  const saveBid = () => {
    
  }



  return (
    <Card className={classes.root}>
      <CardHeader
      action={
        <IconButton aria-label="settings">
        <CancelIcon />
      </IconButton>
      }
        title="{Auction Item}"
        subheader="{Auction Length}"
      />
      <CardMedia
        className={classes.media}
        image=""
        title=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
     this should be a very short description about the auction item and maybe the 
     organization as well
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>bids must be greater than the exiting bid</Typography>
          <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Amount"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon />
            </InputAdornment>
          ),
        }}
      />
        </CardContent>
      </Collapse>
    </Card>
  );
}
