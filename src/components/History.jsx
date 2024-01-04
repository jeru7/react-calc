import React from "react";
import { useState } from "react";
import "../styles/App.css";

const History = ({ history, setHistory }) => {
  const deletePanel = () => {
    setHistory([]);
  };

  return (
    <div className="history">
      <div className="history-container">
        <div className="history-header">
          <h2>History</h2>
          <div className="history-delete" onClick={deletePanel}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </div>
        </div>
        <div className="history-display">
          {history.map((item, index) => (
            <div key={index} className="history-item">
              <div className="history-prev">{item.prev}</div>
              <div className="history-current">{item.current}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
