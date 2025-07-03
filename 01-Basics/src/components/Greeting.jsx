// Conditional Rendering using Ternary Operator

import React from 'react'

const Greeting  = ({timeOfDay}) => {
    const styles= {color:"red"}
  return (
    <div>
        {timeOfDay==="morning" ? (<h1 style={{color: "blue" }}>good morning</h1>) : (<h1 style={styles}>good afternoon</h1>)}
    </div>
  )
}

export default Greeting