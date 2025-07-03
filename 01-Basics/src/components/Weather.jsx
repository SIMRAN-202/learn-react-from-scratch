// conditional rendering using logical operator

import React from 'react'

const Weather = ({temperature}) => {
  return (
    <div>
        {temperature < 15 && <h1>Its cold outside</h1>}
        {temperature >15 && temperature< 25 && <h1>Its nice outside</h1>}
        {temperature > 25 && <h1>Its hot outside</h1>}
    </div>
  )
}

export default Weather