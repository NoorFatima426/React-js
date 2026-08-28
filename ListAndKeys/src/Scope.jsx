function Scope(){
    const Fruits = [
        {
            id:'1',
            name:'Kiwi'
        },
         {
            id:'2',
            name:'Apple'
        },
         {
            id:'3',
            name:'Mango'
        },
         {
            id:'4',
            name:'Banana'
        },
         {
            id:'5',
            name:'Orange'
        },
         {
            id:'6',
            name:'Pear'
        }
    ]
    const Vegetables = [
        {
            id:'1',
            name:'Pea'
        },
         {
            id:'2',
            name:'Onion'
        },
         {
            id:'3',
            name:'Tomato'
        },
         {
            id:'4',
            name:'Potato'
        },
         {
            id:'5',
            name:'Carrot'
        },
         {
            id:'6',
            name:'Raddish'
        }
    ]
    return(
        <>
        <h5>Fruits</h5>
        {
           Fruits.map((fruit,index)=>(
            <ul key={index}>
                <li key={fruit.id}>
                    {fruit.name}
                </li>
            </ul>
           )) 
        }
        <h5>Vegetables</h5>
        {
            Vegetables.map((vege,index)=>(
                <ul key={index}>
                    <li key={vege.id}>{vege.name}</li>

                </ul>
            ))
        }
        </>
    )
}
export default Scope;