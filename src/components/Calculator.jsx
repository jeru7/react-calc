import React from "react";
import "../styles/App.css";

const Calculator = () => {
  return (
    <main className="main">
      <div className="calculator-container">
        <div className="calculator">
          <div className="calculator-screen">
            <div className="previous-result"></div>
            <div className="current-result"></div>
          </div>
          <div className="calculator-controls">
            <button className="buttons clear">C</button>
            <button className="buttons delete">DEL</button>
            <button className="buttons operations">/</button>
            <button className="buttons operations">*</button>
            <button className="buttons">7</button>
            <button className="buttons">8</button>
            <button className="buttons">9</button>
            <button className="buttons operations">-</button>
            <button className="buttons">4</button>
            <button className="buttons">5</button>
            <button className="buttons">6</button>
            <button className="buttons operations">+</button>
            <button className="buttons">1</button>
            <button className="buttons">2</button>
            <button className="buttons">3</button>
            <button className="buttons equal">=</button>
            <button className="buttons">0</button>
            <button className="buttons dot">.</button>
          </div>
        </div>
        <div className="history">
          <div className="history-container">
            <div className="history-header">
              <h2>History</h2>
              <p>DELETE</p>
            </div>
            <div className="history-display"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
