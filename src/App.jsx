import {useState} from "react"
import Die from './components/Die'

const App = () => {
  const generateAllNewDice = () => {
  return new Array(10)
    .fill(0)
    .map(() => Math.ceil(Math.random() * 6));
  }

  const [dice, setDice] = useState(generateAllNewDice())
  const diceElements = dice.map((die, index) => <Die value={die} key={index} />)

  return (
    <main>
      <div className="main--container">
        <div className="dice-container">
          {diceElements}
        </div>
      </div>
    </main>
  )
}

export default App