import React from 'react'
// import localTime from './LocalFromUTC'
import './login.css'

// ********** Convert UTC date/time to local date / time *************
const options = {
  timeZone: "America/New_York",
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric'
};

const formatter = new Intl.DateTimeFormat([], options);
/**
 * Place the UTCtime in the formatter to convert it to local time
 * Example: const localTime = formatter.format(new Date(UTCtime))
 * Convert UTC date/time to local date / time
 */

const Card = (props) => {
  // Get all of the field names passed into props
  const
  {
    description,
    end_datetime,
    id,
    image_url,
    name,
    reserve,
    start_datetime,
    status,
    user_id
  } = { ...props.props }
  
  return (
    <div className="card">
      <img src={image_url} alt=''/><br />
      <main>
        <section className='name-id'>
          <span>Name: {name}</span><br />
          <span>ID: {id}</span><br />
        </section>
        <span><b>Description: {description}</b></span><br />
        <span>Start date: {formatter.format(new Date(start_datetime))}</span><br />
        <span>Reserve: {reserve}</span><br />
        <span>End date: {formatter.format(new Date(end_datetime))}</span><br />
        <span>Status: {status}</span><br />
        <span>User ID: {user_id}</span><br />
      </main>
    </div>
  )
}

export default Card
