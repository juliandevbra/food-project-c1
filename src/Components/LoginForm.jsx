import React from 'react'

const LoginForm = ({handleClick}) => {
  return (
    <div>
        <h3>Tiene que ingresar</h3>
        <form>
            <input role='input' type="email" />
            <input data-testid='password' type="password" />
            <button onClick={handleClick}>Enviar</button>
        </form>
    </div>
  )
}

export default LoginForm