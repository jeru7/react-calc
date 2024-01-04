import React from "react";
import "../styles/App.css";

const History = ({ history, setHistory, isLightMode }) => {
  const deletePanel = () => {
    setHistory([]);
  };

  return (
    <div className={`history ${isLightMode ? "light-mode" : ""}`}>
      <div className={`history-container ${isLightMode ? "light-mode" : ""}`}>
        <div className={`history-header ${isLightMode ? "light-mode" : ""}`}>
          <h2>History</h2>
          <div
            className={`history-delete ${isLightMode ? "light-mode" : ""}`}
            onClick={deletePanel}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </div>
        </div>
        <div className={`history-display ${isLightMode ? "light-mode" : ""}`}>
          {history.map((item, index) => (
            <div
              key={index}
              className={`history-item ${isLightMode ? "light-mode" : ""}`}
            >
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
