import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const {name, email, password} = formData

  function handleSubmit(e){
    e.preventDefault()
    const user = {
      name,
      email,
      password
    }
    axios.post('/users', user)
    .then(res => {
      navigate('/')
    })
  }


  function handleChange(e){
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }







  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type='text' name='name' value={name} onChange={handleChange} />
        <label htmlFor="email">Email:</label>
        <input type='text' name='email' value={email} onChange={handleChange} />
        <label htmlFor="password">Password:</label>
        <input type='password' name='password' value={password} onChange={handleChange} />
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default Register