import { useEffect , useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData] = useState(0);
function callOnce(){
    console.log("call Once Called");
   }
   useEffect(()=>{ callOnce(); },[]) //function bs ik he bar call hoga ab
   useEffect(()=>{ counterFunction(); },[count])
   function counterFunction(){
    console.log("counter function" , count);
    
   }
  return (
   <div>
    {/* hr button click p callOnce function b call horha h; page refresh component rerender function call*/}
    <button onClick={()=>{setCount(prev => prev+1)}}>Counter {count}</button> 
    <button onClick={()=>{setData(prev => prev+1)}}>Data {data}</button> 
   </div>
  )
}

export default App
