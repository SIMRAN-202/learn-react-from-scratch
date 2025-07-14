//  Custom Hooks are javascript functions that start with the prefic "use" and can call other hooks within them. They allow you to extract and reuse logic that involves state or side effects, making your components readable and maintainable.

import React from 'react'
import useFetch from './components/useFetch'

const App = () => {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/posts')

  return (
    <div>
      {data && data.map((item) => {
        return <p key={item.id}>{item.title}</p>
      })}
    </div>
  )
}

export default App