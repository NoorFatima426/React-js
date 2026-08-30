import { useState } from 'react'

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Dashboard</h1>
          <p>Welcome back!</p>
        </>
      ) : (
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </form>
      )}

      <button onClick={() => setIsLoggedIn(prev => !prev)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </>
  )
}

export default Login