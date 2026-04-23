import {useState} from 'react'
import './App.css'

function App() {
 let [name,setName] = useState(""); //for task1
 let [form,setForm] = useState({ name:'',  email:''}); //for task 2
 let [submitdata,setSubmittedData] =useState(null);
function showData(p){
  p.preventDefault();
  setSubmittedData(form);
}


  return (
    <div className='main-container'>
      <h1>Task 1</h1>
      <form action="">
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter your name' />
        <br /> <br />
        <p>Input field has value: {name}</p>
        <button type="submit">Submit</button>
        <br /> <br />
        <button onClick={()=>{setName("")}} type='reset'>Clear</button>
      </form>
      <h1>Task 2</h1>
      <form action="">
        <input type="text" value={form.name} placeholder="Enter your name" onChange={(e)=>{setForm({...form, name:e.target.value})}}/> <br /> <br />
        <input type="email" value={form.email} placeholder='Enter your email' onChange={(e)=>{setForm({...form , email:e.target.value})}} /> <br /> <br />
        <button type="button" onClick={()=>{setForm({name: "", email: ""})}}>Clear</button> <br /> <br />
        <button type="button" onClick={showData}>Submit</button>
      </form>
      <h4>Form data</h4>
      {
        submitdata && <p>
          Name: {submitdata.name}
          <br />
          Email: {submitdata.email}
        </p> 
      }
    </div>
  )
}

export default App
