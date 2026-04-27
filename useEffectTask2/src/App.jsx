import './Msgbox.jsx'
import './App.css'
import {useState} from 'react';
import Msgbox from './Msgbox.jsx'

function App() {
let [text,setText] = useState('');
function msg(){
  return setText('Hello i am a msg from parent to child');
}
  return (
    <div>
    <Msgbox msg={msg} text={text}/>
    </div>
  )
}

export default App
