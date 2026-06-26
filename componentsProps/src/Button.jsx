function Button(
    {label,
        color,
        onClick
    }
){
    return(
        <>
        <p>{label}</p>
        <p>{color}</p>
        <button onClick={onClick}>Click</button>
        <hr/>
        </>
    )
}
export default Button