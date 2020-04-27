
import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const register = () => {
   const [ signup, setSignup] = useState({
       username: " ", 
       password: ""
   })

   const onSubmit = () => {
       //   axios call
       //   .then( res => {what is the response})
       //   .catch()
   }
    
   const changeHandler = e => {
       setSignup({... signup, })
   }
   
   
    return
}