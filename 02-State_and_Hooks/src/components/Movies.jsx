//  useState on objects

import React from 'react'
import { useState } from 'react'

const Movies = () => {
    const [movie, setMovie] = useState({
        title: 'Batman',
        year: 2020,
    })

    const handleClick = () => {
        // const copyMovie = {
        //     ...movie,
        //     year:2021
        // }
        // setMovie(copyMovie)
        
        setMovie({...movie,year:2021 })
    }
  return (
    <div>
        
        <h1>{movie.title}</h1>
        <p>{movie.year}</p>
        <button onClick={handleClick}>Change Year</button>
    </div>
  )
}

export default Movies