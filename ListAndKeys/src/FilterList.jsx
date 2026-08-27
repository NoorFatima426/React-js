import { useState } from "react";
function FilterList(){
const products = [
  { id: 1, name: "Shirt", category: "Clothing", price: 1500 },
  { id: 2, name: "Phone", category: "Electronics", price: 45000 },
  { id: 3, name: "Pants", category: "Clothing", price: 2500 },
  { id: 4, name: "Laptop", category: "Electronics", price: 120000 },
]
const [category,setCategory] = useState("All");
const filteredProducts = category === "All" ? products : products.filter(p => p.category === category);


    return(
        <>
        <button onClick={()=>{setCategory("All")}}>All</button>
        <button onClick={()=>{setCategory("Electronics")}}>Electronics</button>
        <button onClick={()=>{setCategory("Clothing")}}>Clothing</button>
       {filteredProducts.map(product =>(
            <div key={product.id}>
            <h3>Name: {product.name}</h3>
            <p>Price: {product.price}</p>
            </div>
        ))}
        </>
    )
}
export default FilterList;