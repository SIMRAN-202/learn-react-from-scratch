import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const UserProfile = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
        <h1>Profile</h1>
        <p>Username: {user.name}</p>
    </div>
  )
}

export default UserProfile