import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Card from '../Components/Card'
import RecipeSelected from '../Components/RecipeSelected'

const Home = () => {
    const [recipes, setRecipes] = useState([])
    const [recipeSel, setRecipeSel] = useState()
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=68d481a0fbc340308fbf934f836ee8c6'
    // console.log(recipes)
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setRecipes(data.recipes))
    }, [])
   console.log(recipeSel)
  return (
    <div>
        <Outlet/> 
        {recipes.map(recipe => <Link to='/recipeSel' key={recipe.id}><Card  recipe={recipe}/></Link>)}
        
    </div>
  )
}

export default Home