import React from 'react'
import { useContext } from 'react'
import Context from '../context/Context'

const WinModal = () => {

  const  {shuffleReyes, setMatched, setSelected} = useContext(Context)

  const handleClick = () => {
    setMatched([])
    setSelected([])
    shuffleReyes()
  }

  return (
    <div className="win-modal" >
      <h1>IU GÜIN!</h1>
      <button onClick={handleClick}>PLEI AGUEIN</button>
    </div>
  )
}

export default WinModal
