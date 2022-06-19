import React from 'react'

const repeticao1 = () => {
    const listaDeAprovados = [
        "Pedro",
        "Luizinha",
        "Lucas"
    ]

    const renderLista = () => {
        const itens = [];

        for (let index = 0; index < listaDeAprovados; index++) {
            itens.push(<li>{listaDeAprovados[index]}</li>);         
        }
    }

    return (
    <ul>
        {renderLista()}
    </ul>
  )
}

export default repeticao1