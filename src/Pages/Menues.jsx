import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'

const Menues = ({recipes}) => {    

  return (
    <div>
              {recipes.map(recipe => <Link to={'/recipe/' + recipe.id} key={recipe.id}><Card recipe={recipe}/></Link>)}

    </div>
  )
}

export default Menues