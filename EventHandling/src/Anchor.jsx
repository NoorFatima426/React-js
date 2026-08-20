function Anchor(){
    function HandleAchor(e){
        e.preventDefault();
        alert("anchor! custom logic Navigation blocked");
    }
    return(
        <>
        <a href="https://www.google.com" onClick={HandleAchor}>Google</a>
        </>
    )
}
export default Anchor;