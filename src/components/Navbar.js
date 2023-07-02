import React from "react";

function Navbar({ classes, onNavBarClick }) {
  return (
    <div>
      {classes.map((x) => {
        return (
          <button key={x.id} onClick={() => onNavBarClick(x.id)}>
            {x.name}
          </button>
        );
      })}
    </div>
  );
}

export default Navbar;
