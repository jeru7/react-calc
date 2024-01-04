import "./styles/App.css";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light-mode", isLightMode);

    return () => {
      document.body.classList.remove("light-mode");
    };
  }, [isLightMode]);

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="App">
      <Header isLightMode={isLightMode} toggleLightMode={toggleLightMode} />
      <Calculator isLightMode={isLightMode} />
      <Footer isLightMode={isLightMode} />
    </div>
  );
}

export default App;
