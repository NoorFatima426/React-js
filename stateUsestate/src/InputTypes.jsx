import { useState } from "react"

function InputTypes(){

     const [text, setText] = useState("")
  const [number, setNumber] = useState(0)
  const [checked, setChecked] = useState(false)
  const [selected, setSelected] = useState("lahore")
  const [textarea, setTextarea] = useState("")

  return (
    <div>
      {/* Text Input */}
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />

      {/* Number Input */}
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(Number(e.target.value))} 
      />

      {/* Checkbox */}
      <input 
        type="checkbox" 
        checked={checked}                          // ← value nahi, checked
        onChange={(e) => setChecked(e.target.checked)}  // ← .value nahi, .checked
      />

      {/* Select Dropdown */}
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="lahore">Lahore</option>
        <option value="karachi">Karachi</option>
        <option value="islamabad">Islamabad</option>
      </select>

      {/* Textarea */}
      <textarea 
        value={textarea} 
        onChange={(e) => setTextarea(e.target.value)} 
      />

      <p>Text: {text}</p>
      <p>Number: {number}</p>
      <p>Checked: {checked ? "Yes" : "No"}</p>
      <p>City: {selected}</p>
    </div>
  )
}


export default InputTypes