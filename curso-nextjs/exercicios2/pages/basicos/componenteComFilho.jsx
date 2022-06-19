import React from 'react'
import Item from '../../components/Item'
import Lista from '../../components/Lista'

const componenteComFilho = () => {
  return (
    <div>
        <Lista>
            <Item conteudo="Item #11" />
            <Item conteudo="Item #12" />
            <Item conteudo="Item #13" />
        </Lista>
    </div>
  )
}

export default componenteComFilho