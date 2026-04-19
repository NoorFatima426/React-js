import ProfileCard from "./ProfileCard"
import "./App.css";

function App() {

let userInfo = [ {
  name:"afifa",
  age:22,
  city:"Rwp"
},
 {
  name:"ayesha",
  age:32,
  city:"Isl"
}, {
  name:"noor",
  age:12,
  city:"Lahore"
}]
  return (
    <div className="main-container">
    <>
       {
        userInfo.map((user,index)=>{
          return <ProfileCard key={index} userInfo={user}/>
        })
       }
    </>
    </div>
  )
}

export default App
