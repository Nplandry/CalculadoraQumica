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
      let content = "Informacion del Compuesto \n holamundo \n holamundo \n holamundo" ;
      setModalContent(content);
      setIsModalOpen(true);
  }

/*const content = `Valor del input1: ${compound}\nValor del input2: ${result}\nValor del input2: ${input2compound}\nEl resultado de los moles es igual a ${parseFloat(result) * input2compound} MOL`*/
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

  //Crear una funcion con cada resultado de cada operacion
  const calculoMoles = () => {
    let resultado = `Calculo de moles: ${input2compound / parseFloat(result)}`
    return resultado
  }
  const calculoMoleculas = () => {
    let resultado = `Calculo de moleculas: ${parseFloat(result) * input2compound}`
    return resultado
  }
  const calculoGramos = () => {
    let resultado = `Calculo de gramos: ${parseFloat(result) * input2compound}`
    return resultado
  }
 // const calculoPje = () => {
   // let resultado = `Calculo de %: ${}`
  //}

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
    const elementRegex = /([A-Z][a-z]*)(\d*)/g;
    let match;
    let totalMass = 0;

    while ((match = elementRegex.exec(formula)) !== null) {
      const element = match[1];
      const quantity = parseInt(match[2], 10) || 1;
      const elementInfo = elementsData[element];

      if (elementInfo) {
        totalMass += elementInfo.atomicMass * quantity;
      } else {
        return 'Compuesto no valido';
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
      placeholder = "C.Avogadro";
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
      placeholder = "Masa Sustancia";
    }
    if (selectedOption === "Calcular Moleculas") {
      placeholder = "C.Moles";
    }
    if (selectedOption === "Calcular Gramos") {
      placeholder = "C.Moles";
    }
    if (selectedOption === "Calcular Pje") {
      placeholder = "C.Moles";
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
          <input placeholder={getInput1Placeholder()} value={result} readOnly />
          <input placeholder={getInput2Placeholder()} value={input2compound} onChange={input2value}/>
        </div>
        <button onClick={alertConInfo}>Calcular</button>
        <button className="info-btn" onClick={InformacionDelCompuesto}>Sobre el Compuesto</button>
      </div>
 
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              {modalContent.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default InputConfig;
