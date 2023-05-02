import { useState } from 'react'

const useWordle = (solution) => {

  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([]) // each guess is an array
  const [history, setHistory] = useState(['hello', 'ninja']) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)

  const formatGuess = () => {
  console.log("formatting the guess: ",currentGuess)
   }

  const addNewGuess = () => { }

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
      
      formatGuess()
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