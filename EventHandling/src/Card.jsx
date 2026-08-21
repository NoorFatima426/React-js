function Card(){
     function HandleCard(){
            alert("Card Clicked , Event Delegation");
        }
        function HandleButton(e){
            e.stopPropagation();
            alert("button Clicked , Event Propagtaion Done");
        }
        // Bina e.stopPropagation() ke, button click karne pe dono functions 
        // chalenge — pehle button ka, phir bubble hoke card ka bhi. 
        // stopPropagation() lagane se sirf button wala chalega.
    return(
        <>
        <div onClick={HandleCard} style={{ padding: 20, border: '1px solid gray' }}>
            <p>Card</p>
            <button onClick={HandleButton}>Click</button>
        </div>
        </>
    )
}
export default Card