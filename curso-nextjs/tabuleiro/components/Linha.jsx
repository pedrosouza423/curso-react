import React from 'react'
import Subdivisao from './Subdivisao'

const Linha = (props) => {
  return (
    <div style={{display: 'flex'}}>
        <Subdivisao preta={props.preta}/>
        <Subdivisao preta={!props.preta}/>
        <Subdivisao preta={props.preta}/>
        <Subdivisao preta={!props.preta}/>
        <Subdivisao preta={props.preta}/>
        <Subdivisao preta={!props.preta}/>
        <Subdivisao preta={props.preta}/>
        <Subdivisao preta={!props.preta}/>
    </div>
  )
}

export default Linha