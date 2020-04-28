import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
// import 'materialize-css';
import { Button, Card, Row, Col, TextInput } from 'react-materialize';// import {DevTool} from 'react-hook-form-devtools'
import '../index.css'

const Auctions = () => {
  //  The feed of auctions that are on going
  const { control, register, handleSubmit, errors } = useForm()
  const onSubmit = data => { console.log(data) }
  console.log(watch("username"))  // watch input value by passing the name of it


  return (
    <>
      <h1>The Silent Auction!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Auctions</h1>
        <input
          type='string'
          name='username'
          placeholder='User Name*'
          defaultValue='Harvey'
          ref={register({ required: true, min:2 })}
        />&nbsp;
        {errors.username && <span className='error-text'>User Name is required.</span>}<br />

        <input
          type='string'
          name='password'
          placeholder='Password*'
          defaultValue=''
          ref={register({ required: true,  })}
        />&nbsp;
        {errors.password && <span className='error-text'>Password is required.</span>}<br />

        <input
          type='string'
          name='email'
          placeholder='Email Address*'
          defaultValue=''
          ref={register({ required: true })}
        />&nbsp;
        {errors.email && <span className='error-text'>Email is required.</span>}<br />
        <br />

        <input
          type="radio"
          id="bidder"
          name="role"
          value="bidder"
          ref={register}
        />
        <label htmlFor="bidder">Bidder</label>&nbsp;

      <input
          type="radio"
          id="seller"
          name="role"
          value="seller"
          checked
          ref={register}
        />
        <label htmlFor="seller">Seller</label><br /><br />
<input type ='submit' value='Submit' />
      </form>

    </>
  )
}
export default Auctions
