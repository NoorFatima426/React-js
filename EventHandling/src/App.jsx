import Anchor from './Anchor'
import Form from './Form'
import Input from './Input'
function App() {

 const HandleSubmit = ()=>{alert("hi")}
  return (
    
   <>
   <p>onClick In Detail</p>
   <button onClick={HandleSubmit}>Click</button>
    <Input/>
    <Form/>
    <Anchor/>
   </>
  )
}

export default App
