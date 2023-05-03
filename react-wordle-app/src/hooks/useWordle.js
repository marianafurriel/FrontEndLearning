import { useState } from 'react'

const useWordle = (solution) => {

  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)

  const formatGuess = () => {
    let solutionArray = [...solution]
    let formattedGuess = [...currentGuess ].map((letter) => {
      return{key:letter,color:"grey"} //default é cinza
    });

    //achar letras verdes
    formattedGuess.forEach((letter,i) => {
      if(solutionArray[i]===letter.key){
        formattedGuess[i].color = "green";
        solutionArray[i]=null;
      }
    })

    //achar letras amarelas
    formattedGuess.forEach((letter,i) => {
      if(solutionArray.includes(letter.key) && letter.color!="green"){
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    })
    return formattedGuess;
  }

  const addNewGuess = (formattedGuess) => {
    if(currentGuess===solution){
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    })
    setHistory((prevHistory) => {
      return [...prevHistory,currentGuess];
    })
    setTurn((prevTurn) => {
      return prevTurn+1;
    })
    setCurrentGuess('');
  }

  const handleKeyup = ({ key }) => {
    if (key === 'Enter') {
      if (turn > 5) { //teste se ainda não esgotou as tentativas
        console.log("You used all your guesses");
        return
      }
      if (history.includes(currentGuess)) { //testa se a tentativa está repetida
        console.log("you already tried that word")
        return
      }
      if (currentGuess.length !== 5) {
        console.log("your word must be 5 chars long")
      }

      const formatted = formatGuess();
      addNewGuess(formatted)
    }

    if (key === 'Backspace') {
      setCurrentGuess(prev => {
        return prev.slice(0, -1)
      })
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(prev => { return prev + key })
      }
    }
  }

  return { turn, currentGuess, guesses, isCorrect, handleKeyup }

}
export default useWordle