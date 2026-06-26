function Children(
    {
        children,
        title
    }
){
    return(
        <>
        <h2>{title}</h2>
        <div>
            {children}
        </div>
        <hr/>
        </>
    )
}
export default Children