import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'
import UserContext from '../contexts/UserContext'

const initialLogin = {
    username: '',
    password: ''
}

// Test
const Login = () => {
    const [login, setLogin] = useState(initialLogin)
    const { register, handleSubmit, errors } = useForm()
    const { push } = useHistory();
    const user = useContext(UserContext)

    const onSubmit = (data, e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/users/login', data)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token);
                push('/protected/seller');
            })
            .catch(err => console.log(err))
    }

    const handleChange = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };


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
                value={login.username}
                onChange={handleChange}
                // defaultValue="test" ref={register}  // register the username input
                ref={register({ required: true })}  // include the 'required' option
            />
            <br />


            <label htmlFor='email'>Email: &nbsp;</label>
            <input
                type='text'
                name='email'
                id='email'
                ref={register({ required: true })}
            /> 
            {errors.email && <span>Please provide a valid email address.</span>}<br />

            {errors.username && <span>A user name is required.</span>}<br />

            <label htmlFor='password'>Password: &nbsp;</label>
            <input
                type='password'
                name='password'
                id='password'
                value={login.password}
                onChange={handleChange}
                ref={register({ required: true })}
            /> <br />

            {errors.password && <span>A password is required.</span>}<br />
            <br />

            <button type='submit'>Log In</button>
        </form>
    );
}

export default Login
