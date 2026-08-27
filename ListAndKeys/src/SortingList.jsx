import {useState} from 'react'
function SortingList(){
    const Products = [
        {
            id:'1',
            name:'Bag',
            price:1800
        },
        {
            id:'2',
            name:'Colors',
            price:1200
        },
        {
            id:'3',
            name:'Books',
            price:2500
        },
        {
            id:'4',
            name:'Stationary',
            price:4500
        },
        {
            id:'5',
            name:'Shoes',
            price:2500
        },
        {
            id:'6',
            name:'Unifrom',
            price:2000
        }
    ]
    const lowToHigh = [...Products].sort((a,b)=> a.price - b.price)
    const highToLow =[...Products].sort((a,b)=> b.price - a.price)
    const alphabetically =[...Products].sort((a,b)=>a.name.localeCompare(b.name))
    const [type,setType] = useState("All")
    const SortedItems = type === "All" ? Products : type === "lowToHigh" ? lowToHigh :
    type === "highToLow" ? highToLow  : type === "alphabetically" ? alphabetically : "NO Items Found"

    // const sortedItems2 = type==="All" ? Products : type==="lowToHigh" ? Products.sort((a,b)=> a.price - b.price) : ""

    return(
        <>
        <button onClick={()=>{setType("All")}}>All</button>
        <button onClick={()=>{setType("lowToHigh")}}>Low to High Price</button>
        <button onClick={()=>{setType("highToLow")}}>High to Low Price</button>
        <button onClick={()=>{setType("alphabetically")}}>Alphabetically</button>
        {
            SortedItems.map(s => (
                <div key={s.id}>
                    <p>Name: {s.name}</p>
                    <p>Price: {s.price}</p>
                </div>
            ))
        }
        </>
    )
}
export default SortingList;