import React, { useState, useRef } from "react";

export const InputConfig = () => {
    
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

    function setInput1PlaceHolder(selectedOption){
        let message = "Vacio"
        if(selectedOption == "Calcular Moles"){
            message = "Masa Molar"
        }
        if(selectedOption == "Calcular Moleculas"){
            message = "Constante de Avogadro"
        }
        if(selectedOption == "Calcular Gramos"){
            message = "Masa Molar"
        }
        if(selectedOption == "Calcular Pje"){
            message = "Masa Molar"
        }
        return message
    }
    function setInput2PlaceHolder(selectedOption){
        let message = "holaa"
        if(selectedOption == "Calcular Moles"){
            message = "Masa Sustancia"
        }
        if(selectedOption == "Calcular Moleculas"){
            message = "Cantidad de Moles"
        }
        if(selectedOption == "Calcular Gramos"){
            message = "Cantidad de Moles"
        }
        if(selectedOption == "Calcular Pje"){
            message = "Cantidad de Moles"
        }
        return message
    }
    
  return (
    <>
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
                <li onClick={() => handleOptionClick("Calcular Pje")}>Calcular % Molar</li>
              </ul>
            </div>
            <div className="inputs50">
              <input placeholder={setInput1PlaceHolder(selectedOption)}/>
              <input placeholder={setInput2PlaceHolder(selectedOption)}/>
            </div>
            <button>Calcular</button>
          </div>
    </>
  )
}
