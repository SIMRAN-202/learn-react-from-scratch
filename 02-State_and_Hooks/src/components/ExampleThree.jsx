import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ExampleThree = () => {
    const [name, setName] = useState(()=>{
        const storedName = localStorage.getItem('name');
        return storedName ? JSON.parse(storedName) : ""
    })

    useEffect(()=>{
        localStorage.setItem('name', JSON.stringify(name))
    },[name])

    const handleClear = () =>{
        setName("")
    }

    const handleChange = (e) =>{
        setName(e.target.value)
        
    }
  return (
    <div>
        <h1>Your Name</h1>
        <input type="text" value={name} onChange = {handleChange} />
        <button onClick={handleClear}>Clear name</button>
    </div>
  )
}

export default ExampleThree