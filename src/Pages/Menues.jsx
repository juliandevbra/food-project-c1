import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import { useRecipeStates } from '../RecipeContext'

const Menues = () => {    
  const {recipes} = useRecipeStates()
  return (
    <div>
              {recipes.map(recipe => <Link to={'/recipe/' + recipe.id} key={recipe.id}><Card recipe={recipe}/></Link>)}

    </div>
  )
}

export default Menues