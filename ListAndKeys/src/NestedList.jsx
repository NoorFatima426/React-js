import {useState} from 'react'
function NestedList(){
    const cateogry=[
        {
            id:'1',
            name:'Clothing',
            items:['Sweater','Jackets','Pants','Jeans','Shirts','Crop Tops']
        },
        {
            id:'2',
            name:'Stationery',
            items:['Pens','Whitener','Pencils','Eraser','Shopner','Remover','Ink pot']
        },
        {
            id:'3',
            name:'Electronics',
            items:['Laptop','Mobile Phone','I-pad','TV','LCD','PC']
        }
    ]
    const [query,setQuery] = useState('');
    const filteredData = cateogry.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));
    return(
        <>
        <h2>Nested List</h2>
       
        {
            cateogry.map((c)=>(
                <div key={c.id}>
                    <h4>{c.name}</h4>
                    <ul>
                       {
                        c.items.map((item) => (
                            <li key={item}>{item}</li>
                        ))
                       }
                    </ul>
                </div>
            ))
        }
         <input 
        placeholder="Search"
        value={query}
        onChange={(e)=>{setQuery(e.target.value)}}/>
        {
            filteredData.length === 0 ? (
                <p>No Data Found</p>
            )
            :
            (
                filteredData.map((data,num)=>(
                       <div>
                         <p key={num}>{data.name}</p>
                        <ul>
                            {
                             filteredData.map((elements)=>(
                                <li key={elements}>{elements.items.join(', ')}</li>
                             ))   
                            }
                        </ul>
                       </div>

                ))
            )
        }
        </>
    )
}
export default NestedList;