import React from 'react'
import Counter from './components/Counter'
import Todo from './components/Todo'
import Meals from './components/Meals'

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Counter Project</h1>
      <Counter />

      <hr className="my-8" />


      <h1 className="text-3xl font-bold text-center my-8">ToDo Project</h1>

      <Todo />

      <h1 className="text-3xl font-bold text-center my-8">Meals API Fetch Project</h1>

      <Meals />
    </div>
  )
}

export default App