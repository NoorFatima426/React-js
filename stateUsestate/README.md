# State Kyun Chahiye?
Socho tumhare paas ek counter hai. User button dabata hai aur number badhna chahiye.
pr jb me button p click krti hun value change nhi hoti
# Kyun nahi badha screen pe?
React component ek function hai. Jab React isko render karta hai, function run hota hai, variables fresh bante hain, UI dikhta hai. Normal variable change karne se React ko pata hi nahi chalta ki kuch badla — woh dobara render nahi karta.
State ka kaam yahi hai — jab state change ho, React ko automatically pata chale aur woh component dobara render kare (naya UI dikhaye).

Rule 1: Hamesha setter function use karo , value change knre k leye
Rule 2: Rule 2: State directly mutate mat karo
const [list, setList] = useState(["apple", "mango"])

//  Galat — same array modify kar raha hai
list.push("banana")
setList(list)

//  Sahi — naya array banao
setList([...list, "banana"])

Rule 3:Objects ko bhi replace karo, modify mat karo
const [user, setUser] = useState({ naam: "Ali", umar: 22 })

//  Galat
user.naam = "Ahmed"
setUser(user)

//  Sahi — spread operator se naya object
setUser({ ...user, naam: "Ahmed" })

# State Updates Async Hote Hain
Yeh concept bohot important hai — interview mein zaroor poochha jaata hai
const [count, setCount] = useState(0)

function handleClick() {
  setCount(count + 1)
  console.log(count)  // ← yahan bhi 0 dikhayega, 1 nahi!
}
Kyun? setCount call karne ke baad React turant re-render nahi karta. Woh pehle baaki code run karta hai, phir re-render schedule karta hai. Isliye console.log purani value dikhata hai.

# Functional Update — Sahi Tarika
Jab nai value purani value pe depend kare, functional update use karo:
// ❌ Problematic — purani value pe depend karta hai
setCount(count + 1)
setCount(count + 1)
setCount(count + 1)
// Result: sirf 1 badha, 3 nahi!

// ✅ Sahi — React guaranteed latest value deta hai
setCount(prev => prev + 1)
setCount(prev => prev + 1)
setCount(prev => prev + 1)
// Result: 3 badha!

prev m hmesha new value ati h chye kitni b updates pending hon


# Derive state 
Derived state woh value hoti hai jo existing state se calculate ho sake. Isko alag state mein store karna galat hai:
//  Galat — total alag state mein rakhna
const [items, setItems] = useState([100, 200, 300])
const [total, setTotal] = useState(600)  // yeh alag state nahi honi chahiye

//  Sahi — render mein calculate karo
const [items, setItems] = useState([100, 200, 300])
const total = items.reduce((sum, item) => sum + item, 0)  // automatically update hoga

# PART 8: Controlled Inputs 
Controlled input woh input hai jiska value React state se aaye. React input ka "boss" hota hai.

// Uncontrolled — React ko nahi pata kya hai andar
<input type="text" />

// Controlled — React control mein hai
<input 
  type="text" 
  value={naam}                           // state se value aati hai
  onChange={(e) => setNaam(e.target.value)}  // user type kare toh state update ho
/>

Kyun controlled inputs use karte hain?

Har keystroke pe state mein value milti hai
Validation real-time ho sakti hai
Form submit pe values already state mein hain
Input ko programmatically clear/reset kar sakte ho

# useState ka Initial Value — Lazy Initialization
Yeh interview mein poochha jaata hai:
// Normal initial value — har render pe run hota hai
const [data, setData] = useState(heavyCalculation())  // ❌ har baar run hoga

// Lazy initialization — sirf pehli baar run hota hai
const [data, setData] = useState(() => heavyCalculation())  // ✅ sirf ek baar

Function pass karo value ki jagah — React sirf pehle render pe call karega. Yeh tab useful hai jab:

localStorage se data lena ho
Koi heavy calculation ho
Initial state compute karni ho

# Q1: useState ka initial value kab ek baar hi run hota hai?
useState ka initial value sirf pehli render (mount) pe use hota hai. Baad ki renders mein React stored state use karta hai, initial value ignore hoti hai.

Lekin agar heavy computation ho jaise useState(heavyFn()) toh yeh function har render pe call hoga — isliye lazy initialization use karte hain: useState(() => heavyFn()). Function pass karne se React sirf pehli baar call karta hai.
// ❌ Har render pe run hoga
const [data, setData] = useState(JSON.parse(bigData))

// ✅ Sirf ek baar run hoga
const [data, setData] = useState(() => JSON.parse(bigData))

# Q2: State update hone pe kya hota hai component ko?
1. React nai state value queue mein daalta hai
2. Current event handler poora run hota hai
3. React re-render schedule karta hai
4. Component function dobara chalat hai (re-render)
5. Nai JSX calculate hoti hai
6. React DOM ko efficiently update karta hai (diffing)
7. Screen pe nai UI dikhti hai

Yeh sab asynchronous hota hai — setState ke turant baad nai value nahi milti.
setCount(5)
console.log(count) // ← abhi bhi purani value
// Nai value agli render mein milegi

# q3 State direct mutate kyun nahi karte?
React reference equality check karta hai — agar object ka reference same ho toh React sochta hai kuch nahi badla aur re-render nahi karta.

Array ke liye: push/pop/splice direct mutation hai → UI update nahi hogi
Object ke liye: obj.key = value direct mutation hai → UI update nahi hogi

Hamesha naya reference banao: spread operator (...), map, filter, slice.
//  Same reference — React re-render nahi karega
list.push('item')
setList(list)

//  Naya array — React re-render karega
setList([...list, 'item'])

const [user, setUser] = useState({ naam: "Ali", umar: 22, shehr: "Lahore" })

//  Galat — same reference
user.naam = "Ahmed"
setUser(user)

//  Sahi — naya object bana
setUser({ ...user, naam: "Ahmed" })
// Result: { naam: "Ahmed", umar: 22, shehr: "Lahore" }
//          ↑ badla        ↑ copy    ↑ copy

# Q4: useState aur useReducer mein kab kya choose karein?
useState: Simple, independent values ke liye. String, number, boolean, chota object. Jab updates simple hon.

useReducer: Complex state logic, multiple related values, next state purani pe depend kare, action-based updates. Shopping cart, form with many fields — yehi prefer karo.

# q5  Ek component mein kitne useState rakh sakte hain? Aur related state ek saath ya alag alag?
Unlimited useState rakh sakte hain ek component mein. React inhe order se track karta hai isliye conditionally nahi likh sakte (Rules of Hooks).

Related data (form fields) → ek object state
Unrelated data (counter, modal open, user name) → alag alag states

Rule: Jo saath update hota hai woh saath rakho, jo independently update hota hai alag rakho.