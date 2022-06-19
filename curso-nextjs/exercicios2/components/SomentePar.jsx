import React from 'react'

const SomentePar = (props) => {
  const numeroPar = props.numero
  return numeroPar % 2 === 0 ? <h1>{numeroPar}</h1> : null
}

export default SomentePar