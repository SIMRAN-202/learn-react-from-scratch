import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

const UpdateUser = () => {
    const {updateUser} = useContext(UserContext)
    const [newName, setNewName] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()

        if (newName.trim()) {
            updateUser(newName)
            setNewName("")
        }
    }

  return (
    <div>
        <h2>Update name</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=> setNewName(e.target.value)} value={newName} />

            <button type='submit'>Change name</button>
        </form>

    
    </div>
  )
}

export default UpdateUser