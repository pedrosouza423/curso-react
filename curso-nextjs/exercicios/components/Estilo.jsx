import React from 'react'

const Estilo = (props) => {
  return (
    <div>
        <h1 style={{
            background: props.numero >= 0 ? '#2d2' : "#D22",
            color: "#fff",
            textAlign: props.right ? 'right' : 'left',
            }}>
            Texto
        </h1>
    </div>
  )
}

export default Estilo