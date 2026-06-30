import { useState } from "react"
function ArrayDemo(){
    const [myArray, setMyArray] =useState([2,4,6,8,10])
    const addItem = ()=>{
        setMyArray([...myArray,12]);
    }
    const updateItem = () => {
        setMyArray(myArray.map(myArray => myArray ==8 ? 18 : myArray))
    }
    const deleteItem = () => {
        setMyArray(myArray.filter(myArray => myArray !=10))
    }
    return(
        <>
            <button onClick={addItem}>Add item</button>
            <button onClick={updateItem}>Update item</button>
            <button onClick={deleteItem}>Delete item</button>
           <pre>{JSON.stringify(myArray,null,2)}</pre>
        </>
    )
}
export default ArrayDemo