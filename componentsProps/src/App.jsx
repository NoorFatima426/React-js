import ProfileCard from './ProfileCard'
import Destructuring from './Destructuring'
import PropsTypes from './PropsTypes'
import DefaultProps from './DefaultProps'
import Children from './Children'
import ProductCard from './ProductCard'
import Button from './Button'
import './App.css'

function App() {
  const HandleClick = () => {
    return(
       alert("Button just Click")
    )
  }
  const clickMe= () => {
    return(
      alert("button Clicked")
    )
  }
  return (
   <>
   <h5>Props</h5>
   <ProfileCard name="Noor Fatima" age="18" city="Rawalpindi"/>
   <ProfileCard name="Ali" age="13" city="Islamabad"/>
   <ProfileCard name="Maryam Shahzadi" age="20" city="Lahore"/>
   <h5>Destructuring</h5>
   <Destructuring name="Usman" age="12" city="Multan"/>
   <Destructuring name="Ismail" age="15" city="Faisalabad"/>
   <Destructuring name="Habiba" age="09" city="Chinot"/>
   <h5>Types of Props</h5>
   <PropsTypes
   name="Noor Ul Huda"
   age={15}
   isActive={true}
   Hobbies={["Painting" , "Drawing", "Coding"]}
   Data={
    {
      name:"noor",
      city: "Multan"
    }
   }
   HandleClick={HandleClick}/>
   <h5>Default Props</h5>
   <DefaultProps/>
  <DefaultProps color="blue"/>
  <h5>Children Props</h5>
  <Children title="Medical Card">
       <p>Name: "Mrs Ali"</p>
       <p>Age: {29} </p>
       <p>Suffering From Anemia</p>
  </Children>
  <Children title="Inventory">
    <p>Number of medicines: 250</p>
    <p>Expired Medicine: 58</p>
  </Children>
<h2>Product Card</h2>
   <ProductCard
     name="pens"
        price={30}
        cateogory="Stationary"
        inStock={true}
   />
   <ProductCard
     name="T-shirt"
        price={20}
        cateogory="Garments"
        inStock={false}
   />
   <h3>Button</h3>
   <Button 
   label="Click here"
   color="blue"
   onClick={clickMe}
   />
   </>
  )
}

export default App
