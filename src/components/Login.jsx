import React from 'react'

const Login = () => {
  return (
    <div>Login
      <button onClick={(e) => {
        e.preventDefault()
        // Perform login logic here
        // Redirect to dashboard
        window.location.href = '/dashboard'
      }}>Login</button>

    </div>
  )
}

export default Login