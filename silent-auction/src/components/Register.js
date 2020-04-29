
import React, { useState } from 'react'


import axiosWithAuth from '../utils/axiosWithAuth'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));




const Register = () => {
   const [signup, setSignup] = useState({
       username: "", 
       password: "",
       email: ""
   })

   const authOption = () => [
        {key: 1, text: 'Login', value: 1},
        {key: 2, text: 'Sign-up', value: 2}
   ]

   const onSubmit = () => {
       //   axios call
       //   .then( res => {what is the response})
       //   .catch()
   }
    
   const changeHandler = e => {
       setSignup({...signup, [e.target.name]: e.target.value })
   }

   

   
    return(
<>
        <h3>Register Now!</h3>
        <form >
            <div>
            <TextField 
            style={{ margin: 8 }}
            fullWidth 

            variant = "outlined"
            name = "username"
            type = "text" 
            placeholder = "username"
            onChange = {changeHandler}
            />
          </div>
            <div>
            <TextField 
            variant = "outlined"
            name = "password"
            type = "text"
            placeholder = "password"
            onchange = {changeHandler}
            />
          </div>
            <div>
            <TextField
            variant = "outlined"
            name = "email"
            vaule = "email"
            type = "text"
            placeholder = "email"
            onchange = {changeHandler}
            />
            </div>

            <Button> Buyer </Button> or  <Button> Seller </Button>
        </form>
</>
    )
}
export default Register