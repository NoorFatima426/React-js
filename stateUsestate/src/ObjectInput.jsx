import { useState } from "react"
function ObjectInput(){
    const [formData , setFormData] = useState({
        name:"",
        age:"",
        city:""
    })
 

  const handleData = (e) => {
    // [name]: value — yeh computed property hai. name variable ki value field name ke jgha mein use hoti hai.
    const {name,value} = e.target 
    setFormData((prev => ({
        // remainng feilds as it is rkho or new wli ki changes record kro
        ...prev ,
        [name] : value
    }) ))
    }
  
    return(
        <>
        <h1>Form</h1>
        <input name="name" value={formData.name} onChange={handleData} placeholder="enter name"/> <br/>
        <input name="age" value={formData.age} onChange={handleData} placeholder="enter age"/> <br/>
        <input name="city" value={formData.city} onChange={handleData} placeholder="enter city"/> <br/>
        <p>Name: {formData.name}</p>
    
        <p>Age: {formData.age}</p>
            <p>City: {formData.city}</p>
        <pre>{JSON.stringify(formData,null,2)}</pre>
       <button
  onClick={() =>
    setFormData({
      name: "",
      age: "",
      city: ""
    })
  }
>
  Clear
</button>
        </>
    )
}
export default ObjectInput