import { useState } from "react"

function TempConverter(){
    const [temp,setTemp] = useState("");
    const [result,setResult] = useState()
    const convertTemp = () => {
        setResult((temp*(9/5))+32)
        setTemp("");
        setTimeout(() => {
            setResult("")
        }, 2000);
    }
    return(
        <>
        <input
        value={temp}
        type="number"
        onChange={(e)=>setTemp(e.target.value)}
        placeholder="Enter Temperature in °C"
        />
        <button onClick={convertTemp}>Click</button>
        <h3>Temperature in °F: {result} </h3>
        </>
    )
}
export default TempConverter