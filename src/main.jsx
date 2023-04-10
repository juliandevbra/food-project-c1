import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Context from './RecipeContext'
import './index.css'
import ErrorBoundary from './Clase 25/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Context>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Context> 
    </BrowserRouter>
 
)
