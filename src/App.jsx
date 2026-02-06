import Die from './components/Die'
const App = () => {
  return (
    <main>
      <div className="main--container">
        <div className="dice-container">
          <Die value={1}/>
        </div>
      </div>
    </main>
  )
}

export default App