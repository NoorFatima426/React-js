import catImage from "./assets/cat.png"  
import './App.css'

function App() {
  const name = "noor"
  const age= 10
  const city="Rawalpindi"
  const isLoggedIn = true
  const price=1050
  const quantity = 30
  const discount = 0.1
  const rollno = 22112011066
  const CGPA = 3.76
  return (
    <div>
      {/* using javaScript in JSX, use curly braces while writing js in jsx */}
         <p>My name is {name}</p>  
        <p>My age is {age}</p>
        <p>Next year i'll be {age+1} years old</p>
        <p>I lives in {city}</p>
        <p>Performing js</p>
        <p>{16+23}</p>
        <p>{name.toUpperCase()}</p>
        <p>{isLoggedIn ? "Access Granted" : "Access Denied" }</p>
        <p>{name + " fatimah"}</p>
        {/* {if (condition) { ... }}   // ❌ if statement nahi
{for (let i...) { ... }}   // ❌ for loop nahi */}
        <p>Calculator</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <p>Discount: {discount}</p>
        <p>After Discount: Rs.{price * quantity + (discount-1)}</p>
        <p>Student Card</p>
        <p>Name: {name}</p>
        <p>Roll no: {rollno}</p>
        <p>CGPA: {CGPA}</p>
        <p>
          {CGPA>2.5 ? "pass" : "Fail"}
        </p>
        <h1>Task1</h1>
        <p>Task1</p>
        <h4>Hello Everyone</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, reprehenderit et? Quas!</p>
        <img src={catImage} alt="cat" />
   </div>
  )
}

export default App
