function UserCard(){
  const user="user not found"
  const messageCount = 5
  const isOnline = true
  const lastSeen = "Today"
   if(!user){
      return <p>User not Found</p>
    }
  return(
    <>
    <h2>Short Circuiting</h2>
    {
      messageCount > 0 && (<p>Total Messages: {messageCount}</p>)
    }
    <h2>Ternary Operator </h2>
    {
      isOnline ? (<p>🟢 Online</p>) : (<p>⚫ Offline</p>)
    }
    <h2> Null Coalescing </h2>
    <p>{
      lastSeen ?? "not Active today"
    }
      </p>
    </>
  )
}
export default UserCard