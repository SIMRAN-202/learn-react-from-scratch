// State is a way to store and manage data that can change over time and affects how the component renders.
// Hooks let us use state and other react features without writing a class, they were a new addition in react 16.8
// The useState hook allows us to tract state in a functional component.


// useState on numbers

import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () =>setCount(count+1)
    const decrement = () =>setCount(count-1)

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter