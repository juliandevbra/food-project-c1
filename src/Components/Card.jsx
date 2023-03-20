import React from 'react'

const Card = ({recipe}) => {
  return (
    <div>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt="" style={{width: 500, height: 250, objectFit: 'cover'}}/>
    </div>
  )
}

export default Card