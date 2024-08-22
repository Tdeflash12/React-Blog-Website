import React from 'react'
import Form from './Components/form/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
 const Navigate = useNavigate()
  const handleRegister = async (data)=>{
try {
  const response =await axios.post("https://react30.onrender.com/api/user/register",data)

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