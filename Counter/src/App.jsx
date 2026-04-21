import {useState} from "react";
import "./App.css"
function App() {
  
  let [counter,setCounter] = useState(0);
  function increaseVal(){
      setCounter(prev => prev+1);
    }
    const decreaseVal= () => {
      if (counter> 0){
              setCounter(prev => prev-1);
      }
    }
  return (
    <div className="container">
  <p className="counter">{counter}</p>
  <div className="btn-group">
        <button onClick={increaseVal}>Increment Value</button>
        <button onClick={decreaseVal}>Decrement Value</button>
      </div>
    </div>
  )
}

export default App
