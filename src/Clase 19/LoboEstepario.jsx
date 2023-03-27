import React from 'react'
import { useGlobalStates } from './Context'
import lobo from './lobo.png'

const LoboEstepario = () => {

  const {salario, setSalario} = useGlobalStates()

  return (
    <div className='lobo-estepario'>
        <img className='lobo' src={lobo} alt='lobo'/>
        <h3>Total: {salario*6}</h3>
        <button onClick={() => setSalario(salario + 6000)}>Pedir aumento</button>
        {console.log('Lobo re-renderizado')}
    </div>
  )
} 

export default LoboEstepario