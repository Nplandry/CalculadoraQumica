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
          <h2>Calculadora de moles, noseq noseq</h2>
          <div className="operation-box" onMouseLeave={leaveInput}>
            <input
              ref={inputRef}
              value={selectedOption}
              onFocus={toggleInput}
              onClick={handleInputClick}
              readOnly
            />
            <div className={selectorState ? "selector" : "selector-none"}>
              <ul>
                <li onClick={() => handleOptionClick("OPT1")}>OPT1</li>
                <li onClick={() => handleOptionClick("OPT2")}>OPT2</li>
                <li onClick={() => handleOptionClick("OPT3")}>OPT3</li>
              </ul>
            </div>
            <div className="inputs50">
              <input />
              <input />
            </div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
