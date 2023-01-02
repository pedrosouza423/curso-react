/* eslint-disable react/jsx-key */
import React from 'react'

export default function lista2 () {

    function getList() {
        const lista = [
            <span>1</span>,
            <span>2</span>,
            <span>3</span>,
            <span>4</span>,
            <span>5</span>,
        ]
        return lista
    }
  return (
    <div>
        {getList()}
    </div>
  )
}
