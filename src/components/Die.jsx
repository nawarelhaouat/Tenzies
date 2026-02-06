const Die = ({ value, isHeld, hold }) => {
  return (
    <button 
        className={isHeld ? "held" : ""} 
        onClick={hold}
        aria-label={`Die with value ${value} that is ${isHeld ? "held" : "not held"}`}
    >{value}</button>
  )
}

export default Die