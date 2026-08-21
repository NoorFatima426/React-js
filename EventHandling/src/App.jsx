import Anchor from './Anchor'
import Form from './Form'
import Input from './Input'
import Todo from './Todo'
import List from './List'
import Card from './Card'
function App() {

 const HandleSubmit = ()=>{alert("hi")}
  return (
    
   <>
   <p>onClick In Detail</p>
   <button onClick={HandleSubmit}>Click</button>
    <Input/>
    <Form/>
    <Anchor/>
    <Todo/>
    <List/>
    <Card/>
   </>
  )
}

export default App
