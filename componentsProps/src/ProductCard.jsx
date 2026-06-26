function ProductCard( 
    {
        name,
        price,
        cateogory,
        inStock
    }){
    return(
        <>
        <p>Name: {name}</p>
        <p>Price: {price}</p>
        <p>Category: {cateogory}</p>
        <p style={{ color: inStock ? "green" : "red"  }}>Status:
            {inStock ? "Product is in Stock" : "Out of Stock"}
        </p>
        <hr/>
        </>
    )
}
export default ProductCard