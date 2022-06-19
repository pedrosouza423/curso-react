import React from 'react'
import If from '../../components/If'
import SomentePar from '../../components/SomentePar'

const condicional2 = () => {
  const numero = 2
  return (
    <div>
        <If teste={numero % 2 === 0}>O numero é par</If>        
    </div>
  )
}

export default condicional2