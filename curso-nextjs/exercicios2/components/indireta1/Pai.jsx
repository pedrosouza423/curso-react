import React from 'react'
import Filho from './Filho'

const Pai = (props) => {
    const falarComigo = (e) => {
        console.log(e)
    }
  return (
    <div>
        <Filho funcao={falarComigo} />
    </div>
  )
}

export default Pai