import React, { useState } from 'react'

const formulario = () => {
    const [x, setX] = useState('inicial')

    function alterarInput() {
        setX(x  + "!");
    }
  return (
    <div>
        <input type="text" value={x} onChange={e => setX(e.target.value)} />
        <button onClick={alterarInput}>Alterar Input</button>
    </div>
  )
}

export default formulario