import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import { Quote } from './components/quote/quote'

function App() {
  const [currentQuote, setCurrentQuote] = useState(null)
  const quote = fetch(`${process.env.REACT_APP_BB_URL}/v1/quotes`)
  .then(response => response.json())
  .then(response=>{
      setCurrentQuote({quote:response[0].quote,author:response[0].author});
  })
  console.log(currentQuote)
  // console.log(currentQuote.quote)

  // Promise.all([quote])
  //   .then(async (response) => {
  //     const quoteResponse = await response[0].json();
  //     setCurrentQuote({quote:quoteResponse[0].quote,author:[0].author});
  //   }); //quanto a requisição for resolvida vai jogar a parte do quote e autor na constante
  return (
    <div className='container'>
      {/* <p>{currentQuote}</p>  */}

    </div>
  );
}
export default App;
