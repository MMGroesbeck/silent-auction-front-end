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

const Login = () => {

    return (
        <form >
            <p>Login as Buyer or Seller</p>
            <input type="radio" id="buyer" name="client" value="buyer" />
            <label for="buyer">Buyer</label>&nbsp;

             <input type="radio" id="seller" name="client" value="seller" />
             <label for="seller">Seller</label><br /><br />

             <label htmlFor='username'>Username: &nbsp;</label>
             <input type='text' name='username' id='username' value='' /><br />

             <label htmlFor='password'>Password: &nbsp;</label>
             <input type='password' name='' id='password' value='' /><br />

             <label htmlFor='email'>Email: &nbsp;</label>
             <input type='text' name='email' id='email' value='' /><br /> <br />

             <button>Log In</button>
        </form>
    );
}

export default Login