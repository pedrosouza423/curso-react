import React from 'react'
import listaProdutos from '../../data/listaProdutos'

const repeticao2 = () => {
    function renderizarLinhas() {
        return listaProdutos.map((produto) => {
            return(
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        } )        
    }

  return (
    <div>
        <table style={{border: '1px solid black'}}>
            <thead>
                <th>Código</th>
                <th>Nome</th>
                <th>Preco</th>
            </thead>
            <tbody>
                {renderizarLinhas()}
            </tbody>
        </table>

    </div>
  )
}

export default repeticao2