import { useState } from "react"
function Cart(){
    const [cartItems, setCartItems] = useState([
        {
            name:"Jackets",
            price:120,
            quantity:3
        },
        {
            name:"Shirts",
            price:30,
            quantity:5
        },
        {
            name:"Trousers",
            price:34,
            quantity:6
        }]
    )

    const totalItems=cartItems.reduce((sum,item)=> sum+item.quantity,0);
    const subTotal = cartItems.reduce((sum,item)=> sum+(item.quantity*item.price),0 )
    const discount= subTotal > 200 ? subTotal*0.1 : 0
    const total= subTotal - discount
    return(
        <>
            <h3>Cart</h3>
        <h2>Cart ({totalItems}) items</h2>
        {
            cartItems.map((item,index)=>{
                <div key="index">
                    <span>{item.name}</span>
                    <span>Rs {item.price} * {item.quantity}</span>
                </div>
            })
        }
        <p>TotalItems: {totalItems}</p>
        <p>subTotal : {subTotal}</p>
        <p>Discount: {discount}</p>
        <p>Total: {total}</p>
        </>
    )
}
export default Cart