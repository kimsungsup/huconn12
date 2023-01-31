import "./css/index.css";
import { useState, useEffect } from "react";

function Header() {
  const [HeaderState, setHeaderState] = useState("");
  useEffect(() => {
    const root = document.getElementById("root");
    function ScrollEvent(e) {
      const top = e.target.scrollTop;
      if (top > 100) {
        setHeaderState("black");
      } else {
        setHeaderState("");
      }
    }

    root.addEventListener("scroll", ScrollEvent);

    return () => {
      root.removeEventListener("scroll", ScrollEvent);
    };
  }, [setHeaderState]);

  return (
    <header>
      <div className={`header `}>
        <div className={`wrapper ${HeaderState ? "black" : ""}`}>
          <div className="header-wrapper">
            <img src="/assets/header/logo.svg" alt="logo" />

            <ul className="header-menu">
              <li>ABOUT</li>
              <li>R&D</li>
              <li>BUSINESS</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
