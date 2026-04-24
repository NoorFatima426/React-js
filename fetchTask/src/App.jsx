import {useEffect , useState} from "react";
import './App.css'

function App() {
  let [users,setUsers] = useState([]);
  useEffect(()=>{ 
    getUsersData();
  },[])
async function getUsersData (){
  const url = "https://dummyjson.com/users";
  let response =await fetch(url);
  response = await response.json();
  console.log(response);
  setUsers(response.users);
}
  return (
   <div>

    <h1>Fetch</h1>

{ users && users.map((u) => {

  return  <p>{u.firstName}</p>

        })
        }
   </div>
  )
}

export default App
