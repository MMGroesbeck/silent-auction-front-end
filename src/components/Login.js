import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

import './login.css'


const initialLogin = {
    name: '',
    password: '',
    email: ''
}

// Error prompts for each login field
const prompt = {
    name:'A user name of 5 or more characters is required.',
    email:'Please provide a valid email address.',
    password:'A password of 10 or more characters is required.'
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
                user.setCurrentUser(res.data.user)
                localStorage.setItem('token', res.data.token);
                push('/protected/dashboard');
            })
            .catch(err => console.log(err))
    }

    const handleChange = e => {
        const { name, value } = e.target
        setLogin({
            ...login,
            [name]: value
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* 'handleSubmit' will validate your inputs before invoking 'onSubmit' */}

            <p id='heading'>Login</p>

            {/* Username */}
            <label htmlFor='name'>User Name: &nbsp;</label>
            <input
                type='text'
                name='name'
                id='name'
                value={login.name}
                onChange={handleChange}
                ref={register({ required: true, minLength: 5 })} // Name must be at least 5 chars
            />
            {/* Display username errors */}
            <p>{errors.name && <span className="error-text">{prompt.name}</span>}&nbsp;</p>

            {/* Email address */}
            <label htmlFor='email'>Email: &nbsp;</label>
            <input
                type='text'
                name='email'
                id='email'
                ref={register({ required: true })}
            />
            {/* Display email address errors */}
            <p>{errors.email && <span className='error-text'>{prompt.email}</span>}&nbsp;</p>

            {/* Password */}
            <label htmlFor='password'>Password: &nbsp;</label>
            <input
                type='password'
                name='password'
                id='password'
                value={login.password}
                onChange={handleChange}
                ref={register({ required: true, minLength: 10 })} // Password requires 10+ chars
            />
            {/* Display password errors */}
            <p>{errors.password && <span className='error-text'>{prompt.password}</span>}&nbsp;</p>

            {/* Submit button */}
            <button type='submit'>LOG IN</button>
        </form>
    );
}

export default Login
