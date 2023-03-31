import React, { useReducer, useState } from 'react'

const initialState = {
    users: [
      { id: 1, userName: "Gerardo", email: "gerar@gmail.com" },
      { id: 2, userName: "Magdalena", email: "Magda@gmail.com" },
      { id: 3, userName: "Lucia", email: "lu-cia@gmail.com" },
    ],
}

const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_USER':
            return {users: [...state.users, action.payload]}
        case 'CLEAR_LIST':
            return {users: []}
        // case 'DELETE_USER'
        // return {users: action.payload}
        default:
            throw new Error
    }
}

const UserList = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [newUser, setNewUser] = useState({
        id: '',
        userName: '',
        email: ''
    })

    const handleChange = (e) => {
        setNewUser({
          ...newUser,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_USER', payload: newUser})
    }

  return (
    <div>
        <ul>
            {state.users.map(user => <li key={user.id}>{user.userName} - {user.email}</li>)}
        </ul>

        <form onSubmit={handleSubmit}>
            <input type="number" name="id" value={newUser.id} onChange={handleChange}/>
            <input type="text" name="userName" value={newUser.userName} onChange={handleChange}/>
            <input type="text" name="email" value={newUser.email} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserList