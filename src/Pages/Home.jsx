import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Card from '../Components/Card'
import RecipeSelected from './RecipeSelected'

const Home = () => {

  return (
    <div>
        <h1>Bienvenidos a las recetas DH</h1>
        <Outlet/>
    </div>
  )
}

export default Home