import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'




const Login = ({updateUser}) => {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData

  function onSubmit(e){
    e.preventDefault()
    const user = {
      email,
      password
    }
    axios.post('/login', user)
    .then(res => {
      console.log(res.data)
      updateUser(res.data)
      navigate('/')
    }
    )}

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

 
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input type='text' name='email' value={email} onChange={handleChange} />

        <label>Password</label>
        <input type='password' name='password' value={password} onChange={handleChange} />

        <button type='submit'>Login</button>     
      </form>
    </>
  )
}

export default Login