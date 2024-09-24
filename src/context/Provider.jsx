import React from 'react'
import { useState, useEffect } from 'react'
import {reyes} from '../data/reyes'
import Context from './Context'

const Provider = ({children}) => {

  const [selected, setSelected] = useState([])
  const [reyesShuffled, setReyesShuffled] = useState([])
  const [matched, setMatched] = useState([])
  const [wrong, setWrong] = useState([])

  const shuffleReyes = () => {
    for ( let i = 13 ; i > 0 ; i-- ) {
      const j = Math.floor(Math.random() * (i + 1))
      const aux = reyes[i]
      reyes[i] = reyes[j]
      reyes[j] = aux
    }

    const auxArray = reyes.map((elem) => {
      return ({
        nombre: elem,
        estado: 0
      })
    })

    setReyesShuffled(auxArray)

  }

  useEffect(() => {
    shuffleReyes()
  }, [])

  return (
    <Context.Provider value={{ selected, setSelected, reyesShuffled, setReyesShuffled, matched, setMatched, wrong, setWrong, shuffleReyes }}>
      {children}
    </Context.Provider>
  )
}

export default Provider
