import { createContext, useState } from "react";

const UserContext = createContext()

const UserProvider = ({children}) =>{ 
    const [user, setUser] = useState({name:"Simran"})

    const updateUser = (newname) =>{
        setUser({name:newname})
    }

    return ( <UserContext.Provider value={{user,updateUser }}>
        {children}
    </UserContext.Provider>
    )
}

export {UserContext, UserProvider} 