import { useState } from 'react'
import './App.css'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="App">
      {toggle ? 
        <ClassComponent titulo='Esto es un componente de clase'/>
        :
        <FuncComponent titulo='Esto es un componente de función'/>
      }
      <button onClick={() => setToggle(!toggle)}>
        Cambiar de componente {toggle ? 'de función' : 'de clase'}
      </button>
    </div> 
  )
}

export default App
