import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
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
    axios.post('/api/users', user)
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
    <Container style={{ width: '18rem', justifyContent: 'center' }}>
      <h1 className='Ltext'>Register</h1>
      <form onSubmit={handleSubmit}>
        <input className='Register' type='text' name='name' value={name} onChange={handleChange} placeholder='name' />
        <input className='Register'type='text' name='email' value={email} onChange={handleChange} placeholder='email'/>
        <input className='Register'type='password' name='password' value={password} onChange={handleChange} placeholder='password'/>
        <button type='submit' className='Registerbtn'>Register</button>
      </form>
    </Container>
    </>
  )
}

export default Register