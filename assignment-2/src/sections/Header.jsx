import React from "react";
import "../index.css";
import "./Header.css";
const Header = () => {
  return (
    <header className="header-container">
      <nav className="header__nav">
        <a
          href="#"
          className="header-title decoration-none"
          onClick={() => window.location.reload()}
        >
          <h1
            className="header-title decoration-none text-black"
            onClick={() => window.location.reload()}
          >
            Book<span className="text-red">store</span>
          </h1>
        </a>
        <a
          className="header-userinfo decoration-none"
          href="https://github.com/HaNgocHieu0301"
        >
          <img className="header-userinfo__avatar" src="../avatar.png" alt="" />
          <p className="header-userinfo__name text-black font-bold">
            HieuHN0301
          </p>
        </a>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
