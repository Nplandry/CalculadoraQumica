import React, { useState, useRef } from "react";

function App() {
  const [selectorState, setSelectorState] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const inputRef = useRef(null);

  const toggleInput = () => {
    setSelectorState(!selectorState);
  };

  const handleInputClick = () => {
    setSelectorState(true);
  };

  const leaveInput = (e) => {
    if (!inputRef.current.contains(e.target)) {
      setSelectorState(false);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectorState(false);
  };

  return (
    <>
      <div className="container">
        <h1>Calculadora Quimica</h1>
      </div>
      <div className="container">
        <div className="calculator-box">
          <h2>Calculadora de gramos, moles, moleculas y atomos</h2>
          <div className="operation-box" onMouseLeave={leaveInput}>
            <input placeholder="Compuesto Quimico Ejemplo: H2O"/>
            <input
              ref={inputRef}
              value={selectedOption}
              onFocus={toggleInput}
              onClick={handleInputClick}
              readOnly
              placeholder="Tipo de calculo"
            />
            <div className={selectorState ? "selector" : "selector-none"}>
              <ul>
                <li onClick={() => handleOptionClick("Calcular Moles")}>Calcular Moles</li>
                <li onClick={() => handleOptionClick("Calcular Moleculas")}>Calcular Moleculas</li>
                <li onClick={() => handleOptionClick("Calcular Gramos")}>Calcular Gramos</li>
              </ul>
            </div>
            <div className="inputs50">
              <input placeholder="Ingresa Moles"/>
              <input placeholder="Ingresa Gramos"/>
            </div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
