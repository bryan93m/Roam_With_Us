import React, {useState} from 'react'



const SingleDestinationPage = ({singleDestinations, createBooking}) => {
  const [selectOption, setSelectOption] = useState(0)
  
  const { name, season, price, description, image_url, options} = singleDestinations

  const handleChange = (e) => {
    setSelectOption(e.target.value)
    console.log(selectOption)
  }

  function handleClick() {
    createBooking(singleDestinations.id, selectOption)
  }

  return (
    <>
      <img src={image_url} alt={name} />
      <h1>{name}</h1>
      <h3>{season}</h3>
      <p>{price}</p>
      <p>{description}</p>
      <select onChange={handleChange} value={selectOption}>
        <option value={0}>choose option</option>
        {options?.map(option => <option value={option.id} key={option.id}>{`${option.name}, price:(${option.price})`}</option>)}
      </select>
      <button onClick={handleClick}>Book</button>
    </>
  )
}

export default SingleDestinationPage