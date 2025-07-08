// useEffect Hook allows you to perform side effects in your components. Some examples of side effets are: fetching data, directly updating the DOM etc

// without the dependency array: cb function runs on every single render
// with an empty array: it runs on the first render only
// with the dependency array: 

import React, { useEffect } from 'react'

const BasicEffect = () => {

    useEffect(()=>{
        alert("This works!!!")
    },[])
  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect

