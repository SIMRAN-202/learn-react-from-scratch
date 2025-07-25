import React, { useState } from 'react'

const ToggleBgColor = () => {
  const [bgColor, setBgColor] = useState('white')
  const [textColor, setTextColor] = useState('#1b1b1b')
  const [buttonColor, setButtonColor] = useState('white')

  const handleChange = () => {
    setBgColor(bgColor === 'white' ? '#1b1b1b' : 'white')
    setTextColor(textColor === '#1b1b1b' ? 'white' : '#1b1b1b')
    setButtonColor(buttonColor === 'white' ? '#1b1b1b' : 'white')
  }

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, height: '20vh', padding: '20px' }}>
      <button
        style={{ backgroundColor: buttonColor, color: textColor, padding: '10px 20px', border: 'none', cursor: 'pointer', borderRadius: '5px',border: '1px solid #ccc' }}
        onClick={handleChange}
      >
        {bgColor === 'white' ? 'Dark Mode' : 'Light Mode'}
      </button>

    </div>
  )
}

export default ToggleBgColor
