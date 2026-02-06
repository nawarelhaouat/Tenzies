import {useState, useEffect, useRef} from "react"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import Die from './components/Die'


const App = () => {
  const generateAllNewDice = () => {
  return new Array(10)
    .fill(0)
    .map(() => ({
      value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: nanoid()
    }));
  }

  const [dice, setDice] = useState(() => generateAllNewDice())
  const buttonRef = useRef(null);
  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value);

  useEffect(() => {
    gameWon && buttonRef.current.focus();
  }, [gameWon]);
  
  const rollDice = () => {
    gameWon ? setDice(generateAllNewDice()) :
      setDice(oldDice =>
        oldDice.map(die =>
          die.isHeld ? 
            die : 
            {...die, value: Math.ceil(Math.random() * 6)}
        )
      )
  }

  const hold = (id) => {
    setDice(oldDice => oldDice.map(die => 
      die.id === id ? 
        {...die, isHeld: !die.isHeld} : 
        die))
  }

  const diceElements = dice.map(die => 
    <Die key={die.id} value={die.value} isHeld={die.isHeld} hold={() => hold(die.id)} />)


  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && "Congratulations! You've won the game! Press 'New Game' to play again."}
      </div>
      <div className="main--container">
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          {diceElements}
        </div>
        <button ref={buttonRef} onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
      </div>
    </main>
  )
}

export default App