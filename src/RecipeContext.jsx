import {createContext, useContext, useEffect, useState} from 'react'

const RecipeStates = createContext()

const Context = ({children}) => {
    const [recipes, setRecipes] = useState([])
    const [auth, setAuth] = useState(true)

    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=68d481a0fbc340308fbf934f836ee8c6'
    let token = localStorage.getItem('token')


    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setRecipes(data.recipes))
    }, [])

    useEffect(() => {
        if(token){
            setAuth(false)
        }
    }, [auth])

    return (
        <RecipeStates.Provider value={{recipes, auth, setAuth}}>
            {children}
        </RecipeStates.Provider>
    )
}

export default Context

export const useRecipeStates = () => useContext(RecipeStates)