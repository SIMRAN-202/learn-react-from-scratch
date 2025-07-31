import React, { useState } from 'react'

const Form = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    

    const [usernameError, setUsernameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const [userColor, setUserColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('')

    const validate = (e) =>{
        e.preventDefault()

        if (username === '') {
            setUsernameError('Username is required')
            setUserColor('red')
        } else {
            setUsernameError('')
            setUserColor('green')
        }   
        if (email === '') {
            setEmailError('Email is required')
            setEmailColor('red')
        } else {
            setEmailError('')
            setEmailColor('green')
        }
        if (password === '') {
            setPasswordError('Password is required')
            setPasswordColor('red')
        } else {
            setPasswordError('')
            setPasswordColor('green')
        }
        if (confirmPassword === '') {
            setConfirmPasswordError('Confirm Password is required')
            setConfirmPasswordColor('red')
        } else if (confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match')
            setConfirmPasswordColor('red')
        } else {
            setConfirmPasswordError('')
            setConfirmPasswordColor('green')
        }

    }

  return (
    <>
    <div className=" bg-sky-100 flex items-center justify-center p-10">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
         Login Form
        </h2>

        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ borderColor: userColor }}
              className="w-full px-4 py-3  border-b border-gray-600  focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            />
            <p className='pt-2 text-sm text-red-700'>{usernameError}</p>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderColor: emailColor}}
              className="w-full px-4 py-3 mt-7  border-b border-gray-600  focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            />
            <p className='pt-2 text-sm text-red-700'>{emailError}</p>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderColor: passwordColor }}
              className="w-full mt-7 px-4 py-3  border-b border-gray-600  focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            />
            <p className='pt-2 text-sm text-red-700'>{passwordError}</p>

            <input
              type="password"
              placeholder="Comnfirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ borderColor: confirmPasswordColor }}
              className="w-full mt-7 px-4 py-3  border-b border-gray-600  focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            />
            <p className='pt-2 text-sm text-red-700'>{confirmPasswordError}</p>
          </div>

          <button
            type="submit"
            onClick={validate}
            className="w-full bg-pink-800 text-white py-3 font-semibold text-lg hover:bg-pink-950 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Form