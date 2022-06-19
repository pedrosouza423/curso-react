import React from 'react'

const Filho = (props) => {
  return (
    <div>
        Filho
        <button onClick={props.funcao}>Click #01</button>
        <button onClick={() => props.funcao("Passei no enem")}>Click #02</button>
    </div>
  )
}

export default Filho