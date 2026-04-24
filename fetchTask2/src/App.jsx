import './App.css'
import {  useState } from 'react';
function App() {
  let [product,setProduct] = useState(null); // ([]) => pura array store horha tha , null se serf ik item ayega

 async function getdata(){
    const url = "https://dummyjson.com/products";
    let response =await fetch(url);
    response =await response.json();
      let randomIndex =Math.floor(Math.random()*response.products.length);
    console.log(response.products[randomIndex]);
    setProduct(response.products[randomIndex]);
  }
  return (
   <div>
    <button onClick={getdata}>Get Product name</button>
    <p>{ product && product.title}</p>
   </div>
  )
}

export default App
