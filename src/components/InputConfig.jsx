import React, { useState, useRef } from "react";
import elementsData from '../components/data/ElementsData';
const InputConfig = () => {
  const [selectorState, setSelectorState] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [compound, setCompound] = useState("");
  const [input2compound, setNewInput2Value] = useState("");
  const [result, setResult] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const inputRef = useRef(null);

  const InformacionDelCompuesto = () => {
    let content = formatCompoundInfo(compound);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const InformacionDeUso = () => {
    let content = (
      <>
        <h1>Información de Uso</h1>
        <p><strong>Coeficientes:</strong> Para multilicar el compuesto por un coeficiente debes indicar <i>X*</i>, 
        siendo <i>X</i> el coeficiente. Ejemplo: <i>2*H2O</i></p>
        <p><strong>SubIndices: </strong> Para usar un subindice simplemente se debe colocar el numero despues
        del elemento. Ejemplo: <i>H2</i></p> 

      </>
    );
    setModalContent(content);
    setIsModalOpen(true);
  };

  const formatCompoundInfo = (formula) => {
    const elementRegex = /([A-Z][a-z]*)(\d*)/g;
    let match;
    let compoundInfo = [];

    while ((match = elementRegex.exec(formula)) !== null) {
      const element = match[1];
      const quantity = parseInt(match[2], 10) || 1;
      const elementInfo = elementsData[element];

      if (elementInfo) {
        compoundInfo.push({
          name: elementInfo.name,
          symbol: elementInfo.symbol,
          atomicMass: elementInfo.atomicMass,
          atomicNumber:elementInfo.atomicNumber,
          quantity: quantity,
          stateAtRoomTemp: elementInfo.stateAtRoomTemp
        });
      } else {
        return 'Compuesto no válido';
      }
    }

    return compoundInfo;
  };

  const alertConInfo = () => {
    const optionsMap = {
      "Calcular Moles": {
        placeholder: "Masa Molar",
        content: calculoMoles()
      },
      "Calcular Gramos": {
        placeholder: "Masa Molar",
        content: calculoGramos()
      },
      "Calcular Pje": {
        placeholder: "Masa Molar",
        content: "Calcular Pje"
      },
      "Calcular Moleculas": {
        placeholder: "C.Avogadro",
        content: calculoMoleculas()
      }
    };

    const selected = optionsMap[selectedOption];
  
    if (selected && getInput1Placeholder() === selected.placeholder) {
      setModalContent(selected.content);
      setIsModalOpen(true);
    }
  };

  const calculoMoles = () => {
    let resultado = `Calculo de moles: ${input2compound / parseFloat(result)}`;
    return resultado;
  };

  const calculoMoleculas = () => {
    let resultado = `Calculo de moleculas: ${6.022e23 * input2compound}`;
    return resultado;
  };

  const calculoGramos = () => {
    let resultado = `Calculo de gramos: ${parseFloat(result) * input2compound}`;
    return resultado;
  };

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
    setCompound("");
    setNewInput2Value("");
    setResult("");
  };

  const input2value = (e) => {
    const newValue = e.target.value;
    setNewInput2Value(newValue);
  };

  const handleCompoundChange = (e) => {
    const newCompound = e.target.value;
    setCompound(newCompound);
    if (selectedOption === "Calcular Moles" && getInput1Placeholder() === "Masa Molar" || selectedOption === "Calcular Gramos" && getInput1Placeholder() === "Masa Molar" || selectedOption === "Calcular Pje" && getInput1Placeholder() === "Masa Molar") {
      const newResult = calculateMolecularMass(newCompound);
      setResult(newResult);
    } else {
      const newResult = "6.022×10^23";
      setResult(newResult);
    }
  };
  const calculateMolecularMass = (formula) => {
    const elementRegex = /(\d*\*?[A-Z][a-z]*)(\d*)/g;
    let match;
    let totalMass = 0;
    let multiplier = 1; 
    const stack = []; 

    while ((match = elementRegex.exec(formula)) !== null) {
        let elementWithMultiplier = match[1]; 
        let quantity = parseInt(match[2], 10) || 1;


        if (elementWithMultiplier.startsWith('*')) {
            multiplier = parseInt(elementWithMultiplier.slice(1), 10);
            continue; 
        }

  
        if (elementWithMultiplier.includes('*')) {
            const parts = elementWithMultiplier.split('*');
            multiplier = parseInt(parts[0], 10);
            elementWithMultiplier = parts[1];
        }
        if (multiplier !== 1) {
            quantity *= multiplier;
        }

        const element = elementWithMultiplier.replace('*', ''); 
        const elementInfo = elementsData[element];

        if (elementInfo) {
            totalMass += elementInfo.atomicMass * quantity;
        } else {
            return 'Compuesto no válido';
        }
    }

    return `${totalMass.toFixed(3)} g/Mol`;
};
  const getInput1Placeholder = () => {
    let placeholder = "Seleccionar Tipo de Calculo";
    if (selectedOption === "Calcular Moles") {
      placeholder = "Masa Molar";
    }
    if (selectedOption === "Calcular Moleculas") {
      placeholder = "N.Avogadro";
    }
    if (selectedOption === "Calcular Gramos") {
      placeholder = "Masa Molar";
    }
    if (selectedOption === "Calcular Pje") {
      placeholder = "Masa Molar";
    }
    return placeholder;
  };

  const getInput2Placeholder = () => {
    let placeholder = "Seleccionar Tipo de Calculo";
    if (selectedOption === "Calcular Moles") {
      placeholder = "Masa Sustancia (Gramos)";
    }
    if (selectedOption === "Calcular Moleculas") {
      placeholder = "N.Moles";
    }
    if (selectedOption === "Calcular Gramos") {
      placeholder = "N.Moles";
    }
    if (selectedOption === "Calcular Pje") {
      placeholder = "N.Moles";
    }
    return placeholder;
  };

  return (
    <>
      <div className="operation-box" onMouseLeave={leaveInput}>
        <input
          placeholder="Compuesto Quimico Ejemplo: H2O"
          value={compound}
          onChange={handleCompoundChange}
        />
        <button className="como-usar-btn"
        onClick={InformacionDeUso}
        >
          i
        </button>
        <input
          ref={inputRef}
          value={selectedOption}
          onFocus={toggleInput}
          onClick={handleInputClick}
          readOnly
          placeholder="Tipo de calculo"
          required
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
          <input placeholder={getInput1Placeholder()} value={result} readOnly required/>
          <input placeholder={getInput2Placeholder()} value={input2compound} required onChange={input2value} />
        </div>
        <button onClick={alertConInfo}>Calcular</button>
        <button className="info-btn" onClick={InformacionDelCompuesto}>Sobre el Compuesto</button>
      </div>
 
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>
            {/*Informacion del input1*/}
            {compound}
            </h2>
            <div className="modal-content">
              {Array.isArray(modalContent) ? (
                modalContent.map((info, index) => (
                  <div key={index} className="element-info">
                    <h3>{info.name} ({info.symbol})</h3>
                    <p>Masa Atómica: {info.atomicMass}</p>
                    <p>Cantidad: {info.quantity}</p>
                    <p>Numero Atomico: {info.atomicNumber}</p>
                    <p>Estado: {info.stateAtRoomTemp}</p>
                  </div>
                ))
              ) : (
                <p>{modalContent}</p>
              )}
            </div>
            <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default InputConfig;
