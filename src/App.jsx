import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import RecipeSelected from './Pages/RecipeSelected'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Deserts from './Components/Deserts'
import Home from './Pages/Home'
import Menues from './Pages/Menues'
import NotFound from './Pages/NotFound'
import Vegetarians from './Components/Vegetarians'
import Veggies from './Components/Veggies'
import { routes } from './routes'

function App() {

  return (
    <div className="App">
      <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>}>
              <Route path='/vegetarians' element={<Vegetarians/>}>
                <Route path='/vegetarians/veggies' element={<Veggies/>}/>
              </Route>
              <Route path='/deserts' element={<Deserts/>}/>
            </Route>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.about} element={<About/>}/>
            <Route path={routes.menues} element={<Menues/>}/>
            <Route path='/recipe/:id' element={<RecipeSelected />}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
    </div>
  )
}

export default App
