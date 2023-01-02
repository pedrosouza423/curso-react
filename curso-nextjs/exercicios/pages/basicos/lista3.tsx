/* eslint-disable react/jsx-key */
import React from 'react'

export default function lista3 () {

    function getList(final: number) {
      const lista = []
      for (let index = 1; index <= final; index++) {
        lista.push(index)
      }

      return lista
    }
  return (
    <div>
        {getList(15)}
    </div>
  )
}
