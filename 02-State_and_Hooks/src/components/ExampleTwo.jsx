import React from 'react'
import { useState } from 'react'


const ExampleTwo = () => {
    const [randomNumber, setRandomNumber] = useState(()=> Math.floor(Math.random()*100))

    const generateNumber = () =>{
        const newNumber = Math.floor(Math.random()*100)
        setRandomNumber(newNumber)
    }
  return (
    <div>
        <h1>{randomNumber}</h1>
        <button onClick={generateNumber}>Generate new number</button>
    </div>
  )
}

export default ExampleTwo