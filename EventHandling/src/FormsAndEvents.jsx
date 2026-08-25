import { useState } from "react";
function FormsAndEvents(){
    const [name, setName] = useState("");
    const [error, setError] = useState("");
            const handleSubmit= (e) =>{
            e.preventDefault();
            if(name.trim() === ""){
                setError("Empty Field is not acceptable")
                return;
            }
            else{
                alert("Form Submitted");
            }
            setName("");
            setError("");
        }
    return(
        <>
        <p>Form With preventDefault aur Event Object</p>
    <form onSubmit={handleSubmit}>
        <input placeholder="Enter Your Name"
        onChange={(e)=>{setName(e.target.value)}}
        type="text"
        value={name}/>
        <button type="submit">Submit</button>
    </form>
    {error && <p style={{color:"red"}}>{error}</p>}
        </>
    )
}
export default FormsAndEvents;