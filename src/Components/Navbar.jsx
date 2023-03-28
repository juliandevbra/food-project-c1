import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecipeStates } from '../RecipeContext'
import { routes } from '../routes'

const Navbar = () => {

  const navigate = useNavigate()
  const {setAuth} = useRecipeStates()

  const logout = () => {
    setAuth(true)
    localStorage.removeItem('token')
  }

  return (
    <div className='navbar'>
      <button onClick={() => navigate(-1)}>🔙</button>
       <Link to={routes.home}><h3>Home</h3></Link>
       <Link to={routes.about}><h3>About</h3></Link>
       <Link to={routes.contact}><h3>Contact</h3></Link>
       <Link to={routes.menues}><h3>Menues</h3></Link>
       <Link to='/vegetarians'><h3>Vegetarianos</h3></Link>
       <Link to='/deserts'><h3>Postres</h3></Link>

       <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar