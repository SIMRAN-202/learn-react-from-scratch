import React from 'react'
// import Movies from './components/Movies'
// import Movies2 from './components/Movies2'
import { useState } from 'react'
import ToDoList from './components/exercises/ToDoList'
import BasicEffect from './components/BasicEffect'
import CounterEffect from './components/exercises/CounterEffect'
import FetchDataEffect from './components/exercises/FetchDataEffect'
// import ComponentOne from './components/ComponentOne'
// import ComponentTwo from './components/ComponentTwo'
// import Example from './components/Example'
// import ExampleTwo from './components/ExampleTwo'
// import ExampleThree from './components/ExampleThree'
// import Counter from './components/Counter.jsx'

const App = () => {
  const [count, setCount] = useState(0)


  return (
    <div>
      {/* <Counter /> */}
      {/* <Movies /> */}
      {/* <Movies2 /> */}
      {/* <ComponentOne count={count} onClickHandler={()=>setCount(count+1)} />
      <ComponentTwo count={count} onClickHandler={()=>setCount(count+1)} />
        <Example />
        <ExampleTwo />
        <ExampleThree /> */}

        {/* <ToDoList /> */}

        {/* <BasicEffect /> */}
        {/* <CounterEffect /> */}
        <FetchDataEffect />
    </div>
  )
}

export default App