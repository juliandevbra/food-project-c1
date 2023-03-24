import React from 'react'
import { useParams } from 'react-router-dom'

const RecipeSelected = ({recipes}) => {

  const params = useParams()
  console.log(recipes)

  const recipeSel = recipes.find((recipe) => params.id == recipe.id)
  console.log(recipeSel)
  return (
    <div>
        <h1>Receta seleccionada: </h1>
        <h3>{recipeSel.title}</h3>
        <img src={recipeSel.image} alt="" style={{width: 500, height: 250, objectFit: 'cover'}}/>
        <h4>{recipeSel.instructions}</h4>
    </div>
  )
}

export default RecipeSelected