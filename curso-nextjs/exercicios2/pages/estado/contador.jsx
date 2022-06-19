import React, { useState } from 'react'
import ContadorDisplay from '../../components/ContadorDisplay'

const contador = () => {
    const [x, setX] = useState(0)

    const incrementX = () => setX(x+1)
    const decrementX = () => setX(x-1)

  return (
    <div>
        <h1>Contador</h1>
        <div>Valor: {x}</div>
        <ContadorDisplay numero={x} />
        <button onClick={decrementX}>-</button>
        <button onClick={incrementX}>+</button>
    </div>
  )
}

export default contador