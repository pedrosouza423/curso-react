import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Primeiro from "./components/basicos/Primeiro";

ReactDOM.render(
  <>
    <Primeiro></Primeiro>
    <App></App> 
  </>,
  document.getElementById("root")
);
