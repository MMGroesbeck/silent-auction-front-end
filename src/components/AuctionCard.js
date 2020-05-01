import React, { useState, useEffect } from 'react';


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
import axios from 'axios'


//Components
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { AuctionContext } from '../contexts/AuctionContext';
import { UserContext } from '../contexts/UserContext';

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
  // name: "",
  // description: "",
  // user_id: 0,
  // image_url: "",
  // end_datetime: ''

export default function AuctionCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {name} = props.auction
  const { id } = useParams()
  const { push } = useHistory()

  console.log(props, "$$$$$")

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const saveAuction = (props,  e) => {
    axiosWithAuth()
    .post(`/api/watching/${id}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }



  const deleteBid = (props, e) => {
    e.preventDefault()
    console.log(props.id)
    axiosWithAuth()
    .delete(`api/watching/${props.id}`)
    .then(res => {
      console.log(res)
      push('/protected/dashboard')
    })
    .catch(err => {console.log("error when deleting: ",err)})
  }


      
  return (

    <Card className={classes.root}>
      <CardHeader
      action={
        <IconButton aria-label="settings">
        <CancelIcon onClick={(e) => deleteBid(props, e)}/>
      </IconButton>
      }
        title={name}
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
          <FavoriteIcon  onClick={(e) => saveAuction(props, e)}/> 
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
          )
        }}
      />
        </CardContent>
      </Collapse>
    </Card>
    );
  }
  
  
