import { useRef } from 'react'
import './App.css'

function App() {
const inputRef = useRef(null);
const h1ref = useRef (null);
const inputBtn = () => {
  inputRef.current.focus();
  inputRef.current.placeholder = "Enter your name"
  inputRef.current.style.color = "pink"
}
const changeColor = () => {
  h1ref.current.style.color = "red";
}
const toggleBtn = () =>{
  if(inputRef.current.style.display != 'none'){
    inputRef.current.style.display = 'none'
  }
  else{
    inputRef.current.style.display = 'inline'
  }
}
  return (
   
   <div>
    <p>useRef</p>

    <input type="text" ref={inputRef} />
    <button onClick={inputBtn}>Click</button>
    <button onClick={toggleBtn}>Toggle</button>

    <h1 ref={h1ref}>Hey</h1>
    <button onClick={changeColor} >Click now</button>
   </div>
  )
}

export default App
