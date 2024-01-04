import "../styles/App.css";

const Header = ({ isLightMode, toggleLightMode }) => {
  return (
    <nav className={`navbar ${isLightMode ? "light-mode" : ""}`}>
      <div className="navbar-container">
        <button
          className={`darkToggler ${isLightMode ? "light-mode" : ""}`}
          onClick={toggleLightMode}
        ></button>
      </div>
    </nav>
  );
};

export default Header;
