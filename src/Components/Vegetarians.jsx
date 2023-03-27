import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Vegetarians = () => {
  return (
    <div>
        <h3> Las recetas mas saludables!</h3>
        <Link to='/vegetarians/veggies'>Veggies</Link>
        <Outlet/>
    </div>
  )
}

export default Vegetarians