const Die = ({ value, isHeld, key }) => {
  return (
    <button key={key} className={isHeld ? "held" : ""}>{value}</button>
  )
}

export default Die