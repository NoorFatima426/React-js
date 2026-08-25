import { useState } from "react";
function MouseEvents(){
    const [isHovered , setIsHovered] = useState(false);
    return(
        <>
        <div 
        onMouseEnter={()=>{setIsHovered(true)}}
        onMouseLeave={()=>{setIsHovered(false)}}
        style={{
            border:isHovered ? `3px solid pink` : `3px solid blue`,
            padding:"0 auto",
            fontSize : "16px",
            backgroundColor: isHovered ? `teal` : `olive`,
            color:isHovered ? `Pink` : `white`,
            margin:"3px"
        }}
        >
            <p>
                {isHovered ? `Mouse Enter` : `Mouse Leave`}
            </p>
        </div>
        </>
    )
}
export default MouseEvents;