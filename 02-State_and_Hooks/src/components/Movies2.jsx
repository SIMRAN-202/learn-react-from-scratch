// useState on array of objects

import React from 'react'
import { useState } from 'react'

const Movies2 = () => {
    const [movies, setMovies] = useState([
        {id:1, title:"spiderman", ratings:3},
        {id:2, title:"superman", ratings:2},
        {id:3, title:"ironman", ratings:7},
        {id:4, title:"batman", ratings:6},
    ])

    const handleClick = () => {
        setMovies(movies.map(m => m.id===1 ? {...movies, title:"Spiderman 3"} : m ))
    }
  return (
    <div>
        {movies.map(m =>(
            <li key={Math.random()}>{m.title}</li>
        ))}

        <button onClick={handleClick}>Change name</button>
    </div>
  )
}

export default Movies2