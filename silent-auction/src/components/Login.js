import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import './login.css'

// Test
const Login = () => {
    // 'handleSubmit' will validate your inputs before invoking 'onSubmit'
    // Default data
    const initialLogin = { username: '', password: '', email: '' }

    const [login, setLogin] = useState(initialLogin)
    const { register, handleSubmit, errors } = useForm()

    // handle form submissions
    const onSubmit = (data, e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/users/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected');
            })
            .catch(err => console.log(err))
    }

    // handle changes in data on the form
    const handleChange = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

    // create and return the form
    return (
        // Custom Login form
        <form onSubmit={handleSubmit(onSubmit)}>
            <p id='heading'>Login as Bidder or Seller</p>
            {/* Bidder option */}
            <input type="radio" id="buyer" name="client" value="buyer" />
            <label htmlFor="buyer">Bidder</label>&nbsp;&nbsp;

            {/* Seller option */}
            <input type="radio" id="seller" name="client" value="seller" />
            <label htmlFor="seller">Seller</label>

            {/* Username */}<br /><br />
            <span className='input-field'>
            <label htmlFor='username'>User Name: &nbsp;</label>
            <input
                type='text'
                name='username'
                id='username'
                value={login.username}
                onChange={handleChange}
                // defaultValue="test" ref={register}  // register the username input
                ref={register({ required: true })}  // include the 'required' option
            />
            </span>
            {/* Display username errors */}<br />
            {errors.username && <p className="error-text">A user name is required.</p>}

            {/* Password */}<br />
            <span className='input-field'>
            <label htmlFor='password'>Password: &nbsp;</label>
            <input
                type='password'
                name='password'
                id='password'
                value={login.password}
                onChange={handleChange}
                ref={register({ required: true })}
            />
            </span>
            {/* Display password errors */}<br />
            {errors.password && <p className='error-text'>A password is required.</p>}

            {/* Email address */}<br />
            <span className='input-field'>
            <label htmlFor='email'>Email: &nbsp;</label>
            <input
                type='text'
                name='email'
                id='email'
                ref={register({ required: true })}
            /> 
            </span>
            {/* Display email address errors */}<br />
            {errors.email && <p className='error-text'>Please provide a valid email address.</p>}

            {/* Submit button */}<br /> <br />
            <button type='submit'>Log In</button>
        </form >
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

