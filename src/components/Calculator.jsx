import React from "react";
import History from "./History";
import { useState } from "react";
import "../styles/App.css";
import * as math from "mathjs";

const Calculator = () => {
  const [prevResult, setPrevResult] = useState("");
  const [currentResult, setCurrentResult] = useState("");
  const [history, setHistory] = useState([]);

  const buttonClicked = (value) => {
    if (
      (currentResult === "" && ["-", "*", "+", "/"].includes(value)) ||
      (["-", "*", "+", "/", "."].includes(currentResult.slice(-1)) &&
        ["-", "*", "+", "/", "."].includes(value))
    ) {
      return;
    }

    if (currentResult === "ERROR") {
      setCurrentResult("");
      return;
    }

    if (value === "=") {
      try {
        const result = math.evaluate(currentResult);
        const newHistory = { prev: currentResult, current: result.toString() };
        setPrevResult(currentResult);
        setCurrentResult(result.toString());
        setHistory([...history, newHistory]);
      } catch (err) {
        setCurrentResult("ERROR");
      }
    } else if (value === "C") {
      setPrevResult("");
      setCurrentResult("");
    } else if (value === "DEL") {
      if (currentResult === "ERROR") {
        setCurrentResult("");
        return;
      }

      setCurrentResult(currentResult.slice(0, -1));
    } else {
      setCurrentResult(currentResult + value);
    }
  };

  return (
    <main className="main">
      <div className="calculator-container">
        <div className="calculator">
          <div className="calculator-screen">
            <div className="previous-result">{prevResult}</div>
            <div className="current-result">{currentResult}</div>
          </div>
          <div className="calculator-controls">
            <button
              className="buttons clear"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              C
            </button>
            <button
              className="buttons delete"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              DEL
            </button>
            <button
              className="buttons operations"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              /
            </button>
            <button
              className="buttons operations"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              *
            </button>
            <button
              className="buttons"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              7
            </button>
            <button
              className="buttons"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              8
            </button>
            <button
              className="buttons"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              9
            </button>
            <button
              className="buttons operations"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              -
            </button>
            <button
              className="buttons"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              4
            </button>
            <button
              className="buttons"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              5
            </button>
            <button
              className="buttons"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              6
            </button>
            <button
              className="buttons operations"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              +
            </button>
            <button
              className="buttons"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              1
            </button>
            <button
              className="buttons"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              2
            </button>
            <button
              className="buttons"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              3
            </button>
            <button
              className="buttons equal"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              =
            </button>
            <button
              className="buttons button-0"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              0
            </button>
            <button
              className="buttons dot"
              onClick={(e) => buttonClicked(e.target.innerText)}
            >
              .
            </button>
          </div>
        </div>
        <History history={history} setHistory={setHistory} />
      </div>
    </main>
  );
};

export default Calculator;
