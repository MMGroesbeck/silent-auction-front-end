import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {

    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* // 'handleSubmit' will validate your inputs before invoking 'onSubmit' */}

            <p>Login as Buyer or Seller</p>
            <input type="radio" id="buyer" name="client" value="buyer" />
            <label htmlFor="buyer">Buyer</label>&nbsp;

            <input type="radio" id="seller" name="client" value="seller" />
            <label htmlFor="seller">Seller</label><br /><br />

            <label htmlFor='username'>User Name: &nbsp;</label>
            {/* Insert form validation for username control */}
            <input
                type='text'
                name='username'
                id='username'
                // defaultValue="test" ref={register}  // register the username input
                ref={register({ required: true })}  // include the 'required' option
            />
            <br />
            {errors.username && <span>This field is required</span>}<br />

            <label htmlFor='password'>Password: &nbsp;</label>
            <input 
            type='password' 
            name='password' 
            id='password' 
            ref={register({ required: true })}
            />
            {errors.password && <span>A password is required.</span>}<br />
             <br />

            <label htmlFor='email'>Email: &nbsp;</label>
            <input 
            type='text' 
            name='email' 
            id='email' 
            ref={register({ required: true })}
            />
            {errors.email && <span>Please provide a valid email address.</span>}<br />
            <br /> <br />

            <button type='submit'>Log In</button>
        </form>
    );
}

export default Login



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

