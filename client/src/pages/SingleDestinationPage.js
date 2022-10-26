import React from 'react'



const SingleDestinationPage = ({singleDestinations}) => {

  
  const { name, season, price, description, image_url, options} = singleDestinations

 

  return (
    <>
      <img src={image_url} alt={name} />
      <h1>{name}</h1>
      <h3>{season}</h3>
      <p>{price}</p>
      <p>{description}</p>
      <select>
        {options?.map(option => <option key={option.id}>{`${option.name}, price:(${option.price})`}</option>)}
      </select>
      <button >Book</button>
    </>
  )
}

export default SingleDestinationPage