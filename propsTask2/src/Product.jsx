import "./App.css"

function Product({productData}){
    return(
        <div className="productCard">
            <img src={productData.img} className="productImg"/>
            <p>Name: {productData.name}</p>
            <p className={productData.price > 10 ? "Expensive" : "BudgetFriendly"}
            >{productData.price > 10 ? "Expensive" : "Budget Friendly"}</p>
            <p>Price: {productData.price}$</p>
            <p>Category: {productData.category}</p>
            <p className={productData.inStock ? "available" : "outOfStock"}>inStock: {productData.inStock ? "Available"  : "Out of Stock"}</p>  
            
        </div>
    )
}
export default Product;