import React from 'react'
import { useContext } from 'react'
import Context from '../context/Context'

const KingCard = ({nombre, id}) => {

  const { selected, setSelected, reyesShuffled, matched, setMatched, wrong, setWrong } = useContext(Context)

  const handleClick = (id, nombre) => {
    if (matched.includes(id)) {
      return
    }
    if (selected.length < 1 ) {
      setSelected([...selected, id])
    }
    if (selected.length == 1 ) {
      if (nombre == reyesShuffled[selected[0]].nombre && id != selected[0]) {
        setMatched([...matched, id, selected[0]])
        setSelected([])
      } else {
        setSelected([...selected, id])
        setWrong([...wrong, id, selected[0]])
        setTimeout(() => {
          setSelected([])
          setWrong([])
        }, 1000)
      }
    }
  }

  return (
    <div className={`king-card ${selected.includes(id) && 'pop'} ${!matched.includes(id) && !selected.includes(id) && 'unmatched'}`} id={id} onClick={() => handleClick(id, nombre)}>
      <div className={
        `king-card-wrapper 
        ${(selected.includes(id) || matched.includes(id)) && 'revealed'} 
        ${matched.includes(id) && 'matched'}
        ${wrong.includes(id) && 'wrong'}`
        }>
        {matched.includes(id) && <h3 className='king-name'>{nombre}</h3>}
        <img src={`./rey_${nombre}.png`} alt="" />
        <div className="card-back"></div>
      </div>
    </div>
  )
}

export default KingCard
