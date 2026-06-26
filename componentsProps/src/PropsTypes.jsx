function PropsTypes({
    name , //string
    age, //number
    isActive, //Boolean
    Hobbies, //array
    Data, //object
    HandleClick, //Function
}){
    return(
        <>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>isActive: {isActive ? `${name} is active` : `${name} is not active`}</p>
        <p>First Hobby: {Hobbies[0]}</p>
        <p>Data: {Data.city}</p>
        <button onClick={HandleClick}>Click me</button>
        <hr/>
        </>
    )
}
export default PropsTypes