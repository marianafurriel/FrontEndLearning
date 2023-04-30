import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Quote from './components/quote/quote';
function App() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const getQuote = () => {
    fetch(`${process.env.REACT_APP_BB_URL}/v1/quotes`)
      .then(response => response.json())
      .then(data => {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      })
      .catch(error => console.error(error));
  }

  useEffect(() => {
    getQuote();
  }, [])
  return (
    <div className='container'>
      <div className='quote'>
      {/* <p>{quote}</p> */}
      <Quote data={[quote, author]} />
      <button className='btn' onClick={getQuote}>Another quote</button>
    </div>
    </div>
  );
}
export default App;
