import {useState} from 'react';

function Input(){
    const [name,setName]=useState("");
    const HandleInput = (e)=>{ 
        // e.target woh DOM element hai jis pe event hui — yahan <input>. e.target.value uss input ki current value hai.
        setName(e.target.value);
    }
    return(
        <>
        <input value={name} onChange={HandleInput} type="text" placeholder="Enter your name"/>
        <p>Name= {name}</p>
        </>
    )
}
export default Input;