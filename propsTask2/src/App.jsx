import product1 from  "./assets/product1.png"
import product2 from   "./assets/product2.png"
import product3 from   "./assets/product3.png"
import product4 from   "./assets/product4.png"
import Product from "./Product.jsx"
import "./App.css"

function App() {
  let productData = [
    {
      name:"lipgloss",
      price:5,
      category:"Cosmetics",
      inStock:true,
      img:product1
    },
    {
      name:"lipstick",
      price:8,
      category:"Cosmetics",
      inStock:true,
      img:product2
    },
    {
      name:"blushon",
      price:10,
      category:"Cosmetics",
      inStock:false,
      img:product3
    },
    {
      name:"blushon kit",
      price:23,
      category:"Cosmetics",
      inStock:true,
      img:product4
    }
  ]
 return(
  <div className="main">
    <>
    {
      productData.map((data,index)=>{
      return <Product key={index} productData={data}/>
    })
    }
    </>
    </div>
   ) 
}

export default App
