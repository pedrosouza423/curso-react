import './index.css';
import react from "react";
import ReactDOM from "react-dom";

const tag = <h1><strong>Olá react</strong></h1>

ReactDOM.render(
    <div>
        {tag}
    </div>,
    document.getElementById('root')
);