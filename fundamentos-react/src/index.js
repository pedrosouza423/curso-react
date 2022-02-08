import './index.css';
import react from "react";
import ReactDOM from "react-dom";

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParamentro"


ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro
            titulo ="Teste"
            subtitulo = "Implementação"/>
    </div>,
    document.getElementById('root')
);