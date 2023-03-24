import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import RecipeSelected from './Components/RecipeSelected'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Deserts from './Pages/Deserts'
import Home from './Pages/Home'
import Menues from './Pages/Menues'
import NotFound from './Pages/NotFound'
import Vegetarians from './Pages/Vegetarians'
import Veggies from './Pages/Veggies'
import { routes } from './routes'

function App() {

  const [recipes, setRecipes] = useState([])
  const [recipeSel, setRecipeSel] = useState()
  const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=68d481a0fbc340308fbf934f836ee8c6'
  // console.log(recipes)
  
  useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => setRecipes(data.recipes))
  }, [])

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
            <Route path={routes.menues} element={<Menues recipes={recipes}/>}/>
            <Route path='/recipe/:id' element={<RecipeSelected recipes={recipes}/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
    </div>
  )
}

export default App
