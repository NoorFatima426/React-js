import { useState } from 'react'
import './App.css'

function App() {
const [ theme , setTheme] = useState("light");
  const handleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }
  return (
      <div className={theme}>
  <button onClick={handleTheme}>
    {theme === "light" ? "🌙 Dark" : "☀️ Light"}
  </button>
  <h1>Hello</h1>
    </div>
  )
}

export default App
