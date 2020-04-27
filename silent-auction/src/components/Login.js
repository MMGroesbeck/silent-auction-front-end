// LOGIN PAGE

// { USEFORM } FROM 'REACT-HOOK-FORM'? (FAST + EASY VALIDATION!)

// <FORM>
    // LOGIN AS BUYER OR SELLER
    // USERNAME 
    // PASSWORD
    //EMAIL
    // 'LOG IN' BUTTON
// </FORM>

// EXAMPLE OF VALIDATION WITH USEFORM: 
// {errors.username && errors.username.type === "minLength" && (
//    <p> This field requires a minimum length of 3 characters. </p> 
// )}

// EXAMPLE OF VALIDATION WITH USEFORM: 
// {errors.username && errors.username.type === "required" && (
//    <p> This field requires a minimum length of 3 characters. </p> 
// )}

import React from 'react'

const login = () => {

    return
    <form>
        // LOGIN AS BUYER OR SELLER
        <label>Username: &nbsp;</label>
        <label>Password: &nbsp;</label>
        <label>Email: &nbsp;</label>
        <button>Log In</button>
    </form>
}
export default Login