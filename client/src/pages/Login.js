import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'




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
    fetch(`/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          updateUser(user)
          navigate('/')
        })
      } else {
        res.json().then(res => {
          alert(res.message)
        })
      }
    })
  }

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