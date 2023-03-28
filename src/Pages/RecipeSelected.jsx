import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStates } from '../RecipeContext'

const RecipeSelected = () => {

  const params = useParams()
  // const {recipes} = useRecipeStates()
  const [recipeSel, setRecipeSel] = useState({})
  const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=68d481a0fbc340308fbf934f836ee8c6`
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setRecipeSel(data))
  }, [params.id])
  let recipes = JSON.parse(localStorage.getItem('Recetas'))
  const addRecipe = () => {
    let arrRecipes = [...recipes, recipeSel]
    localStorage.setItem('Recetas', JSON.stringify(arrRecipes))
  }
  console.log(recipes)
  return (
    <div>
        <h1>Receta seleccionada: </h1>
        <h3>{recipeSel.title}</h3>
        <img src={recipeSel.image} alt="" style={{width: 500, height: 250, objectFit: 'cover'}}/>
        <h4>{recipeSel.instructions}</h4>
        <button onClick={addRecipe}>Agregar receta</button>
    </div>
  )
}

export default RecipeSelected