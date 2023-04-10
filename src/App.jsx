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
import LoginForm from './Components/LoginForm'
import { useRecipeStates } from './RecipeContext'
import Counter from './Clase 21/Counter'
import UserList from './Clase 21/UserList'
import UseMemo from './Clase 25/UseMemo'
import { ToastContainer } from 'react-toastify'

function App() {
  
  const {auth} = useRecipeStates()

  return (
    <div className="App">
      <ToastContainer/>
        {/* <UseMemo/> */}
      {!auth && <Navbar/>}
          <Routes>
            { auth ? 
              <Route path='/' element={<LoginForm/>}/> 
            :
            <>
              <Route path='/' element={<Home/>}>
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
            </>
            } 
          </Routes>
    </div>
  )
}

export default App
