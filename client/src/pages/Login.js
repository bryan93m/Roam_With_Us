import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container';




const Login = ({updateUser, getBookings}) => {
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
    axios.post('/api/login', user)
    .then(res => {
      console.log(res.data)
      updateUser(res.data)
      navigate('/Homepage')
    }
    )}

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  return (
    <>
    <Container style={{ width: '18rem', justifyContent: 'center' }}>
      <h1 className='Ltext'>Login</h1>
      <form onSubmit={onSubmit} >
        <input type='text' name='email' value={email} onChange={handleChange} placeholder='Email' style={{marginTop:'5rem', width:'15rem', borderRadius:'3px'}}/>
        <input type='password' placeholder='password' name='password' value={password} onChange={handleChange} style={{marginTop:'5rem', width:'15rem', borderRadius:'3px'}}/>
        <button type='submit' className='Login'>Login</button>
        <p>OR</p>
        <Link to='/register'>
          <button className='Login'>Register</button>
        </Link>
      </form>
      
    </Container>
    </>
  )
}

export default Login