import React, { useState, useRef } from "react";
import  InputConfig from './components/InputConfig.jsx'
function App() {


  return (
    <>
      <div className="container">
        <h1>Calculadora Quimica</h1>
      </div>
      <div className="container">
        <div className="calculator-box">
          <h2>Calculadora de gramos, moles, moleculas y atomos</h2>
          <InputConfig />
        </div>
      </div>
    </>
  );
}

export default App;
