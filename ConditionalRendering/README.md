# PART 1: Conditional Rendering Kya Hai?

Real life mein socho — ATM machine:

Card sahi → Balance dikhao
Card galat → Error dikhao
Account blocked → Warning dikhao

Yahi React mein Conditional Rendering hai — condition ke hisaab se alag alag UI dikhana.

function App() {
  const isLoggedIn = true

  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <LoginForm />}
      {/* sirf ek dikhega condition ke hisaab se */}
    </div>
  )
}

# PART 2: Method 1 — if/else (Sabse Basic)
JSX ke andar if/else nahi likh sakte — lekin bahar likh sakte ho:
function Greeting({ isLoggedIn }) {
  let message

  if (isLoggedIn) {
    message = <h1>Welcome back!</h1>
  } else {
    message = <h1>Please login</h1>
  }

  return <div>{message}</div>
}
Kab use karo: Jab logic complex ho, multiple conditions hon, ya alag alag JSX blocks return karne hon।

# PART 3: Method 2 — Ternary Operator
condition ? "true hone pe yeh" : "false hone pe yeh"
function userStatus({isLoggedIn}){
  return(
    <>
    <h1>
    {
      isLoggedIn ? "Welcome Back" : "Please Login"
    }
    </h1>
    {
      isLoggedIn ? <button>Logout</button> : <button>LogIn</button>
    }
    </>
  )
}

# Nested Ternary
{
  score>=90 ? "A" : score>= 80 ? "B" : score>=60 ? "C" : score >= 50 ? "D" : "F"
}

# PART 4: Method 3 — Short Circuit && Operator
Jab sirf ek cheez dikhani ho ya nahi dikhani — doosra option nahi:
// Matlab: "condition true hai? toh yeh dikhao. False? kuch nahi."
{condition && <Component />}
Rule yaad rakho: && se pehle wali value hamesha boolean honi chahiye — number, string nahi।
Notification.jsx

# PART 5: Method 4 — Nullish Coalescing (??)
?? tab kaam karta hai jab value null ya undefined ho:
Nullish.jsx

# || se fark:
const score = 0

{score || "No score"}   // "No score" — kyunki 0 falsy hai — ❌ WRONG
{score ?? "No score"}   // 0 — kyunki 0 null/undefined nahi — ✅ CORRECT

?? sirf null aur undefined pe default deta hai — 0, "", false pe nahi।

# PART 6: Rendering Nothing — null Return Karo
Kabhi kabhi component ko bilkul kuch nahi render karna hota:

function Alert({ message, type }) {
  // Agar message nahi toh component kuch render na kare
  if (!message) return null

  return (
    <div style={{ background: type === 'error' ? 'red' : 'green' }}>
      {message}
    </div>
  )
}

// Use karna:
<Alert message="" />           {/* kuch nahi dikhega */}
<Alert message="Error!" type="error" />  {/* red alert dikhega */}

null return karna safe hai — React kuch render nahi karta, koi error nahi aata।

# Part 7: Sab Methods Ek Saath — Comparison
UserCard.jsx

# PART 8: Real Life Projects Mein Kahan Use Hota Hai?

Authentication (Login System):

Logged in → Dashboard dikhao
Logged out → Login page dikhao
Admin → Extra options dikhao, normal user → nahi

E-commerce (Daraz jaisa):

Product available → "Add to Cart" button
Out of stock → "Notify Me" button
Sale hai → Red badge dikhao, nahi → nahi dikhao
Cart empty → "Shop Now" message, items hain → list dikhao

Social Media:

Notifications hain → red badge with count
99 se zyada → "99+" dikhao
Verified account → blue tick dikhao, nahi → nahi
Story dekhi → faded ring, nahi dekhi → colored ring

Forms:

Error hai → error message dikhao
Success → success message
Loading → spinner dikhao, data aaya → content

Chat App:

Message tera → right side, doosre ka → left side
Online → green dot
Typing → "typing..." indicator

# PART 9: Quick Rules — Yaad Rakho
Simple true/false    →  Ternary (? :)
Sirf dikhao/chhupao  →  && (lekin boolean ensure karo!)
null/undefined check →  ??
Complex logic        →  if/else function mein
Kuch mat dikhao      →  return null

# Task1: Login.jsx
# Task2: Badge.jsx