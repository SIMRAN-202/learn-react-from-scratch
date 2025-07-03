// Rendering props from parent component to child component

import React from 'react'

const Product = (props) => {
  return (
    <div>
        <h2>Product Name  :{props.name}</h2>
        <p>Product Price : {props.price}</p>
    </div>
  )
}

export default Product