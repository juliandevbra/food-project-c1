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
import UseMemo from './Clase 26/UseMemo'
import Toggle from './Clase 26/Components/Toggle'
import MenuBienvenida from './Clase 26/Components/MenuBienvenida'
import TipoPerfil from './Clase 26/Components/TipoPerfil'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './Clase 25/ErrorBoundary'

function App() {
  
  const {auth} = useRecipeStates()

  return (
    <div className="App">
      
      {/* <Toggle/> */}
      {/* <MenuBienvenida/> */}
      {/* <TipoPerfil/> */}
        <UseMemo/>
      {/* {!auth && <Navbar/>}
          <Routes>
            { auth ? 
              <Route path='/' element={<LoginForm/>}/> 
            :
            <>
              <Route path='/' element={<ErrorBoundary><Home/></ErrorBoundary>}>
                <Route path='/vegetarians' element={<Vegetarians/>}>
                  <Route path='/vegetarians/veggies' element={<Veggies/>}/>
                </Route>
                <Route path='/deserts' element={<Deserts/>}/>
              </Route>
              <Route path={routes.contact} element={<ErrorBoundary><Contact/></ErrorBoundary>}/>
              <Route path={routes.about} element={<ErrorBoundary><About/></ErrorBoundary>}/>
              <Route path={routes.menues} element={<ErrorBoundary><Menues/></ErrorBoundary>}/>
              <Route path='/recipe/:id' element={<ErrorBoundary><RecipeSelected/></ErrorBoundary>}/>
              <Route path='*' element={<NotFound/>}/>
            </>
            } 
          </Routes>
          <ToastContainer/> */}
    </div>
  )
}

export default App
