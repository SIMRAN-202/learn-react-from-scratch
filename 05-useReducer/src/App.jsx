// useReducer is a hook similar to useState, but it is designed for more complex state objects or state transitions that involves multiple subvalues, It allows u to manage state in a functional, immutable way.

// syntax: const [state, dispatch] = useReducer(reducer, initialState)

import Counter from './components/Counter'

const App = () => {
  
  return <div>
    <Counter />
  </div>
}

export default App