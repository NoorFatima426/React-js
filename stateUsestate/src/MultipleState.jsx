import { useState } from 'react'
function MultipleState(){
    const [name,setName] =useState("");
const [age,setAge] = useState(0);
const [city,setCity] = useState("");
const [isLoggedIn , setIsLoggedIn] = useState(false);
    return(
        <>
    <input value={name} placeholder="Enter your name" 
    onChange={(e)=>setName(e.target.value)}/> <br/>

    <input value={age} placeholder="Enter your age" type="number"
    onChange={(e)=>setAge(e.target.value)}/>  <br/>
 
    <input value={city} placeholder="Enter your city"
    onChange={(e)=>setCity(e.target.value)}/>  <br/>

    <button 
    onClick={()=>{setIsLoggedIn(!isLoggedIn)
        setName("")
        setAge("")
        setCity("")
    }
    }
    > 
    {isLoggedIn ? "Logout" : "LoggedIn"}
    </button>

    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>City: {city}</p>

        </>
    )
}
export default MultipleState