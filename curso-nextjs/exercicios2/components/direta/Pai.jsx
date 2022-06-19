import React from 'react'
import Filho from './Filho'

const Pai = () => {
  return (
    <div>
        <Filho familia="Souza" />
        <Filho familia="Fernandes" />
    </div>
  )
}

export default Pai