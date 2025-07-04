import React from 'react'
import { useState } from 'react'

const ToDoList = () => {
    const [items, setItems] = useState([])

    const addHandler = () => {
        setItems([...items, "Grocery"])
    }

  return (
    <div>
        <h1>To Do List</h1>
        {items.map((item)=>(
            <li>{item}</li>
        )
        )}

        <button onClick={addHandler}>Add New Item</button>

    </div>
  )
}

export default ToDoList