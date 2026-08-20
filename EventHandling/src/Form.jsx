function Form(){
    function HandleForm(e){
e.preventDefault();
// yeh line zaroor likhni hai forms mein, warna page refresh ho jaayega aur tumhara React state reset ho jaayega.
alert("he");
    }
    return(
        <>
      <form onSubmit={HandleForm}>
        <input type="text" placeholder="enter your name"/>
        <button type="submit">Submit</button>
        </form>  
        </>
    )
}
export default Form;