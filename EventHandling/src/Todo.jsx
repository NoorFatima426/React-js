import {useState} from "react"
function Todo(){
const [todos , setTodos] = useState(
    [
        {id:1 , text:"do the dishes"},
        {id:2 , text:"clean the room"},
        {id:3 , text:"arrange the cupboard"}
    ]
)
const deleteTodo = (id)=>{
    setTodos(todos.filter(todo => todo.id!=id));
   console.log("deleted item id:", id);
}
    return(
        <>
        {todos.map(
            (todo=> (
                <div key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
                </div>
            ))
        )}
        </>
    )
}
export default Todo;