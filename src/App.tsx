import { useState } from "react"


function App() {
  
  const [ SelectorState ,setSelectorState] = useState(false)

  return (
    <>
    <div className="container">
    <h1>Calculadora Quimica</h1>
    </div>
    <div className="container">
      <div className="calculator-box">
        <h2>Calculadora de moles, noseq noseq</h2>
        <div className="operation-box">
          <input />
          <div className="selector-none">
            <ul>
              <li>OPT1</li>
              <li>OPT2</li>
              <li>OPT3</li>
            </ul>
          </div>
          <div className="inputs50">
            <input/>
            <input/>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
