import React, { useState } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleAddTask = () => {
    if (inputValue.trim() === '') return

    const newTask = {
      id: Date.now(),
      text: inputValue.trim()
    }

    setTodos([...todos, newTask])
    setInputValue('')
  }

  const handleDeleteTask = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id)
    setTodos(filteredTodos)
  }

  return (
    <div className=" bg-gradient-to-br from-slate-100 to-blue-100 flex flex-col items-center justify-center p-7">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">My Todo List</h1>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todos.map(({ text, id }) => (
            <li
              key={id}
              className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded-lg shadow"
            >
              <span className="text-gray-700">{text}</span>
              <button
                onClick={() => handleDeleteTask(id)}
                className="text-red-500 font-bold hover:text-red-700 transition"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todo
