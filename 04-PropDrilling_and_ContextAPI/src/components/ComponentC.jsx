import React, { useContext } from 'react'
import { Data, Data1 } from '../App'


const ComponentC = () => {
  const username = useContext(Data)
  const age = useContext(Data1)
  return (
    <h1>{username},{age}</h1>
  )
}

export default ComponentC