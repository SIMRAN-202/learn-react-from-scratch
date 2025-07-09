// Context API is a featurew that allows you to manage and share state across your component tree without having to pass props manually at every level. Its useful for scenarios where you need to share data or functions across many components, especially when these components are deeply nested.

// useContext hook allows us to access the context values provided by a context object directly within a component. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

import React, { createContext } from 'react'
import ComponentA from './components/ComponentA';

 export const Data = createContext()
 export const Data1 = createContext()

const App = () => {
  const name = "Simran";
  const age = 22;

  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
      
    </div>
  )
}

export default App