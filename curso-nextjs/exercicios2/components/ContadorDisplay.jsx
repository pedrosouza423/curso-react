import React from 'react'

const ContadorDisplay = (props) => {
  return (
    <div style={{
        height: '100px',
        width: '100px',
        borderRadius: '20%',
        backgroundColor: '#222',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        {props.numero}
    </div>
  )
}

export default ContadorDisplay