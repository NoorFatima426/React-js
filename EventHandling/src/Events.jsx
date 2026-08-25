import { useState } from "react"

function Events(){
    const [borderColor , setBorderColor] = useState("purple");
    const handleFocus = () => {
      setBorderColor("red");  
    }
    const handleBlur = () => {
        setBorderColor("orange");
    }
    const handleKeys = (e) => {
        if(e.key === "Enter"){
            setBorderColor("blue");
            alert("Enter is pressed")
        }

    }
    return(
        <>
        <input 
        onFocus={handleFocus} 
        onBlur={handleBlur} 
        onKeyDown={handleKeys} 
        placeholder="Type Anything"
        style={{
            border: `4px solid ${borderColor}`,
            padding:"2px",
        }}
        />
        </>
    )
}
export default Events