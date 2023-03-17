import { useState } from 'react'
import './App.css'
import DogCarrousel from './Components/DogCarrousel'
import Home from './Components/Home'
import PokeApi from './Components/pokeApi'
import PokeList from './Components/PokeList'

function App() {

  return (
    <div className="App">
      {/* <Home/> */}
      {/* <DogCarrousel/> */}
      {/* <PokeApi/> */}
      <PokeList/>
    </div>
  )
}

export default App
