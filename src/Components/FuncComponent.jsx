import React, { useEffect, useState } from 'react'

const FuncComponent = ({titulo}) => {
    const [name, setName] = useState('Camilo')
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Esto se ejecuta cuando el componente se monta')
        setTimeout(() => {
            setName('Felipe')
        }, 2000)
        return () => {
            console.log('Esto se ejecuta cuando el componete se desmonta')
        }
    }, [])

    useEffect(() => {
        console.log('Esto se ejecuta cuando count se actualiza')
    }, [count])

    console.log('Esto se ejecuta cada vez que el componente se renderiza')
  return (
    <div>
        <h1>{titulo}</h1>
        <h2>{name}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h3>{count}</h3>
        <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default FuncComponent