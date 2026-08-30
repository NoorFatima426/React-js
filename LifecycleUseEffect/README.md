# useEffect & Lifecycle
# PART 1: Lifecycle Kya Hota Hai?
Socho ek insaan ki zindagi:
Paida hua → School gaya → Kaam kiya → Wafaat
# React component ki bhi zindagi hoti hai:
Mount          Update           Unmount
(paida hua) → (badla kuch) → (hat gaya)
    ↓               ↓              ↓
useEffect      useEffect      Cleanup
runs           runs again     function

Mount — Component pehli baar screen pe aaya
Update — State/props badli, component dobara render hua
Unmount — Component screen se hat gaya

# PART 2: Side Effects Kya Hote Hain?
React ka kaam sirf UI banana hai। Lekin kabhi kabhi tumhe React ke bahar bhi kaam karna hota hai — yeh Side Effects hain:
# Side Effects:
├── API call karna (data fetch karna)
├── Timer set karna (setTimeout, setInterval)
├── Event listener lagana
├── localStorage mein save karna
├── Document title change karna
└── WebSocket connect karna
Yeh sab React ke "control" se bahar hain — isliye useEffect mein karte hain।