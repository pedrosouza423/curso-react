import React from 'react'

type Props = {
    nome: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <h2>Meu segundo componente</h2>
        <p>O nome dele é {props.nome}</p>
    </div>
  )
}

export default SecondComponent