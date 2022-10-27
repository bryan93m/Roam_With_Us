import React from 'react'
import { Link } from 'react-router-dom'


const Homepage = () => {
  return (
    <div className='homePage'>
      <h1 className='Roam'>Roam With Us</h1>
      <Link to="/destinations" className='linkContainer'>
        <h3 className='Link'>Desitinations</h3>
      </Link>
    </div>
  )
}

export default Homepage
