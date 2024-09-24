import { useState } from 'react'
import './App.css'
import KingCard from './components/KingCard'
import { useContext } from 'react'
import Context from './context/Context'
import WinModal from './components/WinModal'

function App() {

  const { reyesShuffled, matched } = useContext(Context)


  return (
    <>
      {matched.length == 14 && <WinModal />}
      <div className="card-container">
        {
          reyesShuffled?.map((elem, index) => {
            return (
              <KingCard nombre={elem.nombre} id={index} key={index} />
            )
          })
        }
      </div>
    </>
  )
}

export default App
