import React from "react";

function Navbar({ classes, onNavBarClick, id }) {
  return (
    <div className="navbar">
      {classes.map((x) => {
        return (
          <button key={x.id} onClick={() => onNavBarClick(x.id)} className={x.id === id ? "active tab" : "tab"}>
            {x.name}
          </button>
        );
      })}
    </div>
  );
}

export default Navbar;
