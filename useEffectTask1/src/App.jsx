
import { useState , useEffect } from 'react';
import './App.css'

function App() {
  let [quote, setQuote] = useState(null);
async function getQuote() {
    const url = "https://dummyjson.com/quotes";
    let response = await fetch(url);
    response = await response.json();
    let randomIndex = Math.floor(Math.random()*response.quotes.length);
    console.log(response);
    setQuote(response.quotes[randomIndex]);

  }
   useEffect(()=>{ getQuote()},[]) //first quote auto p aye ga
  return (
   <div className='container'>
      <p>
        {quote?.quote}
        <br />
    </p>
    <p className='snd-para'>{quote?.author}</p>
    <button onClick={getQuote}>Get Quote</button>
   </div>
  )
}

export default App
