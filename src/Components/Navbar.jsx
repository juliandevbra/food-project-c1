import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../routes'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className='navbar'>
      <button onClick={() => navigate(-1)}>🔙</button>
       <Link to={routes.home}><h3>Home</h3></Link>
       <Link to={routes.about}><h3>About</h3></Link>
       <Link to={routes.contact}><h3>Contact</h3></Link>
       <Link to={routes.menues}><h3>Menues</h3></Link>
       <Link to='/vegetarians'><h3>Vegetarianos</h3></Link>
       <Link to='/deserts'><h3>Postres</h3></Link>
    </div>
  )
}

export default Navbar