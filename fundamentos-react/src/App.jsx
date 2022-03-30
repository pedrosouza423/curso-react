import React from 'react';

import Primeiro from'./components/basicos/Primeiro'
import ComParametros from'./components/basicos/ComParametros'
import Aleatorio from'./components/basicos/Aleatorio'

export default function App() {
    return (
        <div id="id">
            <h1>Fundamentos React</h1>

            <Aleatorio
            max={50}
            min={0}
            />

            <ComParametros
            nome="Pedro"
            subtitle="Subtitulo"/>
            <Primeiro/>
            <h1>Hello react!</h1>
        </div>
    )
}