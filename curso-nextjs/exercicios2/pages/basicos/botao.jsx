import React from 'react'

const botao = () => {
    const acao1 = () => {
        console.log('acao1');
    }

    const acao2 = (e) => {
        console.log(e);
    }

    return (
    <div>
        <button onClick={acao1}>Click</button>
        <button onClick={() => console.log('acao3')}>Click2</button>
        <button onClick={acao2}>Click3</button>

        <div>
            <input type="text" onChange={e => console.log(e.target.value)} />
        </div>
    </div>
  )
}

export default botao