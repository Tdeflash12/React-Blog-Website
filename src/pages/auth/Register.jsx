import React from 'react'
import Form from './Components/form/Form'
import axios from 'axios'
import { baseUrl } from '../../config'
import { useNavigate } from 'react-router-dom'
const Register = () => {
 
 const Navigate = useNavigate()
  const handleRegister = async (data)=>{
try {
  const response =await axios.post(`${baseUrl}/register`,data)

  if(response.status === 201){
    Navigate('/login')
  }
  else{
    alert("Registration field")
  }
} catch (error) {
  alert(error?.response?.data?.message)
}
  }
  return (
   <Form  type ='Register' onSubmit={handleRegister}/>
  
  )
}

export default Register