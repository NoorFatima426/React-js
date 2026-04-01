import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(20)

  const addValue = () => {
    if(counter > 0){
      setCounter(counter + 1)
      console.log(counter)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
      console.log(counter)
    }
  }

  return (
    <>
      <h1>Noor fatima</h1>

      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>
        Increment counter
      </button>

      <br/>

      <button onClick={removeValue}>
        Decrement counter
      </button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App