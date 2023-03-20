import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import RecipeSelected from './Components/RecipeSelected'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Menues from './Pages/Menues'
import NotFound from './Pages/NotFound'
import { routes } from './routes'

function App() {

  return (
    <div className="App">
      <Navbar/>
        <h1>Bienvenidos a las recetas DH</h1>
          <Routes>
            <Route path={routes.home} element={<Home/>}>
              <Route path='/recipeSel' element={<RecipeSelected/>}/>
            </Route>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.about} element={<About/>}/>
            <Route path={routes.menues} element={<Menues/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
    </div>
  )
}

export default App
