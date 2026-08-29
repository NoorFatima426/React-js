import { useState } from "react";
function Notification(){
    const [count,setCount] = useState(3);
    let hasMessages = true;
    return(
        <>
    {
        hasMessages && <p>New Messages</p>
    }
    {
        count > 0 ? <p>Notifications: {count}</p> : "null"
    }
        </>
    )
}
export default Notification;