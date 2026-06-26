# PART 1: Component Kya Hota Hai?
Socho tum ek newspaper design kar rahe ho. Newspaper mein hota hai:

Header (title, date)
News cards (har news ka apna box)
Sidebar (weather, ads)
Footer

Agar tum yeh sab ek hi jagah likhte toh code ka jungle ban jaata. Isliye tum alag alag sections banate ho.
React mein bhi yehi hota hai. UI ke chhote chhote tukde banate hain jise Components kehte hain.
App
├── Navbar
├── HeroSection
├── ProductList
│   ├── ProductCard
│   ├── ProductCard
│   └── ProductCard
└── Footer
Har cheez apna component hai. ProductCard ek baar bana, baar baar use karo.
# Component ki definition:
Component ek JavaScript function hai jo JSX return karta hai. Bus itna hi hai

# part 2 Types of Components
1. Functional Component (Aajkal yahi use hota hai)
function Welcome() {
  return <h1>Salam!</h1>
}
2. Class Component (Purana tarika — interview mein poochha jaata hai)
class Welcome extends React.Component {
  render() {
    return <h1>Salam!</h1>
  }
}
Aajkal sirf Functional Components use hote hain. Class components React ka purana tarika tha. Hooks aane ke baad functional components ne sab kuch sambhal liya

# PART 3: Component Rules 
Rule 1: Naam Capital se shuru hona ZAROORI hai
Rule 2: Sirf ek cheez return karo (ek root element) (<></>)
Rule 3: Export karo taaki doosri jagah use ho sake
Rule 4: Import karo jahan use karna ho

# PART 4: Props — Asli Topic
Props kya hote hain?
Socho tumne ek ProfileCard component banaya. Agar yeh sirf ek hi naam dikhaye toh useless hai. Tum chahte ho ki alag alag logon ke liye alag alag naam aaye.
Props woh tarika hai jisse tum parent component se child component ko data bhejte ho.
Props ko samjho function ke arguments ki tarah

# PART 5: Destructing Props
Upar wale example mein baar baar props.name, props.age likhna padta tha. Yeh thaka deta hai. Isliye destructuring use karte hain
{name,age}
Its more readable and cleaner

# PART 6: Props ke Types
strings ke liye quotes, baaki sab ke liye curly braces {}
 naam,        // string
  umar,        // number
  isActive,    // boolean
  hobbies,     // array
  address,     // object
  onClick      // function

# PART 7 Default Props
Kabhi kabhi parent component prop bhoolna se reh jaata hai. Uss case mein component crash na kare, isliye default values dete hain:

# PART 8 Children Props
children ek special built-in prop hai. Jab tum component ke opening aur closing tag ke beech kuch likhte ho, woh children mein aata hai.
children prop isliye powerful hai kyunki tum ek flexible wrapper component bana sakte ho jo andar kuch bhi le sake.

# PART 9: Props are Read-Only
Props kabhi bhi directly change nahi kar sakte. Yeh React ka golden rule hai.
to change the value use states
Kyun? Kyunki data ek direction mein flow karta hai — Parent se Child. Agar child props change kar le toh data ka flow chaotic ho jaata aur bugs dhundhna mushkil ho jaata.

# PART 10: PropTypes — Type Checking
Jab koi galat type ka prop bheje toh warning milni chahiye. Isliye PropTypes use karte hain:
import PropTypes from 'prop-types'

function StudentCard({ naam, umar, cgpa, isPresent }) {
  return (
    <div>
      <h2>{naam}</h2>
      <p>Umar: {umar}</p>
      <p>CGPA: {cgpa}</p>
      <p>{isPresent ? "Present" : "Absent"}</p>
    </div>
  )
}

// Type checking define karo
StudentCard.propTypes = {
  naam: PropTypes.string.isRequired,     // string, zaroori
  umar: PropTypes.number.isRequired,     // number, zaroori
  cgpa: PropTypes.number,               // number, optional
  isPresent: PropTypes.bool              // boolean, optional
}

// Default values
StudentCard.defaultProps = {
  cgpa: 0.0,
  isPresent: false
}

Pehle npm install prop-types run karo. Agar galat type do toh browser console mein warning aayegi. Production mein yeh warnings nahi aatein lekin development mein bugs pakarne mein help karta hai.

# PART 11: Component Composition — Advance Concept
Chhote components mila ke bade components banane ko Composition kehte hain:
// Chhote chhote components
function Avatar({ src, naam }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img src={src} alt={naam} style={{ width: 40, height: 40, borderRadius: '50%' }} />
      <span>{naam}</span>
    </div>
  )
}

function Badge({ type }) {
  const colors = {
    admin: '#fee2e2',
    user: '#dbeafe', 
    moderator: '#dcfce7'
  }
  return (
    <span style={{ 
      backgroundColor: colors[type], 
      padding: '2px 8px', 
      borderRadius: '12px',
      fontSize: '12px'
    }}>
      {type}
    </span>
  )
}

function Stats({ posts, followers }) {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <div><strong>{posts}</strong> Posts</div>
      <div><strong>{followers}</strong> Followers</div>
    </div>
  )
}

// Ab inhe mila ke bada component banao
function UserProfile({ user }) {
  return (
    <div style={{ border: '1px solid #e5e7eb', padding: '20px', borderRadius: '12px' }}>
      <Avatar src={user.avatar} naam={user.naam} />
      <Badge type={user.role} />
      <Stats posts={user.posts} followers={user.followers} />
    </div>
  )
}

// App mein use karo
function App() {
  const userData = {
    naam: "Noor Fatima",
    avatar: "https://via.placeholder.com/40",
    role: "admin",
    posts: 142,
    followers: 3800
  }

  return <UserProfile user={userData} />
}

# PART 12: Props Drilling — Aur uska Problem
Jab props ko kai levels neeche pass karna pade:
Yeh Props Drilling hai — har component sirf agle ko deta rehta hai. Yeh mushkil ho jaata hai jab app badi ho. Solution hai Context API (jo baad mein seekhoge).

# Props aur State mein kya fundamental fark hai?
Props parent se aate hain aur child read-only use karta hai — child change nahi kar sakta. State component ka apna internal data hota hai jo component khud manage aur change karta hai. Props = bahar se aaya data. State = andar ka data.

# props ko child component modify kar sakta hai? Kyun ya kyun nahi?
Nahi. Props immutable hote hain. React mein data ek direction mein flow karta hai — parent se child. Agar child props change kar sakta toh data flow unpredictable ho jaata aur bugs dhundhna bahut mushkil ho jaata. Yeh React ka one-way data flow principle hai.

# Children prop kya hoti hai? Kab use karte hain?
children ek special React prop hai jo component ke opening aur closing tag ke beech jo bhi content ho usse represent karta hai. Wrapper/layout components banate waqt use hoti hai — jaise Card, Modal, Layout — jo andar kuch bhi le sakein.

# Component composition kya hai?
Chhote chhote specific components bana ke unhe mila ke bade components banana Composition kehlata hai. Jaise Avatar + Badge + Stats mila ke UserProfile bana diya. Yeh reusability aur maintainability badhata hai.

# PropTypes kyun use karte hain? TypeScript se kaise alag hai?
PropTypes runtime pe (browser mein) type check karta hai aur console warnings deta hai. TypeScript compile time pe (code likhte waqt) type check karta hai aur errors directly editor mein dikhata hai. Industry mein TypeScript zyada prefer hota hai kyunki woh pehle hi errors pakad leta hai.

# Default props kab zaroori hote hain?
Jab koi prop optional ho aur parent pass na kare. Default values crash se bachati hain aur component ko sensible defaults ke saath kaam karne deti hain. Jaise ek Button component ka default text 'Submit' ho sakta hai jab explicitly pass na kiya jaye.