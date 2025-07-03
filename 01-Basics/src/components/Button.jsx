// Event Handling in React

import React from 'react'

const Button = () => {

    const handleSubmit = ()=>{
        prompt("Enter your name!")
    }

    const handleCopy = () =>{
        alert("Stop stealing my content")
    }

    const moveHandler = ()=>{
        alert("You can't move this button")
    }
  return (
    <div>
        <button onClick={handleSubmit}>Click me</button>

        <button onClick={()=> alert("u clicked me!")}>click me</button>

        <p onCopy={handleCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsam delectus earum porro veritatis nulla accusamus quasi aspernatur odit incidunt?</p>

        <p onMouseMove={moveHandler}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet expedita quas adipisci repudiandae quod eum totam rerum quos reiciendis quo?</p>

    </div>
  )
}

export default Button