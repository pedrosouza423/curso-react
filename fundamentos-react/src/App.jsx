import React from 'react';
import './App.css'
import Card from'./components/layout/Card'
import Aleatorio from'./components/basicos/Aleatorio'
import ComParametros from'./components/basicos/ComParametros'
import Primeiro from'./components/basicos/Primeiro'

export default function App() {
    return (
        <div id="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
            <Card title="Terceiro">
                <Aleatorio
                max={60}
                min={1}
                />
            </Card>

            <Card title="2# Segundo">
                <ComParametros
                nome="Pedro"
                subtitle="Subtitulo"/>
            </Card>

            <Card title="1# Primeiro">
                <Primeiro></Primeiro>
            </Card>

            </div>
            
        </div>
    )
}