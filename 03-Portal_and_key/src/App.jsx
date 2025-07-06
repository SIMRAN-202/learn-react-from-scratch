// Portal is a feature that allows you to render a child component into a DOM node that exists outside the hierarchy of the parent component. Thsi can be useful for scenarios like modals, tooltips or dropdowns, where you want to break out of the usual parent child structure and render in a different part of the DOM.

import React from 'react'
import CopyInput from './components/CopyInput'
import Switcher from './components/Switcher'

const App = () => {
  return (
    <div>
      <CopyInput />
      <Switcher />
    </div>
  )
}

export default App