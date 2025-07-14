// useReducer is a hook similar to useState, but it is designed for more complex state objects or state transitions that involves multiple subvalues, It allows u to manage state in a functional, immutable way.

// syntax: const [state, dispatch] = useReducer(reducer, initialState)

// useRef hook provides a way to access and interact with DOM elements or to persist values across renders without causing a re-render.

// import { useRef } from 'react'
// import Counter from './components/Counter'
import Timer from './components/Timer'


const App = () => {
  // const inputElement = useRef(null)
  // const focusInput = ()=>{
  //   inputElement.current.focus()
  //   inputElement.current.value = 'Hello, World!'
  // }
  
  return <div>
    {/* <Counter /> */}

    {/* <input type="text" ref={inputElement}/>
    <button onClick={()=> focusInput()}>Focus and Write sim</button> */}

    <Timer />


  </div>
}

export default App