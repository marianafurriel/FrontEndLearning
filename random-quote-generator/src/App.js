import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [quotes, setQuotes] = useState('')

  const getQuote = ()=>{
    fetch('https://type.fit/api/quotes')
    .then((res) => res.json())
    .then ((data) => {
      let randomNum = Math.floor(Math.random()*data.length);
      setQuotes(data[randomNum])
      console.log(quotes)
    });
  }

  useEffect(()=>{
    getQuote();
  },[])
  return (
    <div className="App">
      <div className='quote'></div>
      <p>{quotes.text}</p>
      <p>{quotes.author}</p>
      <div className='btnContainer'>
      <button className='btn' onClick={getQuote}>Get quote</button>
      <a href='' className='btn'>Tweet</a>
      </div>
    </div>
  );
}

export default App;
