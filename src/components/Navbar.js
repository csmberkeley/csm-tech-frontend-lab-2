import React from "react";
import "../style/resources.css"

function Navbar({ classes, onNavBarClick }) {
  return (
    <div>
      {classes.map((x) => {
        return (
          <button key={x.id} onClick={() => onNavBarClick(x.id)} className="tab">
            {x.name}
          </button>
        );
      })}
    </div>
  );
}

export default Navbar;
