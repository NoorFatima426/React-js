# Problem Kya Hai — Kyun Seekhna Zaroori Hai?
Socho tumhare paas ek online store hai. Database se 100 products aate hain. Tumhe har product ko screen pe dikhana hai.
# Without map() method
// Yeh possible hi nahi — 100 products manually likhoge?
<div>Product 1</div>
<div>Product 2</div>
<div>Product 3</div>
... 97 aur?? 
# With map
 {products.map(product => (
  <div>{product.name}</div>
))}
100 ho ya 1000 — ek hi code!

# PART 2: Array.map() — Deep Samjho
map() ek JavaScript array method hai jo har item ko transform karta hai

# Normal JavaScript mein
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(num => num * 2)
 Result: [2, 4, 6, 8, 10]

# React mein hum numbers ki jagah JSX return karte hain:
const fruits=["mango", "apple", "grapes"];
const fruitElements= fruits.map(fruit => (
    <li>{fruit}</li>
))
return <ul>{fruitElements}</ul>

# Directly
return(
    <ul>
    {
        fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
        ))
        
    }
    </ul>
)

# PART 3: Key Prop — Bohot Important
Key kya hai?

Jab tum map se list banate ho, React ko har item ko identify karna hota hai. Key ek unique ID hai jo React ko batati hai — "yeh wala item hai."
(part 3 or ik prompt answer yh se kl start krna h)



