# Event Handling
# PART 1: Event Kya Hoti Hai?

Jab user browser mein kuch karta hai — click, type, hover, scroll, submit — toh browser ek event generate karta hai. React in events ko sunta hai aur tumhare diye gaye function ko run karta hai.

function App() {
  function handleClick() {
    console.log("Button dabaya gaya!")
  }

  return <button onClick={handleClick}>Click Me</button>
}

Jab user button dabata hai, browser "click" event fire karta hai, React handleClick function ko call karta hai.

# PART 2: HTML vs React — Event Likhne Ka Fark
HTML mein: <button onclick="handleSubmit()">Click</button>
Lowercase: onclick , String mein function call: "handleClick()"
React mein: <button onClick={handleSubmit}>Click</button>
camelCase: onClick , Curly braces mein function reference: {handleClick} — bina brackets ke!

handleClick() likhne ka matlab hai "abhi call karo". handleClick likhne ka matlab hai "reference do, baad mein call karna jab event ho".

# PART 3: Common Events List
Event	Kab Fire Hoti Hai
onClick ->	Click karne pe
onChange ->	Input ki value change hone pe
onSubmit ->	Form submit hone pe
onMouseEnter ->	Mouse element pe aane pe
onMouseLeave ->	Mouse element se jaane pe
onKeyDown ->	Keyboard key dabane pe
onFocus ->	Input pe click/focus hone pe
onBlur ->	Input se focus hatne pe
onDoubleClick ->	Double click hone pe

# PART 4 onClick 
function App(){
    const HandleSubmit = ()=>{alert("hi)}
    return(
        <>
        <button onClick={HandleSubmit}>Click</button>
        </>
    )
}

# Inline
function App() {
  return <button onClick={() => alert("Salam!")}>Salam Bolo</button> }
Dono tarike sahi hain. Chhote functions ke liye inline likh sakte ho, bade logic ke liye alag function banao.

we can use OnClICK Event in states (useState) also -> E.g Counter App

# Part 5 Event Object (e) — Bohot Important
Jab koi event fire hoti hai, React automatically ek event object pass karta hai handler function ko. Isse hum convention se e ya event likhte hain.
function App() {
  function handleClick(e) {
    console.log(e)              // pura event object
    console.log(e.target)       // jis element pe click hua
    console.log(e.type)         // "click"
  }

  return <button onClick={handleClick}>Click</button>
}

# part 6 Preventing Default Behavior
Browser ke kuch elements ka apna default behavior hota hai. Jaise:

Form submit hone pe page reload ho jaata hai
<a> link pe click karne pe page navigate karta hai

React mein hum aksar yeh default behavior rokte hain taake apna custom logic chala sakein.

# PART 7a: Passing Arguments to Handlers
Kabhi kabhi tumhe handler ko extra data bhejna hota hai — jaise kis item ko delete karna hai.
<button onClick={deleteItem(item.id)}>Delete</button> Wrong Method
 <button onClick={() => deleteItem(2)}>Delete Item 2</button>
 Arrow function () => deleteItem(1) ek naya function banata hai jo click hone pe deleteItem(1) call karega. Yeh render ke waqt call nahi hota — sirf event hone pe

 # Part 7b - Todo List (practice arguments) 
 # Part 8 Event Delegation
 Event delegation ek concept hai jahan parent element bachon (children) ki events bhi sun sakta hai, har child pe alag listener lagaye bina.
Browser mein events bubble karti hain — child se parent ki taraf upar jaati hain.
List.jsx
Stop Propagation Card.jsx

# PART 9: Multiple Events Ek Saath Handle Karna
Events.jsx