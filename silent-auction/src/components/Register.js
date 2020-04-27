
import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const Register = () => {
   const [signup, setSignup] = useState({
       username: "", 
       password: "",
       email: ""
   })

   const onSubmit = () => {
       //   axios call
       //   .then( res => {what is the response})
       //   .catch()
   }
    
   const changeHandler = e => {
       setSignup({... signup, [e.target.name]: e.target.value })
   }
   
   
    return(
<div>
        <h3>Register Now!</h3>
        <form >
            <label>Create a Username: </label>
            <input 
            name = "username"
            value = "username"
            type = "text" 
            onChange = {changeHandler}
            />
            <br></br>
            <label>Create a Password: </label>
            <input 
            name = "password"
            value = "password"
            type = "text"
            onchange = {changeHandler}
            />
            <br></br>
            <label>Register with email: </label>
            <input 
            name = "email"
            vaule = "email"
            type = "text"
            onchange = {changeHandler}
            />
        </form>
</div>
    )
}
export default Register