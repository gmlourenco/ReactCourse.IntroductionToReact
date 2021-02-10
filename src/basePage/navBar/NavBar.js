import React from "react";

import "./navBar.css";

export default function NavBar() {
  let text = <span> Task List </span>;

  const mouseOver = (event) => {
    text = <span> (React Testing) </span>;
  };

  const mouseOut = (event) => {
    text = <span> Task List </span>;
  };

  return (
    <nav className="navbar" onMouseOver={mouseOver} onMouseOut={mouseOut}>
      {text}
    </nav>
  );
}
