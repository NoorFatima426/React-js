import { useState } from "react"
function ObjectDemo(){
    const [myObj , setMyObj] = useState({
        name:"noor",
        age:22
    })
    const addKey = ()=>{
       setMyObj(
        {
            ...myObj ,
            city:"Karachi"
        }
       )
    }
    const updateObj = () =>{
        setMyObj({
            ...myObj,
            age:"12"
        })
    }
    const deleteObj = () => {
        const {age , ...rest}=myObj;
        setMyObj(rest);
    }
    return(
        <>
        <button onClick={addKey}>add key in Object</button>

        <button onClick={updateObj}>Update key value</button>

        <button onClick={deleteObj}>Delete key</button>

         <pre>{JSON.stringify(myObj, null, 2)}</pre>
        
        </>
    )
}
export default ObjectDemo