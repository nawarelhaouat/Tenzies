import {useState} from "react"
import {nanoid} from "nanoid"
import Die from './components/Die'


const App = () => {
  const generateAllNewDice = () => {
  return new Array(10)
    .fill(0)
    .map(() => ({
      value: Math.ceil(Math.random() * 6), 
      isHeld: true,
      id: nanoid()
    }));
  }

  const [dice, setDice] = useState(generateAllNewDice())
  const diceElements = dice.map(die => <Die value={die.value} isHeld={die.isHeld} key={die.id} />)
  const rollDice = () => {
    setDice(generateAllNewDice())
  }

  return (
    <main>
      <div className="main--container">
        <div className="dice-container">
          {diceElements}
        </div>
        <button onClick={rollDice}>Roll</button>
      </div>
    </main>
  )
}

export default App