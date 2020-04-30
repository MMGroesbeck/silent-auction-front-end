import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import './login.css'

// Test
const Login = () => {
    // 'handleSubmit' will validate your inputs before invoking 'onSubmit'
    // Default data
    const initialLogin = { name: '', password: '', email: '' }

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
        const { name, value } = e.target
        setLogin({
            ...login,
            [name]: value
        });
    };

    // create and return the form
    return (
        // Custom Login form
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* Name */}
            <label htmlFor='name'>Name: &nbsp;</label>
            <input
                type='text'
                name='name'
                id='username'
                value={login.name}
                onChange={handleChange}
                // defaultValue="test" ref={register}  // register the username input
                ref={register({ required: true })}  // include the 'required' option
            />
            {/* Display username errors */}
            <p>{errors.name && <span className="error-text">A user name is required.</span>}&nbsp;</p>

            {/* Password */}
            <label htmlFor='password'>Password: &nbsp;</label>
            <input
                type='password'
                name='password'
                id='password'
                value={login.password}
                onChange={handleChange}
                ref={register({ required: true })}
            />
            {/* Display password errors */}
            <p>{errors.password && <span className='error-text'>A password is required.</span>}&nbsp;</p>

            {/* Email address */}
            <label htmlFor='email'>Email: &nbsp;</label>
            <input
                type='text'
                name='email'
                id='email'
                value={login.email}
                onChange={handleChange}
                ref={register({ required: true })}
            />
            {/* Display email address errors */}
            <p>{errors.email && <span className='error-text'>Please provide a valid email address.</span>}&nbsp;</p>

            {/* Submit button */}<br /> <br />
            <button type='submit'>Log In</button>
        </form >
    );
}

export default Login
