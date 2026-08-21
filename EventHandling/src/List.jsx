function List(){
            function HandleList(){
            alert("event Propagation")
        }
    return(
        // Event Delegation
        <>
        <ul onClick={HandleList}>
            <li>Apple </li>
            <li>Mango</li>
            <li>Orange</li>
            <li>Banana</li>
        </ul>
        </>
    )
}
export default List;