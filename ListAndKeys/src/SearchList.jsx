import {useState} from 'react'
function SearchList(){
    const [query,setQuery] = useState('');
    const users=['Noor Fatima','Usman Siddique' , 'Muhammad Ahsan', 'Mubashra Sattar', 'Maryam Shahzadi','Umme Habiba']
    const filteredUsers = users.filter(user => 
        user.toLowerCase()
.includes(query.toLowerCase()))
    return(
        <>
        <h1>Serach List</h1>
        <input
        placeholder='Enter name'
        value={query}
        onChange={(e)=>{setQuery(e.target.value)}}
        />

        {
            filteredUsers.length === 0 ? (
                <p>No Data Found</p>
            )
            :
            filteredUsers.map((user,i)=>(
                <p key={i}>{user}</p>
            ))
        }
        </>
    )
}
export default SearchList;