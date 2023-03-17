import React, { useEffect, useState } from 'react'

const PokeApi = ({pokeSel}) => {

    const [poke, setPoke] = useState({})
    // const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * (800 - 1 + 1) + 1)
    
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokeSel
    
    console.log(poke)
    
    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(url)
            let data = await response.json()
            setPoke(data)
        }
        fetchData()
    }, [pokeSel])

    
  return (
    <div>
        <h3>{poke.name}</h3>
        <img src={poke.sprites?.front_default} alt="" />
    </div>
  )
}

export default PokeApi