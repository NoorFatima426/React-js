# React Intro
# PART 1: React Kya Hai?
Socho tumhare paas ek website hai. Uss website mein bahut saari cheezein hain — navbar, buttons, forms, lists. Jab user kuch karta hai (button click, form fill), toh page ka kuch hissa badal jaata hai.

Purane zamane mein (Vanilla JS): Tum khud JavaScript likhte the jo DOM ko dhundti thi aur manually update karti thi. Yeh kaam aasaan tha jab site chhoti thi, lekin jab site badi hoti gayi toh code ka jungle ban jaata tha.

React ka idea: React ne kaha — "Tum sirf batao ki UI kaisi dikhni chahiye kisi bhi state mein. Baaki main sambhaloonga." React khud decide karta hai kab aur kaise DOM update karna hai.

React ek JavaScript library hai (framework nahi) jo UI banane ke liye use hoti hai. Isko Facebook (ab Meta) ne banaya tha 2013 mein.

# React ke 3 main pillars:
1. Components — UI ke chhote chhote tukde. Jaise Lego blocks. Ek navbar component, ek button component, ek card component. Inhe jod ke poori website banti hai.
2. State — Component ka apna data. Jab state badlti hai, React automatically UI update kar deta hai.
3. JSX — JavaScript ke andar HTML likhne ka tarika.

# PART 2: Setup — React Project Kaise Banate Hain
Do tarike hain React project shuru karne ke. Hum Vite use karenge kyunki yeh fast hai aur industry mein popular ho raha hai.
Step 1:  Node.js install karo
Pehle check karo Node.js installed hai ya nahi. Terminal (Command Prompt) mein likho:
                node --version 
Agar version number aaya jaise v18.17.0 toh theek hai. Nahi aaya toh nodejs.org se download karo LTS version.
Step 2: Vite se React project banao
Terminal mein yeh command likho:
                npm create vite@latest projectname          -> yh command ik folder bnye gi
                cd projectname
                npm install                                 -> npm install sare packages download karta hai
                npm run dev                                 -> development server start karta hai
# Folder Structure
mera-pehla-app/
├── node_modules/      ← sare installed packages (chhuo mat)
├── public/            ← static files (images, fonts)
├── src/               ← TUMHARA SARA CODE YAHAN HOGA, or yhn mazeed components b bna skti hun
│   ├── App.jsx        ← main component
│   ├── main.jsx       ← entry point, React yahan start hota hai
│   └── index.css      ← global CSS
├── index.html         ← HTML template
├── package.json       ← project info aur dependencies
└── vite.config.js     ← Vite ki settings
               
main.jsx ->Yeh file sirf ek kaam karti hai — index.html mein jo <div id="root"> hai, uss mein poori React app inject karti hai

# PART 3: JSX — Asli Topic
JSX kya hai?
JSX ka full form hai JavaScript XML. Yeh ek syntax extension hai JavaScript ka jisme tum JavaScript ke andar HTML likh sakte ho.
Yeh real HTML nahi hai. Browser directly JSX nahi samajhta. Vite/Babel pehle isse pure JavaScript mein convert karta hai, phir browser chalata hai.

JSX:    const element = <h1>Salam Duniya!</h1>
JS:     const element = React.createElement('h1', null, 'Salam Duniya!')
Tum socho — agar har cheez ke liye React.createElement likhna pade toh kitna mushkil hoga. JSX ne yeh problem solve ki.

# JSX Rules
Rule 1: Ek root element hona chahiye , sb divs ko ik div m wrap kro ya <></> fragment use kro yh DOM m extra div nhi bnata Kab zaroorat hoti hai Fragment ki? Jab tum table rows return kar rahe ho:
Rule 2: class nahi, className likhna hai ,class reserve word h classes create krne k leye
Rule 3: for nahi, htmlFor likhna hai (labels mein) , <label htmlfor="name">Name</label>
Rule 4: Sab tags close karne padte hain , <br/> <input/> <hr/> <img/>
Rule 5: camelCase use karo attributes mein ,use backgroundColor instead of background-color

# JSX mein JavaScript use karna — Curly Braces {}
Yeh JSX ki sabse badi power hai. Jab bhi tum JSX mein JavaScript run karna chaho, curly braces {} use karo.

PART 4: Components Deep Dive
Component banane ka sahi tarika
Component sirf ek function hai jo JSX return karta hai. Lekin kuch rules hain:

Naam Capital letter se shuru hona chahiye — MyComponent, Button, Navbar
.jsx extension use karo
export default karo taaki doosri jagah use ho sake

# Q1 JSX kya hai aur yeh JS se kaise alag hai?
JSX is javascript xml extension it allow to write html along with js,
while in js we do everything manually.JSX directly browser nahi samajhta — Babel/Vite pehle ise React.createElement() mein convert karta hai, phir browser chalata hai.

# Q2 JSX mein class ki jagah className kyun use karte hain?
class is reseve word for creating classes

# Q3 Fragments <></> ka use kab aur kyun karte hain?
Fragment use karte hain jab multiple elements ko wrap karna ho lekin DOM mein extra <div> nahi banana chahte. Jaise table ke andar <tr> return karte waqt — agar <div> use karo toh table structure toot jaata hai.