function DefaultProps(
    {color="red" ,
    gender="girl" ,
    age="above 18"
    }
){
    return(
        <>
        <p>Color: {color}</p>
        <p>Gender: {gender}</p>
        <p>
            Age: {age} 
        </p>
        <hr/>
        </>
    )

}
export default DefaultProps