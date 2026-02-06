const Die = ({ value, isHeld, hold }) => {
  return (
    <button className={isHeld ? "held" : ""} onClick={hold}>{value}</button>
  )
}

export default Die