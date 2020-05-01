import React from 'react'


const Card = (props) => {
  const { name, image, description } = props
  // return (
  //   <>
  //     <p>{name}</p>
  //     <img src={image} />
  //     <p>{description}</p>
  //   </>
  // )

  return (
      <div>
        <h1>{name}</h1>
        <img src={image} />
        <p>Mass: {description}</p>
      </div>
  )
}

export default Card

  // Data model
/**
 * description / String
 * end_datetime / String
 * id / Number
 * image_url / String
 * name / String
 * reserve / String
 * start_datetime / String
 * status / String
 * user_id number
 */