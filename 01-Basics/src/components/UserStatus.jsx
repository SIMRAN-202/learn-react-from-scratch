// Conditional rendering using logical operator

import React from 'react'
import { CiUser } from "react-icons/ci";

const UserStatus = ({loggedIn, isAdmin}) => {

  return (
    <div>
        <h1>Userstatus</h1>
        {loggedIn && isAdmin && <h1>Welcome admin!</h1>}
        {loggedIn && !isAdmin && <h1><CiUser />Welcome IUser!</h1>}
    </div>
  )
}

export default UserStatus