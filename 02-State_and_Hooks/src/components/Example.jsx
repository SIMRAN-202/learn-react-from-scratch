import React from 'react'
import { useState } from 'react'

const Example = () => {
    const [count, setCount] = useState(()=>{
        const initialCount = 10
        return initialCount
    })

    const increment = () =>{
        setCount((prevCount) => prevCount+1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Incremnet</button>
    </div>
  )
}

export default Example