import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecipeStates } from '../RecipeContext'

const LoginForm = ({handleClick}) => {

  const {setAuth} = useRecipeStates()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let emailTest = emailRegex.test(user.email)

    if(emailTest && user.password.length > 5) {
      const id = '2b23abab-0e82-4548-ae8e-05e07a4d0599'
      localStorage.setItem('token', id)
      setAuth(false)
    } else {
      alert('Información invalida')
    }
  }

  return (
    <div>
        <h3>Tiene que ingresar</h3>
        <form onSubmit={handleSubmit}>
            <input role='input' type="email" 
              onChange={(e) => setUser({...user, email: e.target.value})}
            />
            <input data-testid='password' type="password"  
              onChange={(e) => setUser({...user, password: e.target.value})}
            />
            <button onClick={handleClick}>Enviar</button>
        </form>
    </div>
  )
}

export default LoginForm