import React, { useEffect, useState } from 'react'
import PokeApi from './pokeApi'

const PokeList = () => {
    const [pokeList, setPokeList] = useState([])
    const [page, setPage] = useState(0)
    const [pokeSel, setPokeSel] = useState()
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=' + page

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setPokeList(data.results))
    }, [page])

  return (
    <div >
        {pokeSel && <PokeApi pokeSel={pokeSel}/>}
        <button onClick={() => setPage(page + 20)}>Ver siguientes pokemones</button>
        {pokeList.map(poke => (
            <div key={poke.url}>
                <h3 onClick={() => setPokeSel(poke.name)}>{poke.name}</h3> 
            </div>
        ))}
    </div>
  )
}

export default PokeList