import React from 'react'

const repeticao1 = () => {
    const lista = [
        "Pedro",
        "Thiago",
        "Luizina"
    ]

    const renderLista = () => {
        return lista.map((nome, i) => <li key={i}>{nome}</li>);
    }

  return (
    <div>
        <ul>
            {renderLista()}
        </ul>
    </div>
  )
}

export default repeticao1