import React from "react";
import "../../index.css";
import "./HomePage.css";
import Logo from "../../images/Shower.png";

function HomePage() {
  return (
    <>
      <img
        src={Logo}
        className="logo"
        alt="Crit Hit Logo"
        height="100px"
        width="250px"
      />
      <h1 className="title" alt="title">
        Crit Hit WebDev
      </h1>
      <h3 className="subtitle" alt="subtitle">
        Websites for Gamers by Gamers
      </h3>
    </>
  );
}

export default HomePage;
