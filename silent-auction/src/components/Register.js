// import needed functions 
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'


// axios 
import axiosWithAuth from '../utils/axiosWithAuth'


// Material-UI styles 
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));



const Register = () => {
    const [user, setUser] = useState()
    const classes = useStyles();
    const history = useHistory()
    const {register, handleSubmit, errors} = useForm()

    const [signup, setSignup] = useState({
       username: "", 
       password: "",
       email: "",
       userType: ""
   })

   const onSubmit = () => {
         axiosWithAuth()
         .post("/api/users/register")
         .then( res => {
           console.log(res)
           // localStorage.setItem("token", res.data.token)
           //  history.push("/dashboard")
           //  console.log("should be pushed")
         })
         .catch(err => {console.log("error with register post: ", err)})
   }
    
   const changeHandler = e => {
       setSignup({...signup, [e.target.name]: e.target.value })
   }
   const handleChange = (event) => {
    setUser(event.target.user);
  };

    return(
        <Container component="main" maxWidth="xs">

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  autoComplete="username"
                  ref={register({equired: true})}
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
          <RadioGroup aria-label="userType" name="userType1" value={user} onChange={handleChange}>
              <FormControlLabel value="Buyer" control={<Radio />} label="Buyer" />
              <FormControlLabel value="Seller" control={<Radio />} label="Seller" />
         </RadioGroup>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
        </Box>
      </Container>
    );
  }
export default Register
